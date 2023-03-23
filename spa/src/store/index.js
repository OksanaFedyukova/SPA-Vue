import Vue from 'vue';
import Vuex from 'vuex';
import actions from './';
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    items: [],
    selectedItem: null,
    currentPage: 1,
    totalPages: 0,
  },
  actions,
  mutations,
  getters,
});

export default store;
