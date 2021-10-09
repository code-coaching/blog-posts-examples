import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/PrimaryLayout.vue'),
    children: [
      {
        path: 'first',
        component: () => import('pages/First.vue'),
      },
      {
        path: 'second',
        component: () => import('pages/Second.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
