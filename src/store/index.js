import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isShowCat: true
  },
  mutations: {
    SET_CAT_SHOW: (state, val) => (state.isShowCat = val)
  },
  actions: {},
  modules: {}
});
