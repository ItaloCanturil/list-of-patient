import client from './clients/AxiosClient';

const resource = '/';

export default {
  get() {
    return client.get(`${resource}`);
  },
  getWithFilters(params = {}) {
    return client.get(`${resource}/${params}`);
  },
};
