import axios from 'axios';

const baseURL = 'https://randomuser.me/api';

export default axios.create({
  baseURL,
  headers: {
    Accept: 'application/json',
  },
});
