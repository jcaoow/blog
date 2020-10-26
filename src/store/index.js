import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isShowCat: true,
    isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ),
    isPortrait: window.innerWidth <= window.innerHeight,
    activeTech: ''
  },
  mutations: {
    SET_CAT_SHOW: (state, val) => (state.isShowCat = val),
    SET_IS_MOBILE: (state, val) => (state.isMobile = val),
    SET_IS_PORTRAIT: state => (state.isPortrait = window.innerWidth <= window.innerHeight),
    SET_ACTIVE_TECH: (state, val) => (state.activeTech = val)
  },
  actions: {},
  modules: {}
});
