import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store"


Vue.config.productionTip = false

// 新建一个vue实例，作为消息总线
Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
