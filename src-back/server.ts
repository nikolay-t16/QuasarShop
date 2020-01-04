import * as Koa from 'koa';

import connect from './db/connect';
import { routes } from './routes';


const bootstrap = async () => {
  await connect();
  const app = new Koa();
  app
    .use(routes.routes())
    .use(routes.allowedMethods())
    .listen(3001);
};

bootstrap().then(() => console.log('Server running on port 3001'));