import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  "X-RapidAPI-Key": "0cbdcdba5emsh8f975896d7dad2ap199d8bjsn8f58d9545f73",
};
const URL = {
    url: "https://coinranking1.p.rapidapi.com/coins"  
}
const createRequest = (url) => ({ url, headers: cryptoApiHeaders })

export const cryptoApi= createApi({
    reducerPath : 'cryptoApi',
    baseQuery: fetchBaseQuery({ URL }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins`)
        })
    })
}) 

export const {
    useGetCryposQuery,
} = cryptoApi;


// const options = {
//   method: "GET",
//   url: "https://coinranking1.p.rapidapi.com/coins",
//   params: {
//     referenceCurrencyUuid: "yhjMzLPhuIDl",
//     timePeriod: "24h",
//     tiers: "1",
//     orderBy: "marketCap",
//     orderDirection: "desc",
//     limit: "50",
//     offset: "0",
//   },
//   headers: {
//     "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
//     "X-RapidAPI-Key": "0cbdcdba5emsh8f975896d7dad2ap199d8bjsn8f58d9545f73",
//   },
// };
