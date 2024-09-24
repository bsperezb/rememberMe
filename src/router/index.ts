import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
// import Home from '../pages/Home/index.vue';

// Define las rutas como objetos de tipo RouteRecordRaw
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import ('../pages/Home/index.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('../components/Test.vue')
  }
];

// Crea el router usando createRouter
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;