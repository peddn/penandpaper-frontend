import AuthApi from '../../api/AuthApi.js';

// initial state
const state = () => ({
    id: null,
    blocked: null,
    confirmed: null,
    createdAt: '',
    email: '',
    role: {},
    username: ''
})

// getters
const getters = {

}

// actions
const actions = {
  async login({ commit }, credentials) {
    let data = await AuthApi.login(credentials);
    if (data.error) {
      commit(
        'app/pushFlash',
        {
          type: 'error',
          message: data.message[0].messages[0].message
        },
        {
          root: true
        });
    } else {
      if (data.jwt && data.user) {
        commit('login', data);
      }
    }
  }
}

// mutations
const mutations = {
  login(state, data) {
    state.user.id = data.user.id;
    state.user.blocked = data.user.blocked;
    state.user.confirmed = data.user.confirmed;
    state.user.createdAt = data.user.created_at;
    state.user.email = data.user.email;
    state.user.role = data.user.role;
    state.user.username = data.user.username;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}