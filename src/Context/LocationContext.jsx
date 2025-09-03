import React, { createContext, useState, useContext } from "react";

const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState(null); // {lat, lng}
  const [address, setAddress] = useState(""); // full address
  const [loadingLocation, setLoadingLocation] = useState(false);

  return (
    <LocationContext.Provider
      value={{ location, setLocation, address, setAddress }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => useContext(LocationContext);
