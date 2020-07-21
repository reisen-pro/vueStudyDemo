import Vue from 'vue'
import App from './App'
import router from './router';

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.prototype.test = function () {
  console.log('test');
}

// Vue.prototype.$router = "哈哈哈";
Vue.prototype.name = "name";

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

const obj = {
  name: 'coder'
}

//Object.defineProperty(obj, 'age', 18);

console.log(router);
