// // src/context/AddressContext.js
// import React, { createContext, useState, useContext } from "react";

// const AddressContext = createContext();

// export const AddressProvider = ({ children }) => {
//   const [addresses, setAddresses] = useState([]);

//   const addAddress = (newAddress) => {
//     setAddresses((prev) => [...prev, newAddress]);
//   };

//   const updateAddress = (updated) => {
//     setAddresses((prev) =>
//       prev.map((addr) => (addr.id === updated.id ? updated : addr))
//     );
//   };

//   const deleteAddress = (id) => {
//     setAddresses((prev) => prev.filter((addr) => addr.id !== id));
//   };

//   return (
//     <AddressContext.Provider
//       value={{ addresses, addAddress, updateAddress, deleteAddress }}
//     >
//       {children}
//     </AddressContext.Provider>
//   );
// };

// export const useAddress = () => useContext(AddressContext);

import { createContext, useContext, useState, useEffect } from "react";
import { useAddAddressMutation } from "../store/api"; // RTK query mutation

const AddressContext = createContext();

export const AddressProvider = ({ children }) => {
  const [addresses, setAddresses] = useState([]);
  const [addAddressApi] = useAddAddressMutation();

  const fetchAddress = async (userId) => {
    const res = await fetch(`/api/get_address?user_id=${userId}`);
    const data = await res.json();
    if (data?.success) setAddresses(data.data);
  };

  const addAddress = async (payload) => {
    const res = await addAddressApi(payload).unwrap();
    if (res?.success) fetchAddress(payload.user_id);
  };

  const updateAddress = async (payload) => {
    const res = await addAddressApi(payload).unwrap(); // same API with address_id
    if (res?.success) fetchAddress(payload.user_id);
  };

  const deleteAddress = async (id) => {
    // delete API call karni hai yaha
    setAddresses((prev) => prev.filter((a) => a.id !== id));
  };

  return (
    <AddressContext.Provider
      value={{
        addresses,
        fetchAddress,
        addAddress,
        updateAddress,
        deleteAddress,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};

export const useAddress = () => useContext(AddressContext);
