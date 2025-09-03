// src/context/AddressContext.js
import React, { createContext, useState, useContext } from "react";

const AddressContext = createContext();

export const AddressProvider = ({ children }) => {
  const [addresses, setAddresses] = useState([]);

  const addAddress = (newAddress) => {
    setAddresses((prev) => [...prev, newAddress]);
  };

  const updateAddress = (updated) => {
    setAddresses((prev) =>
      prev.map((addr) => (addr.id === updated.id ? updated : addr))
    );
  };

  const deleteAddress = (id) => {
    setAddresses((prev) => prev.filter((addr) => addr.id !== id));
  };

  return (
    <AddressContext.Provider
      value={{ addresses, addAddress, updateAddress, deleteAddress }}
    >
      {children}
    </AddressContext.Provider>
  );
};

export const useAddress = () => useContext(AddressContext);
