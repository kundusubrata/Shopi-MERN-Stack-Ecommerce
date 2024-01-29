import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/v1" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      // query:(params) =>{
      //     url: "/products",
      // }
      query: (params) => ({
        url: "/products",
        params: {
          page: params?.page,
          keyword: params?.keyword,
        },
      }),
      keepUnusedDataFor: 30,
    }),
    getProductDetails: builder.query({
      query: (id) => `/products/${id}`,
      keepUnusedDataFor: 30,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductDetailsQuery } = productApi;
