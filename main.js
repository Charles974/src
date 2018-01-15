// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store.js'
import axios from 'axios'

Vue.config.productionTip = false

window.axios = axios.create({
  baseURL: 'http://coop.api.netlor.fr/api/',
  params : {
    token : false
  },
  headers: { Authorization: 'Token token=4c4fd5c7f653487e83af3d1d4432e6b5' }
});

store.subscribe((mutation, state) => {
	localStorage.setItem('store', JSON.stringify(state));
});

window.bus = new Vue();

new Vue({
  el: '#app',
  router,
  store,
  beforeCreate() {
  	this.$store.commit('initialiseStore');
  },
  template: '<App/>',
  components: { App }
})
