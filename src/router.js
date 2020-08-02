import Vue from 'vue';
import VueRouter from 'vue-router';

import Character from './components/character/Character.vue';
import Showcase from './components/Showcase.vue';
import Login from './components/auth/Login.vue';
import Profile from './components/user/Profile.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Showcase },
    { path: '/login', component: Login },
    { path: '/profile', component: Profile },
    { path: '/character', component: Character }
]

export default  new VueRouter({
    routes // short for `routes: routes`
});
