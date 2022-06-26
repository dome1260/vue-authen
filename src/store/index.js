import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import AuthModule from './modules/auth'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  key: 'vue-authen',
  modules: ['auth']
})

const store = new Vuex.Store({
  modules: {
    auth: AuthModule
  },
  plugins: [vuexLocal.plugin]
})

export default store
