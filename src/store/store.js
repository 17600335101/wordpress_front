import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    host: 'http://localhost:3000',
    num: 0
  },
  mutations: {
    addNum(state, num) {
      state.num += num.aa
    },
    delNum(state, action) {
      state.num -= action.step
    }
  },
  getters: {
    con(state) {
      return this.store.num
    }
  },
  actions: {
    dd(context, action) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('delNum', { step: 1 })
          resolve(100);
        }, 1000)
      })
    },
    deferAdd(context) {
      let res = context.dispatch('dd')
      res.then(() => {
        context.commit('delNum', { step: 5 })
      })
    }
  }
})
export default store;