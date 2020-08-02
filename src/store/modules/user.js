import UserApi from '../../api/UserApi.js';

// initial state
const state = () => ({
    id: null,
    blocked: null,
    confirmed: null,
    createdAt: '',
    email: '',
    role: {},
    username: '',
    jwt: ''
})

// getters
const getters = {

}

// actions
const actions = {
  async login({ commit }, credentials) {
    let data = await UserApi.login(credentials);
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
    state.id = data.user.id;
    state.blocked = data.user.blocked;
    state.confirmed = data.user.confirmed;
    state.createdAt = data.user.created_at;
    state.email = data.user.email;
    state.role = data.user.role;
    state.username = data.user.username;
    state.jwt = data.jwt;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}