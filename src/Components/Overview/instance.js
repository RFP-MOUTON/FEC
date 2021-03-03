import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/',
});

instance.defaults.headers.common.Authorization =
  '5fa4a045e262d8dbf093e21851f9bbf70e30e552';

export default instance;
