import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home/Index.vue'),
    },
    {
      path: '/model-evaluation',
      name: 'model-evaluation',
      component: () => import('@/views/Evaluation/Index.vue'),
    },
    {
      path: '/sentiment-analysis',
      name: 'sentiment-analysis',
      component: () => import('@/views/Analysis/Index.vue'),
    },
  ],
});

export default router;
