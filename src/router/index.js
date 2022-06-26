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
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  console.log('store', store.getters['auth/auth'].username)

  if (to.name !== 'Login' && !store.getters['auth/auth'].username) {
    next({ name: 'Login' })
  } else {
    next()
  }

})

export default router
