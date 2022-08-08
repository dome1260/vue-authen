const state = {
  auth: {
    accessToken: '',
    id: null,
    firstName: '',
    lastName: ''
  }
}

const mutations = {
  SET_AUTH (state, payload) {
    state.auth = {
      ...payload
    }
  },
  CLEAR_AUTH (state) {
    state.auth = {
      accessToken: '',
      id: null,
      firstName: '',
      lastName: ''
    }
  }
}

const actions = {
  setAuth ({ commit }, payload) {
    commit('SET_AUTH', payload)
  },
  clearAuth ({ commit }) {
    commit('CLEAR_AUTH')
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
