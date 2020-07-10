import Vue from 'vue';
import VueRouter from 'vue-router';
import Demo from './views/Demo.vue';
import ModelDemo from './views/ModelDemo.vue';
import DemoComponent from './views/DemoComponent.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    alias: "/demo",
    name: 'Demo',
    component: Demo
  }, {
    path: "/modelDemo",
    name: 'modelDemo',
    component: ModelDemo
  }, {
    path: "/demoComponent",
    name: 'DemoComponent',
    component: DemoComponent
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
