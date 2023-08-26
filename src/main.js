import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import router from "./router";

//https://github.com/xiaoming-ssr/FanQiang-Book
new Vue({
  el:'#app',
  router,
  render: h => h(App),
}).$mount('#app')
