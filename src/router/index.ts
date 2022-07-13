import { RouteRecordRaw } from 'vue-router';
import { RouterOptions } from 'vite-ssg';

const routes: RouteRecordRaw[] = [
  {
    name: 'Home',
    path: '/',
    component: () => import('@/views/HomePage.vue'),
  },
];

const router: RouterOptions = {
  base: import.meta.env.BASE_URL,
  routes,
};

export default router;
