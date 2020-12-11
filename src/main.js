import Vue from 'vue'
import App from './App.vue'
import { store } from "@/store/store";

import './assets/css/tailwind.css';

window.axios = require('axios');

Vue.config.productionTip = false

new Vue({
  store: store,
  render: h => h(App),
}).$mount('#app')
