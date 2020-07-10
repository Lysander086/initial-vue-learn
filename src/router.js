import Vue from 'vue'
import VueRouter from 'vue-router'
import Demo from './views/Demo.vue'
import ModelDemo from './views/ModelDemo.vue'
import DemoComponent from './views/DemoComponent.vue'
import demo9 from '@/pages/demo9'

Vue.use(VueRouter)

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
  }, {
    path: '/demo9/:userId',
    name: 'demo9',
    component: demo9

  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
