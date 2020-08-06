// initial state
const state = () => ({
  flashs: [],
  authenticated: false,
  jwt: ''
});

// getters
const getters = {
  isAuthenticated: (state) => {
    return state.authenticated;
  }
}

// mutations
const mutations = {
  pushFlash(state, flash) {
    state.flashs.push(flash);
    setTimeout(() => {
      state.flashs.pop();
    }, 2000);
  },
  login(state, data) {
    state.jwt = data.jwt;
    state.authenticated = true;
  },
  logout(state) {
    state.authenticated = false;
    state.jwt = '';
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations
}
