import React, { createContext, useContext, useReducer } from "react";

// Create context
const CartContext = createContext();

const initialState = {
  items: [],
  totalPrice: 0,
};

// Reducer to manage cart actions
function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);

      let updatedItems;

      if (existingItem) {
        updatedItems = state.items.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        updatedItems = [...state.items, { ...product, qty: 1 }];
      }

      const updatedTotal = updatedItems.reduce(
        (total, item) => total + item.price * item.qty,
        0
      );

      return {
        items: updatedItems,
        totalPrice: updatedTotal,
      };
    }

    case "INCREMENT":
      const incrementedItems = state.items.map((item) =>
        item.id === action.payload ? { ...item, qty: item.qty + 1 } : item
      );
      return {
        items: incrementedItems,
        totalPrice: incrementedItems.reduce(
          (total, item) => total + item.price * item.qty,
          0
        ),
      };

    case "DECREMENT":
      let updated = state.items
        .map((item) =>
          item.id === action.payload ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0);

      return {
        items: updated,
        totalPrice: updated.reduce(
          (total, item) => total + item.price * item.qty,
          0
        ),
      };

    default:
      return state;
  }
}

// Provider component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
const increment = (id) => dispatch({ type: "INCREMENT", payload: id });
const decrement = (id) => dispatch({ type: "DECREMENT", payload: id });
  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <CartContext.Provider value={{ cart: state, addToCart, increment, decrement }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook to use cart
export const useCart = () => useContext(CartContext);
