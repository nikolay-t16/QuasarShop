<template>
  <div class="personal top login twosmallfont">
    <a
      rel="nofollow"
      title="Мой кабинет"
      class="personal-link dark-color animate-load"
      href="javascript:;"
      @click="onClickCabinet"
    >
      <i
        class="svg inline  svg-inline-cabinet"
        aria-hidden="true"
        title="Мой кабинет">
        <q-icon name="o_https" class="header-user__icon"/>
      </i>
      <span class="wrap"><span class="name">Войти</span></span>
    </a>
    <q-dialog
      v-model="authPopup"
    >
      <div
        class="popup show"
      >
        <header-user-form/>
      </div>
    </q-dialog>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import HeaderUserForm from './HeaderUserForm';


@Component({
  components: {
    HeaderUserForm,
  },
})
export default class HeaderUser extends Vue {
  authPopup: boolean = false;

  onClickCabinet(): void {
    this.authPopup = true;
  };
};
</script>

<style>
  .header-user__icon {
    font-size: 18px;
  }
</style>
