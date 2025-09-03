// src/store/api.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://root.grocerya2z.com/api/";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    // login api
    loginUser: builder.mutation({
      query: (mobile) => ({
        url: "user_login",
        method: "POST",
        body: { mobile },
      }),
    }),
    // category api
    getCategories: builder.query({
      query: () => ({
        url: "cat_subcat",
        method: "Get",
      }),
    }),
    // category product api
    getCategoryWiseProducts: builder.query({
      query: ({
        subcategory_first = "",
        sub_categorise_id,
        limit = 10,
        offset = 0,
        userid = 1,
      }) => ({
        url: "products_list",
        method: "GET",
        params: { subcategory_first, sub_categorise_id, limit, offset, userid },
      }),
    }),
    // We'll add getCategories here later
  }),
});

export const { useLoginUserMutation, useGetCategoriesQuery, useGetCategoryWiseProductsQuery } =
  api;
