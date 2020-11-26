import axios from 'axios'
import Vue from 'vue'
import App from './App.vue'
import './plugins/element'
import './plugins/avue'
// import EleForm from 'vue-ele-form' 
import router from './router'

// Vue.use(EleForm)
Vue.config.productionTip = false

const http = axios.create({
  baseURL: process.env.VUE_APP_API_URL
})

Vue.prototype.$axios = http;
window.axios = http;

//avue upload功能
//1.在Window中声明axios
//2.在vue全局挂载$axios
Vue.prototype.$httpajax = http
//global req
Vue.prototype.$http = http

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
