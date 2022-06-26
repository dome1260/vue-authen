const state = {
  auth: {
    username: ''
  }
}

const mutations = {
  SET_AUTH (state, payload) {
    state.auth = {
      ...payload
    }
  }
}

const actions = {
  setAuth ({ commit }, payload) {
    commit('SET_AUTH', payload)
  }
}

const getters = {
  auth: state => state.auth
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
