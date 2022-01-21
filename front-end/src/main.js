import Vue from 'vue'
import App from './App.vue'
import router from './router'

import '@/assets/styles/app.css'
Vue.config.productionTip = false

const data = {
  user: null
}

new Vue({
  data,
  router,
  render: h => h(App)
}).$mount('#app')
