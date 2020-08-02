// initial state
const state = () => ({
  flashs: []
})

// getters
const getters = {

}

// actions

const actions = {

}

// mutations
const mutations = {
  pushFlash(state, flash) {
    state.flashs.push(flash);
    setTimeout(() => {
      state.flashs.pop();
    }, 2000);
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
