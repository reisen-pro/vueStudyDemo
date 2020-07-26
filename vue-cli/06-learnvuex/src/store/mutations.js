import {INCREMENT} from "./mutations-types";

export default {
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
}
