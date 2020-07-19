// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   components: { App },
//   template: '<App/>'
// })

const cpn = {
  template: '<div>{{message}}</div>',
  data() {
    return {
      message: '我是cpn组件message'
    }
  }
}


new Vue({
  el: '#app',
  render: function (createElement) {
    // return createElement('h2',
    //   {class: 'box'},
    //   ['Hello World', createElement('button', ['按钮'])])
    //  还可以传入组件
    return createElement(App);
  }
})
