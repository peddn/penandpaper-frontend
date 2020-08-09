import Vue from 'vue';
import VueRouter from 'vue-router';

import Showcase from './components/showcase/Showcase.vue';

import Characters from './components/characters/Characters.vue';
import CharactersSheet from './components/characters/sheet/Sheet.vue';
import CharactersPlay from './components/characters/play/Play.vue';
import CharactersCreate from './components/characters/create/Create.vue';
import CharactersImprove from './components/characters/improve/Improve.vue';
import CharactersEquip from './components/characters/equip/Equip.vue';

import Locations from './components/locations/Locations.vue';

import Campaigns from './components/campaigns/Campaigns.vue';

import Adventures from './components/adventures/Adventures.vue';

import Groups from './components/groups/Groups.vue';

import UserLogin from './components/user/Login.vue';


Vue.use(VueRouter);

const routes = [
    { path: '/', component: Showcase },
    {
        path: '/characters', component: Characters,
        children: [
            {
                path: 'sheet',
                component: CharactersSheet
            },
            {
                path: 'play',
                component: CharactersPlay
            },
            {
                path: 'create',
                component: CharactersCreate
            },
            {
                path: 'improve',
                component: CharactersImprove
            },
            {
                path: 'equip',
                component: CharactersEquip
            }
        ]
    },
    {
        path: '/locations', component: Locations,
        children: []
    },
    {
        path: '/campaigns', component: Campaigns,
        children: []
    },
    {
        path: '/adventures', component: Adventures,
        children: []
    },
    {
        path: '/groups', component: Groups,
        children: []
    },
    { path: '/login', component: UserLogin },
]

export default new VueRouter({
    routes // short for `routes: routes`
});
