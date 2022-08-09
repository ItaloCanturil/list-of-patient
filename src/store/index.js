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
    async getUsers({ commit }, start) {
      commit('SET_LOADING', true);
      const repository = RepositoryFactory.get('users');
      try {
        const data = await repository.get(start);

        commit('SET_DATA', data.data);
      } finally {
        commit('SET_LOADING', false);
      }
    },
    async getMore({ commit }, payload) {
      commit('SET_LOADING', true);
      const repository = RepositoryFactory.get('users');
      try {
        const data = await repository.getMore(payload);

        commit('SET_DATA', data.data);
      } finally {
        commit('SET_LOADING', false);
      }
    },
    async getWithFilters({ commit }, params) {
      commit('SET_LOADING', true);
      const repository = RepositoryFactory.get('users');
      try {
        const data = await repository.getWithFilters(params);

        commit('SET_DATA', data.data);
      } finally {
        commit('SET_LOADING', false);
      }
    },
  },
  mutations: {
    SET_DATA(state, data) {
      state.users = data.results.map((item, index) => ({ ...item, index_id: index }));
      state.pages = data.info;
    },
    SET_LOADING(state, boolean) {
      state.loading = boolean;
    },
  },
});
