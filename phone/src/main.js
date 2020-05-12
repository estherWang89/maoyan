import Vue from 'vue';
import Mint from 'mint-ui';
import App from './App.vue';
import router from './router';
import store from './store';
import 'mint-ui/lib/style.css';
import './assets/css/styles.scss';
import http from './http'


Vue.use(Mint);
Vue.prototype.$http = http;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
