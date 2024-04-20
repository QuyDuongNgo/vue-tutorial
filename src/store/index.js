import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isLogin: false,
    counter: 1,
  },
  mutations: {
    ADD(state) {
      state.counter++;
    },
  },
  actions: {
    handleAdd({ commit }) {
      commit("ADD");
    },
  },
  getters: {
    // Define your getters here
  },
});

export default store;
