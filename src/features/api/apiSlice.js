import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "apiSlice",
    baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
    endpoints: (builder) => ({
      getCategories: builder.query({
        query: () => "/products/categories",
      }),
      getProductBySearch: builder.query({
        query: (product) => `products/search?q=${product}`,
      }),
      getProducts: builder.query({
        query: () => "/products",
      }),
    }),
  });

  export const { useGetCategoriesQuery, useGetProductsQuery } = apiSlice;