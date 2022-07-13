import { ViteSSG } from 'vite-ssg';
import 'virtual:svg-icons-register';

import router from './router';

import '@/scss/main.scss';
import store from './stores';

import App from '@/App.vue';
import SvgIconComponent from '@/components/utils/SvgIcon.vue';

export const createApp = ViteSSG(
  App,
  router,
  ({ app, router, routes, isClient, initialState }) => {
    app.use(store).component('SvgIcon', SvgIconComponent);

    if (import.meta.env.SSR) initialState.pinia = store.state.value;
    else store.state.value = initialState.pinia || {};
    router.beforeEach((to, from, next) => {
      next();
    });
  }
);
