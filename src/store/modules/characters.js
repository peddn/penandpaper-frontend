import CharactersApi from '../../api/CharactersApi.js';


const charInitialState = {

  opened: [],
  edited: false,

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
};


// initial state
const state = () => ({
  characters: [],
  playOpenModalActive: false
});

// getters
const getters = {
  getOpenedCharactersByModule: (state) => (module) => {
    return state.characters.filter((char) => {
      return char.opened.includes(module);
    });
  },
  getClosedCharactersByModule: (state) => (module) => {
    return state.characters.filter((char) => {
      return !char.opened.includes(module);
    });
  }
}

// actions
const actions = {
  async getCharactersByUserId({ commit }, userId) {
    let characters = await CharactersApi.getCharactersByUserId(userId);
    for(let character of characters) {
      commit('addCharacter', character);
    }
  }
}

// mutations
const mutations = {
  togglePlayOpenModalActive(state) {
    state.playOpenModalActive = !state.playOpenModalActive;
  },
  addCharacter(state, character) {
    character.opened = [];
    character.edited = false;
    state.characters.push(character);
  },
  openCharacter(state, payload) {
    const id = payload.id;
    const module = payload.module;

    const index = state.characters.findIndex((character) => {
      return character.id === id;
    });

    let character = state.characters.splice(index, 1)[0];
    if (!character.opened.includes(module)) {
      character.opened.push(module);
    }

    state.characters.splice(index, 0, character);

  },
  closeCharacter(state, payload) {
    let id = payload.id;
    let module = payload.module;
    state.characters.forEach((character, index) => {
      if (character.id === id) {
        if (character.opened.includes(module)) {
          character.opened.splice(index, 1);
        }
      }
    });
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
