import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import moduleA from "./modules/moduleA";

Vue.use(Vuex)

const moduleA = moduleA

const state = {
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
}

const store = new Vuex.Store({
  state: state,
  mutations,
  actions,
  getters,
  modules: {
    a: moduleA
  }
})

export default store
