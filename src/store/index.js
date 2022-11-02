import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    price: [],
    production: []
  },
  getters: {
  },
  mutations: {
    sumProduction(state, production) {
      state.recipes = production;
    },
    sumPrice(state, price) {
      state.recipes = price;
    },
  },
  actions: {
  },
  modules: {
  }
})
