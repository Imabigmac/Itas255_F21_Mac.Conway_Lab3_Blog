import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {Pagination} from 'vue-pagination-2';

Vue.config.productionTip = false
Vue.component('pagination', Pagination);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
