export default {
  state: {
    name: 'zhangsan'
  },
  mutations: {
    updateName(state, payload) {
      state.name = payload
    }
  },
  actions: {
    aUpdateName(context) {
      setTimeout(() => {
        context.commit('updateName', 'joke')
      }, 1000)
    }
  },
  getters: {
    fullName(state) {
      return state.name + '123'
    },
    fullName2(state, getters) {
      return getters.fullName + '222'
    },
    fullName3(state, getters, rootState) {
      return getters.fullName + rootState.counter;
    }
  }
}
