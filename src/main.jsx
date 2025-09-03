// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from 'react'
import './index.css'
import App from "./App";
import { CartProvider } from "./Context/CartContext"; // Adjust path as needed
import { LocationProvider } from "./Context/LocationContext";
import { AddressProvider } from "./Context/AddressContext";
import { SelectedAddressProvider } from "./Context/SelectedAddressContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { store } from "./store/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToastContainer />
    <LocationProvider>
      <CartProvider>
        <AddressProvider>
          <SelectedAddressProvider>
            <Provider store={store}>
              <App />
            </Provider>
          </SelectedAddressProvider>
        </AddressProvider>
      </CartProvider>
    </LocationProvider>
  </React.StrictMode>
);
