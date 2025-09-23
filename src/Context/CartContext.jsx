// import React, { createContext, useContext, useReducer } from "react";
// import {
//   useAddToCartMutation,
//   useViewCartMutation,
//   useCartUpdateMutation,
//   useDeleteProductMutation,
// } from "../store/api"; // 👈 add useViewCartMutation
// import { toast } from "react-toastify";

// // Create context
// const CartContext = createContext();

// const initialState = {
//   items: [],
//   totalPrice: 0,
// };

// // Reducer to manage cart actions
// function cartReducer(state, action) {
//   switch (action.type) {
//     case "SET_CART":
//       return {
//         items: action.payload.items,
//         totalPrice: action.payload.totalPrice,
//       };
//     case "ADD_TO_CART": {
//       const product = action.payload;
//       const existingItem = state.items.find((item) => item.id === product.id);

//       let updatedItems;

//       if (existingItem) {
//         updatedItems = state.items.map((item) =>
//           item.id === product.id ? { ...item, qty: item.qty + 1 } : item
//         );
//       } else {
//         updatedItems = [...state.items, { ...product, qty: 1 }];
//       }

//       const updatedTotal = updatedItems.reduce(
//         (total, item) => total + item.price * item.qty,
//         0
//       );

//       return {
//         items: updatedItems,
//         totalPrice: updatedTotal,
//       };
//     }

//     case "INCREMENT":
//       const incrementedItems = state.items.map((item) =>
//         item.id === action.payload ? { ...item, qty: item.qty + 1 } : item
//       );
//       return {
//         items: incrementedItems,
//         totalPrice: incrementedItems.reduce(
//           (total, item) => total + item.price * item.qty,
//           0
//         ),
//       };

//     case "DECREMENT":
//       let updated = state.items
//         .map((item) =>
//           item.id === action.payload ? { ...item, qty: item.qty - 1 } : item
//         )
//         .filter((item) => item.qty > 0);

//       return {
//         items: updated,
//         totalPrice: updated.reduce(
//           (total, item) => total + item.price * item.qty,
//           0
//         ),
//       };

//     default:
//       return state;
//   }
// }

// // Provider component
// export const CartProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(cartReducer, initialState);
//   const [addToCartApi] = useAddToCartMutation(); // ✅ API hook
//   const [viewCartApi] = useViewCartMutation();
//   const [cartUpdateApi] = useCartUpdateMutation();
//   const [deleteProductApi] = useDeleteProductMutation();
//   // const increment = (id) => dispatch({ type: "INCREMENT", payload: id });
//   // const decrement = (id) => dispatch({ type: "DECREMENT", payload: id });
//   const addToCart = async (product) => {
//     dispatch({ type: "ADD_TO_CART", payload: product });
//     try {
//       // console.log("payload:", payload);
//       // ✅ API Call
//       await addToCartApi({
//         user_id: product.user_id, // ✅ use from button
//         quantity: "1", // initially 1
//         sub_categorise: product.sub_categorise, // pass product details
//         product_id: product.id,
//       }).unwrap();

//       console.log("Added to server cart ✅");
//       fetchCart(product.user_id, true);
//     } catch (error) {
//       console.error("Add to cart failed ❌", error);
//     }
//   };
//   // 👇 NEW: fetch cart items from API
//   // 🚀 fetch cart from server
//   const fetchCart = async (user_id, log = false) => {
//     try {
//       const res = await viewCartApi({ user_id }).unwrap();

//       if (log) {
//         console.log("✅ Cart fetched successfully:", res);
//       }

//       if (res.success) {
//         // const items = res.add_to_cart.map((item) => ({
//         //   id: item.product_id,
//         //   name: item.name,
//         //   price: Number(item.price),
//         //   qty: Number(item.quantity),
//         //   image: item.produt_image?.[0] || "",
//         // }));

//         const items = res.add_to_cart.map((item) => ({
//           id: item.product_id,
          
//           name: item.name,
//           price: Number(item.price),
//           qty: Number(item.quantity),
//           image: item.produt_image?.[0] || "",
//           cart_id: item.cart_id, // 👈 add this
//           user_id: item.user_id, // 👈 add this
//         }));

//         // console.log("item",items)
//         const totalPrice = items.reduce(
//           (total, item) => total + item.price * item.qty,
//           0
//         );

//         dispatch({
//           type: "SET_CART",
//           payload: { items, totalPrice },
//         });
//       }
//     } catch (error) {
//       if (log) {console.error("❌ Failed to fetch cart:", error);toast.error(error?.data?.msg)};
//     }
//   };

//   // 🚀 Increment
//   const increment = async (product) => {
//     try {
//       console.log("increment",product)
//       const updatedQty = product.qty + 1;
//       // if(!product.user_id){
//       //   toast.error("Please login to add to cart");
//       //   return;
//       // } 
//       // // ✅ Call update API
//       await cartUpdateApi({
//         cart_id: product.cart_id, // comes from API
//         user_id: product.user_id,
//         quantity: updatedQty,
//         amount: product.price * updatedQty,
//       }).unwrap();

//         // if (updatedQty > 0) {
//         //   // 👉 Call update API if qty > 0
//         //   console.log("update")
//         //   await cartUpdateApi({
//         //     cart_id: product.cart_id,
//         //     user_id: product.user_id,
//         //     quantity: updatedQty,
//         //     amount: product.price * updatedQty,
//         //   }).unwrap();
//         // } else {
//         //   console.log("delete")
//         //   // 👉 If qty becomes 0, call delete API
//         //   await deleteProductApi({
//         //     product_id: product.id,
//         //     user_id: product.user_id,
//         //     Cart_id: product.cart_id,
//         //     quantity: 0,
//         //   }).unwrap();
//         // }

//       // ✅ Refresh cart from server
//       fetchCart(product.user_id, true);
//     } catch (error) {
//       console.error("❌ Increment failed", error);
//     }
//   };

//   // 🚀 Decrement
//   const decrement = async (product) => {
//     try {
//       const updatedQty = product.qty - 1;
//       // if (updatedQty <= 0) return; // prevent negative qty

//       if (updatedQty>0){
//         console.log(updatedQty);
//    await cartUpdateApi({
//      cart_id: product.cart_id,
//      user_id: product.user_id,
//      quantity: updatedQty,
//      amount: product.price * updatedQty,
//    }).unwrap();
//       }
     
//       else {
//          console.log(updatedQty);
//         console.log("delete", product.user_id);
//         // 👉 If qty becomes 0, call delete API
//         const deletedProduct=await deleteProductApi({
//           product_id: product.id,
//           user_id: product.user_id,
//           Cart_id: product.cart_id,
//           quantity: 0,
//         }).unwrap();
//         console.log("deletedProduct",deletedProduct);
//       }
//       fetchCart(product.user_id, true);

//        console.log("delete 2", product.user_id);
//     } catch (error) {
//       console.error("❌ Decrement failed", error);
//     }
//   };

//   return (
//     <CartContext.Provider
//       value={{ cart: state, addToCart, increment, decrement, fetchCart }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// // Hook to use cart
// export const useCart = () => useContext(CartContext);

import React, { createContext, useContext, useReducer, useState } from "react";
import {
  useAddToCartMutation,
  useViewCartMutation,
  useCartUpdateMutation,
  useDeleteProductMutation,
  useOrderHistoryMutation,
  useOrderPlacedMutation,
  useViewAddressMutation,
  useAddAddressMutation,
  useDeleteAddressMutation,
  useSendOtpMutation,
  usePoliciesMutation
} from "../store/api";
import { toast } from "react-toastify";

// Create context
const CartContext = createContext();

const initialState = {
  items: [],
  totalPrice: 0,
  billItem: null, // ✅ add this so it's always defined
  itemsFetched: false, // ✅ Track if cart has been fetched
};

// Reducer to manage cart actions
function cartReducer(state, action) {
  switch (action.type) {
    case "SET_CART":
      return {
        ...state,
        items: action.payload.items,
        totalPrice: action.payload.totalPrice,
        billItem: action.payload.billItem || {}, // ✅ Save bill details
        itemsFetched: true,
      };

    // ✅ Add action to clear cart
    case "CLEAR_CART":
      return {
        ...state,
        items: [],
        totalPrice: 0,
        billItem: {},
        itemsFetched: true,
      };

    default:
      return state;
  }
}

// Provider component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [addToCartApi] = useAddToCartMutation();
  const [addAddressApi] = useAddAddressMutation();
  const [deleteAddressApi] = useDeleteAddressMutation();
  const [viewCartApi] = useViewCartMutation();
  const [viewAddressApi] = useViewAddressMutation();
  const [orderPlacedApi] = useOrderPlacedMutation();
  const [OrderHistoryApi] = useOrderHistoryMutation();
  const [cartUpdateApi] = useCartUpdateMutation();
  const [deleteProductApi] = useDeleteProductMutation();
  const [otpSendApi]=useSendOtpMutation()
  const [policiesApi]=usePoliciesMutation()
  const userId = localStorage.getItem("userId");

  // Track loading states for individual products
  const [loadingProducts, setLoadingProducts] = useState(new Set());
  const [addresses, setAddresses] = useState([]);


  // Helper function to manage loading state
  const setProductLoading = (productId, isLoading) => {
    setLoadingProducts((prev) => {
      const newSet = new Set(prev);
      if (isLoading) {
        newSet.add(productId);
      } else {
        newSet.delete(productId);
      }
      return newSet;
    });
  };

  // Check if product is loading
  const isProductLoading = (productId) => {
    return loadingProducts.has(productId);
  };

  // Add to cart - NO optimistic update, wait for API response
  const addToCart = async (product) => {
    // console.log("Adding to cart:", product);

    // Set loading state
    setProductLoading(product.id, true);

    try {
      // Make API call and wait for response
      const response = await addToCartApi({
        user_id: product.user_id,
        quantity: "1",
        sub_categorise: product.sub_categorise,
        product_id: product.id,
      }).unwrap();

      // console.log("✅ Added to server cart successfully:", response);

      // Fetch updated cart from server
      await fetchCart(product.user_id, true);
    } catch (error) {
      console.error("❌ Add to cart API failed:", error);
      toast.error("Failed to add item to cart");
    } finally {
      // Remove loading state
      setProductLoading(product.id, false);
    }
  };

  // Fetch cart from server
  const fetchCart = async (user_id, log = false) => {
    try {
      const res = await viewCartApi({ user_id }).unwrap();
      // console.log("user_id in fetch cart",res)
      // if (log) {
      //   console.log("✅ Cart fetched successfully:", res);
      // }

      // ✅ Handle both success=true with data and success=false (No Data Found)
      if (res.success && res.add_to_cart && res.add_to_cart.length > 0) {
        // Cart has items
        const items = res.add_to_cart.map((item) => ({
          id: item.product_id,
          name: item.name,
          price: Number(item.price),
          qty: Number(item.quantity),
          vendor_id: Number(item.vendor_id),
          product_id: Number(item.product_id), // ✅
          quantity: Number(item.quantity),
          image: item.produt_image?.[0] || "",
          cart_id: item.cart_id,
          user_id: item.user_id,
          sub_categorise: item.sub_categorise,
        }));

        const billItem = {
          delivery_charge: res.bill_detail.delivery_charge,
          grand_total: res.bill_detail.grand_total,
          handling_charge: Number(res.bill_detail.handling_charge),
          subscription_price: Number(res.bill_detail.subscription_price),
          total_item: Number(res.bill_detail.total_item),
          total_items_amount: Number(res.bill_detail.total_items_amount), // ✅
        };
        // console.log("billItem",billItem)
        const totalPrice = items.reduce(
          (total, item) => total + item.price * item.qty,
          0
        );

        dispatch({
          type: "SET_CART",
          payload: { items, totalPrice, billItem },
        });
      } else {
        // ✅ Cart is empty (success=false or no items)
        console.log("Cart is empty or No Data Found, clearing state");
        dispatch({ type: "CLEAR_CART" });
      }
    } catch (error) {
      if (log) {
        console.error("❌ Failed to fetch cart:", error);
      }
      if (error?.data?.msg == "User ID is required") {
        toast.error("Please login");
      } else {
        // Don't show error toast for "No Data Found" - it's normal
        if (error?.data?.msg !== "No Data Found") {
          toast.error(error?.data?.msg || "Failed to fetch cart");
        }
      }

      // ✅ If error, clear cart state
      dispatch({ type: "CLEAR_CART" });
    }
  };
  // Fetch address from server
const fetchAddress = async (userid, log = false) => {
  try {
    const userId=localStorage.getItem("userId")
    const res = await viewAddressApi({ userid }).unwrap();
    // if (log) {
    //   console.log("✅ Address fetched successfully:", res);
    // }

    if (res.success && res.address && res.address.length > 0) {
      setAddresses(res.address); // ✅ yaha save karo
    } else {
      setAddresses([]); // agar empty hai to clear
    }
  } catch (error) {
    if (log) {
      console.error("❌ Failed to fetch address:", error);
    }
    setAddresses([]);
  }
};

//add address
const addAddress = async (payload) => {
  try {
    // console.log("payload:",payload)
    //     console.log("📦 Received payload as FormData:");
    //     for (let [key, value] of payload.entries()) {
    //       console.log(`${key}: ${value}`);
    //     }
    const response = await addAddressApi(payload).unwrap();
    console.log("✅ Address added successfully:", response);
    if (
      response?.status === true ||
      response?.success === true ||
      response?.status === 200
    ) {
      toast.success(response?.message || "Address added successfully");
    }
    else {
      toast.error(response?.message || "Something went wrong");
    }
    // address save hone ke baad fresh fetch
    // 👇 userId ko localStorage se le lo
    const userId = localStorage.getItem("userId");
    await fetchAddress(userId, true);

    return response;
  } catch (error) {
    console.error("❌ Failed to add address:", error);
    toast.error("Failed to add address");
    return null;
  }
};

//delete address 
const deleteAddress=async(payload)=>{
  try {
     console.log("payload:", payload);
     const response = await deleteAddressApi(payload).unwrap();
     console.log("✅ Address delete successfully:", response);
     if (
       response?.status === true ||
       response?.success === true ||
       response?.status === 200
     ) {
       toast.success(response?.msg || "Address deleted successfully");
     } else {
       toast.error(response?.message || "Something went wrong");
     }
     // address save hone ke baad fresh fetch
     // 👇 userId ko localStorage se le lo
     const userId = localStorage.getItem("userId");
     await fetchAddress(userId, true);

     return response;
  } catch (error) {
    console.log(error)
  }
}

  //orderHistory
  const orderHistory = async (user_id, log = false) => {
    try {
      const res = await OrderHistoryApi({ user_id }).unwrap();
      if (log) {
        console.log("✅ Order history fetched successfully:", res);
      }
      if (res.success) {
        return res.data; // ✅ return array of orders
      }
      return [];
    } catch (error) {
      if (log) {
        console.error("❌ Failed to fetch order history:", error);
        toast.error(error?.data?.msg || "Failed to fetch order history");
      }
      return [];
    }
  };

  // Increment - NO optimistic update, wait for API response
  const increment = async (product) => {
    // console.log("Incrementing:", product);

    // Set loading state
    setProductLoading(product.id, true);

    try {
      const updatedQty = product.qty + 1;

      // Make API call and wait for response
      await cartUpdateApi({
        cart_id: product.cart_id,
        user_id: product.user_id,
        quantity: updatedQty,
        product_id: product.product_id,
        amount: product.price * updatedQty,
      }).unwrap();

      // console.log("✅ Increment API successful", product.user_id);

      // Fetch updated cart from server
      await fetchCart(Number(product.user_id), false);
    } catch (error) {
      console.error("❌ Increment failed", error);
      toast.error("Failed to update quantity");
    } finally {
      // Remove loading state
      setProductLoading(product.id, false);
    }
  };

  // Decrement - NO optimistic update, wait for API response
  const decrement = async (product) => {
    // console.log("Decrementing:", product);

    // Set loading state
    setProductLoading(product.id, true);

    try {
      const updatedQty = product.qty - 1;

      if (updatedQty > 0) {
        // Update quantity
        await cartUpdateApi({
          cart_id: product.cart_id,
          user_id: product.user_id,
          quantity: updatedQty,
          product_id: product.product_id,
          amount: product.price * updatedQty,
        }).unwrap();

        // console.log("✅ Decrement API successful");
      } else {
        // Delete item
        // console.log("Deleting product:", product);
        await deleteProductApi({
          product_id: product.id,
          user_id: product.user_id,
          Cart_id: product.cart_id,
          quantity: 0,
        }).unwrap();

        // console.log("✅ Delete API successful");
      }

      // ✅ Always fetch updated cart after any operation
      await fetchCart(Number(product.user_id), true); // Add log to see what's happening
    } catch (error) {
      console.error("❌ Decrement failed", error);
      toast.error("Failed to update quantity");
    } finally {
      // Remove loading state
      setProductLoading(product.id, false);
    }
  };

  // ordrer palced
  const orderPlaced = async (payload) => {
    try {
      const res = await orderPlacedApi(payload).unwrap();
      // console.log("order placed successfully", res);
      await fetchCart(Number(userId), false);
      return res;
    } catch (error) {
      console.error("❌ order placed failed", error);
      toast.error("Failed to place order");
      return null;
    }
  };

  // policies
  const policies=async(payload)=>{
    try {
      const res = await policiesApi(payload).unwrap()
      // console.log(res)
      return res
    } catch (error) {
      console.log(error)
      return null
    }
  }
  // otp send
  const otpSend=async(payload)=>{
 try {
   const res = await otpSendApi(payload).unwrap();
   console.log("send otp res:",res)
   return res;
 } catch (error) {
   console.error("❌ Otp send failed", error);
   toast.error("Failed to send otp");
   return null;
 }
  }
  return (
    <CartContext.Provider
      value={{
        cart: state,
        addToCart,
        increment,
        decrement,
        fetchCart,
        fetchAddress,
        orderPlaced,
        orderHistory,
        addAddress,
        deleteAddress,
        addresses, // ✅ yaha export kar
        setAddresses,
        isProductLoading, // Export loading state checker
        otpSend,
        policies,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Hook to use cart
export const useCart = () => useContext(CartContext);