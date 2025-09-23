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
    // add to cart
    addToCart: builder.mutation({
      query: ({ user_id, quantity, sub_categorise, product_id }) => ({
        url: "add_tocart",
        method: "POST",
        body: { user_id, quantity, sub_categorise, product_id },
      }),
    }),
    // view cart
    viewCart: builder.mutation({
      query: ({ user_id }) => ({
        url: "view_cart",
        method: "POST",
        body: { user_id },
      }),
    }),
    // update cart
    cartUpdate: builder.mutation({
      query: ({ cart_id, user_id, quantity, amount, product_id }) => ({
        url: "cartUpdate",
        method: "POST",
        body: { cart_id, user_id, quantity, amount, product_id },
      }),
    }),
    // delete item from cart
    deleteProduct: builder.mutation({
      query: ({ Cart_id, user_id, quantity, product_id }) => ({
        url: "delete_addtocart",
        method: "POST",
        body: { Cart_id, user_id, quantity, product_id },
      }),
    }),
    // order item from cart
    orderPlaced: builder.mutation({
      query: (payload) => ({
        url: "order_place",
        method: "POST",
        body: payload, // ✅ pura payload send karo
      }),
    }),

    // 🔍 product search api
    getProductsSearch: builder.query({
      query: (name) => ({
        url: "products_search",
        method: "GET",
        params: { name },
      }),
    }),

    // add address api
    addAddress: builder.mutation({
      query: (formData) => {
        return {
          url: "add_address",
          method: "POST",
          body: formData,
        };
      },
    }),

    // get address api
    viewAddress: builder.mutation({
      query: ({ userid }) => ({
        url: "view_address",
        method: "POST",
        body: { userid },
      }),
    }),

    // delete address
    deleteAddress: builder.mutation({
      query: (payload) => ({
        url: "delete_address",
        method: "POST",
        body: payload,
      }),
    }),
    // 🔍 order history api
    orderHistory: builder.mutation({
      query: ({ user_id }) => ({
        url: "orders_history",
        method: "POST",
        body: { user_id },
      }),
    }),
    // https://root.grocerya2z.com/api/getTermPolicy
    // 🔍 policies history api
    policies: builder.mutation({
      query: ({ type }) => ({
        url: "getTermPolicy",
        method: "POST",
        body: { type },
      }),
    }),

    // 🔑 Send OTP API
    sendOtp: builder.mutation({
      query: ({ mobile, digit = 4, mode = "test" }) => ({
        url: `https://otp.fctechteam.org/send_otp.php`,
        method: "GET",
        params: { mode, digit, mobile },
      }),
    }),
    // inside endpoints in src/store/api.js
    verifyOtp: builder.mutation({
      query: ({ mobile, otp }) => ({
        url: `https://otp.fctechteam.org/verifyotp.php`,
        method: "GET",
        params: { mobile, otp },
      }),
    }),
    // We'll add getCategories here later
  }),
});

export const {
  useLoginUserMutation,
  useGetCategoriesQuery,
  useGetCategoryWiseProductsQuery,
  useAddToCartMutation,
  useAddAddressMutation,
  useViewCartMutation,
  useDeleteAddressMutation,
  useViewAddressMutation,
  useOrderHistoryMutation,
  useCartUpdateMutation,
  useDeleteProductMutation,
  useOrderPlacedMutation,
  useGetProductsSearchQuery,
  useSendOtpMutation,
  useVerifyOtpMutation,
  usePoliciesMutation,
} = api;
