// var axios = require('axios').default;

// var options = {
//   method: 'GET',
//   url: 'https://coinranking1.p.rapidapi.com/exchanges',
//   headers: {
//     'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
//     'x-rapidapi-key': '65df9cddd1msh1b632c179c457f1p17ea53jsn09d7b2ec7a00',
//   },
// };

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

console.log('crypto api: ', process.env.REACT_APP_CRYPTO_API_URL);

const cryptoApiHeader = {
  'x-rapidapi-host': process.env.REACT_APP_RAPIDAPI_HOST,
  'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
};

// const baseUrl = process.env.REACT_APP_API_BASE_URL;

const createRequest = (url) => ({ url, headers:cryptoApiHeader });

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_CRYPTO_API_URL }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createRequest('/coins'),
    }),
  }),
});

export const { useGetCryptosQuery } = cryptoApi;
