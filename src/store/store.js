import Vue from 'vue';
import Vuex from 'vuex';

import app from './modules/app.js';
import auth from './modules/auth.js';
import character from './modules/character.js';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        app,
        auth,
        character
    }
});