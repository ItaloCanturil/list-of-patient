import Vue from 'vue';
import App from './App.vue';
import Repository from './plugins/Repository';
import router from './router';
import store from './store';

Vue.use(Repository);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
