import axios from 'axios';

axios.defaults.baseURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/';
axios.defaults.headers.common.Authorization = '***YOUR GITHUB AUTH HERE***';

// Below is an alternative way to pass in the API key.
// You can set up an instance as shown and then require that instance everywhere in the program.
// The default set here will add this baseURL and header to every subsequent request.

// I will comment out the import statements necessary for the implementation below.
// You would use instance.get instead of axios.get as well.

// const instance = axios.create({
//   baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/',
// });
// instance.defaults.headers.common.Authorization =
//   '5fa4a045e262d8dbf093e21851f9bbf70e30e552';

// export default instance;
