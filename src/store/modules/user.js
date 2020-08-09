import UserApi from '../../api/UserApi.js';

import router from '../../router.js';

const initialState = {
  id: null,
  blocked: null,
  confirmed: null,
  createdAt: '',
  email: '',
  role: {},
  username: ''
};

// initial state
const state = () => (initialState);

// getters
const getters = {

}

// actions
const actions = {
  async login({ commit }, credentials) {
    let data = await UserApi.login(credentials);
    console.log(data);
    if (data.error) {
      commit(
        'app/pushFlash',
        {
          type: 'error',
          message: data.message[0].messages[0].message
        },
        { root: true }
      );
    } else {
      if (data.jwt && data.user) {
        // commit the user to this local state
        commit('setUser', data.user);
        // commit the jwt to the app state
        commit(
          'app/login',
          { jwt: data.jwt },
          { root: true }
        );
        for (let char of data.user.characters) {
          commit(
            'character/addCharacter',
            char,
            { root: true }
          );
        }
        // commit the characters to the characters state

        router.push('profile');
      }
    }
  }
}

// mutations
const mutations = {
  reset(state) {
    for (const [key, value] of Object.entries(initialState)) {
      state[key] = value;
    }
  },
  setUser(state, user) {
    state.id = user.id;
    state.blocked = user.blocked;
    state.confirmed = user.confirmed;
    state.createdAt = user.created_at;
    state.email = user.email;
    state.role = user.role;
    state.username = user.username;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}