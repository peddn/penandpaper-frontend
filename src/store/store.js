import Vue from 'vue';
import Vuex from 'vuex';

import app from './modules/app.js';
import user from './modules/user.js';
import characters from './modules/characters.js';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        app,
        user,
        characters
    }
});