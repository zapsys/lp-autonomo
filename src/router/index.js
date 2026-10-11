import { createRouter, createWebHistory } from 'vue-router';
import FormView from '../views/FormView.vue';
import LandingPageView from '../views/LandingPageView.vue';

const routes = [
  {
    path: '/',
    component: FormView,
  },
  {
    path: '/landing',
    component: LandingPageView,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});