import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/register',
    name: 'register',
    components: {default: Register},
    meta: { 
      requiresAuth: false
    }
  },
  {
    path: '/login',
    name: 'login',
    components: {default: Login},
  },
  {
    path: '/home',
    name: 'home',
    components: {default: Home},
    meta: { 
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})

export default router
