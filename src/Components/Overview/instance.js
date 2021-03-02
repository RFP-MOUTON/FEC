import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/'
});

instance.defaults.headers.common.Authorization = '0e1e30a63688b9573520a3ec8d5ed5be0248561e';

export default instance;