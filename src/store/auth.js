import axios from "../plugins/axios";

const state = {
  isLogin: false,
  token: null,
  authUser: null,
};

const mutations = {
  SET_TOKEN(state, payload) {
    state.token = payload;
  },
  SET_AUTH_USER(state, payload) {
    state.authUser = payload;
  },
  SET_IS_LOGIN(state, payload) {
    state.isLogin = payload;
  },
};

const actions = {
  setToken({ commit }, payload) {
    commit("SET_TOKEN", payload);
  },
  setAuthUser({ commit }, payload) {
    commit("SET_AUTH_USER", payload);
  },
  setIsLogin({ commit }, payload) {
    commit("SET_IS_LOGIN", payload);
  },
  async fetchUser({ commit }) {
    try {
      const user = await axios.get("/auth/me");
      commit("SET_AUTH_USER", user.data);
    } catch (error) {
      console.log(error);
    }
  },
  logout({ commit }) {
    localStorage.clear();
    commit("SET_TOKEN", null);
    commit("SET_AUTH_USER", null);
    commit("SET_IS_LOGIN", false);
  },
};

const getters = {
  isLogin(state) {
    return state.isLogin;
  },
  authUser(state) {
    return state.authUser;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
