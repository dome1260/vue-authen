import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  if ((to.name === 'Login' || to.name === 'Register') && store.getters['auth/auth'].accessToken) {
    next({ name: 'Home' })
  }
  if (to.name !== 'Login' && to.name !== 'Register' && !store.getters['auth/auth'].accessToken) {
    next({ name: 'Login' })
  }
  next()
})

export default router
