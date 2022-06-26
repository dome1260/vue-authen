import Vue from 'vue'
import Vuex from 'vuex'
import AuthModule from './modules/auth'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    auth: AuthModule
  },
  plugins: []
})

export default store
