/* eslint-disable no-param-reassign */
import RepositoryFactory from '@/repositories/RepositoryFactory';

const Repository = {};

Repository.install = (Vue) => {
  Vue.prototype.$repository = function (repository) {
    return RepositoryFactory.get(repository);
  };
};

export default Repository;
