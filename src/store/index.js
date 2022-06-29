import Vue from 'vue';
import Vuex from 'vuex';

import RepositoryFactory from '@/repositories/RepositoryFactory';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false,
    users: [],
    pages: null,
  },
  actions: {
    async getUsers({ commit }) {
      commit('SET_LOADING', true);
      const repository = RepositoryFactory.get('users');
      try {
        const data = await repository.get();

        commit('SET_DATA', data);
      } finally {
        commit('SET_LOADING', false);
      }
    },
  },
  mutations: {
    SET_DATA(state, data) {
      state.users = data.results;
      state.pages = data.info;
    },
  },
});
