import Vue from 'vue'
import App from './App'
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

// axios({
//   url: 'http://123.207.32.32:8000/home/multidata',
//   method: 'get'
// }).then(res => {
//   console.log(res);
// })
//
//
// axios({
//   url: 'http://123.207.32.32:8000/home/data',
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then(res => {
//   console.log(res)
// })
//
// axios.defaults.baseURL = 'http://123.207.32.32:8000'
// // 毫秒
// axios.defaults.timeout = 5000
//
// axios.all([axios({
//   url: '/home/multidata'
// }), axios({
//   url: '/home/data',
//   params: {
//     type: 'sell',
//     page: 5
//   }
// })])
//   .then(axiox.spread((res1, res2) => {
//     console.log(res1);
//     console.log(res2);
//   }))
//
// axios({
//   url: '/category'
// })


// const instance1 = axios.create({
//   baseURL: 'http://123.207.32.32:8000',
//   timeout: 5000
// })
//
// instance1({
//   url: '/home/multidata'
// }).then(res => {
//   console.log(res)
// })
//
// instance1({
//   url: '/home/data',
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then(res => {
//   console.log(res)
// })
//
//
// const instance2 = axios.create({
//   baseURL: 'http://222.111.33.33:8080',
//   method: "DELETE"
// })

// const {name, age} = obj;
//
// const names = ['A', 'V', 'D', 'E']
//
// const [name1, name2, name3, name4] = names;


import {request} from "./network/request";

// request({
//   url: '/home/multidata'
// }, res => {
//   console.log(res)
// }, err => {
//   console.log(err)
// })

request({
  url: '/home/multidata'
}).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})
