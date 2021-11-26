import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/newarticle',
    name: 'Newarticle',
    // route level code-splitting
    // this generates a separate chunk (newarticle.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "newarticle" */ '../views/Newarticle.vue')
  },
  {
    path: "/articleselected/:id",
    name: "Articleselected",
    component: () => import(/* webpackChunkName: "articleselected" */ '../views/Articleselected.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
