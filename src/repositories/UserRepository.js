import client from './clients/AxiosClient';

const resource = '/';

export default {
  get() {
    return client.get(`${resource}?results=20`);
  },
  getMore(qtd) {
    return client.get(`${resource}?results=${qtd}`);
  },
  getWithFilters(params = {}) {
    return client.get(`${resource}/${params}`);
  },
};
