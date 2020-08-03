import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
require('../node_modules/bootstrap/dist/css/bootstrap.css')
require('../node_modules/bootstrap/dist/js/bootstrap.min.js')

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
