import Vue from 'vue'
import Vuex from 'vuex'
import {
  INCREMENT
}
  from './mutations-types'

Vue.use(Vuex)

const moduleA = {
  state: {
    name: 'zhangsan'
  },
  mutations: {
    updateName(state, payload) {
      state.name = payload
    }
  },
  actions: {
    aUpdateName(context){
      setTimeout(()=>{
        context.commit('updateName','joke')
      },1000)
    }
  },
  getters: {
    fullName(state) {
      return state.name + '123'
    },
    fullName2(state, getters) {
      return  getters.fullName + '222'
    },
    fullName3(state,getters,rootState){
      return getters.fullName + rootState.counter;
    }
  }
}

const store = new Vuex.Store({
  state: {
    counter: 10,
    studnets: [
      {id: 100, name: 'abc', age: 20},
      {id: 101, name: 'abc2', age: 19},
      {id: 102, name: 'abc1', age: 18},
      {id: 103, name: 'abc3', age: 32}
    ],
    info: {
      name: 'kobe',
      age: 40,
      height: 1.98
    }
  },
  mutations: {
    // 方法
    ['INCREMENT'](state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    incrementCount(state, payload) {
      console.log(payload)
      state.counter += payload.count
    },
    addStudent(state, stu) {
      state.studnets.push(stu)
    },
    updateInfo(state) {
      state.info.name = 'code'

      // // 错误的代码，不能在这里进行异步操作
      // setTimeout(() => {
      //   state.info.name = 'code'
      // }, 1000)
      // state.info['address'] = 'home'
      //
      //
      // Vue.set(state.info, 'address', '洛杉矶')
      //
      // // 该方法不是响应式的
      // // delete state.info.age
      //
      // Vue.delete(state.info, 'age')
    }

  },
  actions: {
    // aUpdateInfo(context,payload) {
    //   setTimeout(() => {
    //     context.commit('updateInfo')
    //     console.log(payload.message);
    //     payload.success();
    //   },3000)
    // }
    aUpdateInfo(context, payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('updateInfo')
          console.log(payload);
          resolve('123456')
        }, 3000)
      })
    }
  },
  getters: {
    powerCounter(state) {
      return state.counter * state.counter
    },
    more20stu(state) {
      return state.studnets.filter(s => s.age >= 20)
    },
    more20stulength(state, getters) {
      return getters.more20stu.length
    },
    moreAgeStu(state) {
      return function (age) {
        return state.studnets.filter(s => s.age >= age)
      }
    }
  },
  modules: {
    a: moduleA
  }
})

export default store
