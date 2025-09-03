import { createContext, useContext, useState } from "react";

const SelectedAddressContext = createContext();

export const SelectedAddressProvider = ({ children }) => {
  const [selectedAddress, setSelectedAddress] = useState(null);

  return (
    <SelectedAddressContext.Provider
      value={{ selectedAddress, setSelectedAddress }}
    >
      {children}
    </SelectedAddressContext.Provider>
  );
};

export const useSelectedAddress = () => useContext(SelectedAddressContext);
