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

        commit('SET_DATA', data.data);
      } finally {
        commit('SET_LOADING', false);
      }
    },
    async getMore({ commit }, qtd) {
      commit('SET_LOADING', true);
      const repository = RepositoryFactory.get('users');
      try {
        const data = await repository.getMore(qtd);

        commit('SET_DATA', data.data);
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
    // SET_MORE(state, data) {
    //   console.log(data.results);
    //   state.users += data.results;
    //   // state.pages += data.info.results;
    // },
    SET_LOADING(state, boolean) {
      state.loading = boolean;
    },
  },
});
