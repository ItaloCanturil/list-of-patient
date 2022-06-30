import client from './clients/AxiosClient';

const resource = '/';

export default {
  get(start) {
    return client.get(`${resource}?results=${start}&seed=italo`);
  },
  getMore(info) {
    return client.get(`${resource}?results=${info.results + 10}&seed=italo`);
  },
};
