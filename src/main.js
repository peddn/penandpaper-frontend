import Vue from 'vue';
import router from './router.js';
import store from './store/store.js';
import App from './components/App.vue';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
