require('reflect-metadata');

const { createConnection } = require('typeorm');
const Koa = require('koa');
const koaBody = require('koa-bodyparser');
const { graphqlKoa, graphiqlKoa } = require('graphql-server-koa');
const KoaRouter = require('koa-router');
const cors = require('koa2-cors');
const schema = require('./data/schema');
const productEntity = require('./data/product/entity');
const rubricEntity = require('./data/rubric/entity');

createConnection({
  type: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: '123',
  database: 'shop',
  entities: [
    productEntity,
    rubricEntity,
  ],
}).then(() => {
  const app = new Koa();
  const router = new KoaRouter();
  const PORT = 3001;

  app.use(koaBody());
  app.use(cors());
  router.post('/graphql', graphqlKoa({ schema }));
  router.get('/graphql', graphqlKoa({ schema }));
  // инструмент для тестирования запросов localhost:3000/graphiql
  router.get('/graphiql', graphiqlKoa({ endpointURL: '/graphql' }));
  app.use(router.routes());
  app.use(router.allowedMethods());
  // запуск сервера
  app.listen(PORT, () => {
    console.log('Server is running on', `localhost:${PORT}`);
    console.log('GraphiQL dashboard', `localhost:${PORT}/graphiql`);
  });
}).catch(error => console.log(`Error: ${error}`));