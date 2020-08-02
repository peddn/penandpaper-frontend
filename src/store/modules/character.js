import CharacterApi from '../../api/CharacterApi';

// initial state
const state = () => ({
  portrait: '',
  name: '',
  rasse: '',
  basiseigenschaften: {
    st: null,
    gs: null,
    gw: null,
    ko: null,
    in: null,
    zt: null
  },
  herkunft: '',
  geschlecht: '',
  abenteurertyp: ''
})

// getters
const getters = {

}

// actions

const actions = {
    async getCharacter ({ commit }) {
      commit('setCharacter', await CharacterApi.getCharacterById(5));
    }
}

// mutations
const mutations = {
  setCharacter (state, character) {
    console.log(character);
    state.portrait = character.portrait.url;
    state.name = character.name;
    state.rasse = character.rasse;
    state.basiseigenschaften.st = character.basiseigenschaften.st;
    state.basiseigenschaften.gs = character.basiseigenschaften.gs;
    state.basiseigenschaften.gw = character.basiseigenschaften.gw;
    state.basiseigenschaften.ko = character.basiseigenschaften.ko;
    state.basiseigenschaften.in = character.basiseigenschaften.in;
    state.basiseigenschaften.zt = character.basiseigenschaften.zt;
    state.herkunft = character.herkunft;
    state.geschlecht = character.geschlecht;
    state.abenteurertyp = character.abenteurertyp;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
