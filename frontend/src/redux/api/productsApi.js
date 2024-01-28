import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/v1" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
        // query:(params) =>{
        //     url: "/products",
        // }
      query: (params) => "/products",
      keepUnusedDataFor:30,
    }),
  }),
});

export const { useGetProductsQuery } = productApi;
