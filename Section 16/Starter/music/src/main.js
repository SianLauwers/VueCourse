import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VeeValidatePlugin from './includes/validation'
import { auth } from "./includes/firebase";
import Icon from "./directives/icon";
import I18n from '@/includes/i18n.js'


import './assets/base.css'
import './assets/main.css'

let app;

auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App);

    app.use(createPinia());
    app.use(router);
    app.use(VeeValidatePlugin);
    app.use(I18n);
    app.directive("icon", Icon)

    app.mount('#app');
  }
});


