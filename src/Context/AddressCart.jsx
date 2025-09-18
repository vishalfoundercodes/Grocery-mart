import React, { useEffect, useState, useRef } from "react";
import { Plus, Pencil } from "lucide-react";
import { useAddress } from "../Context/AddressContext";
import AddAddress from "../Pages/Profie/AddAdress";
import { useLocation } from "../Context/LocationContext";
import { useSelectedAddress } from "../Context/SelectedAddressContext";
import { useCart } from "./CartContext";
import { MoreVertical, Home } from "lucide-react";

export default function AddressCartSlider({ open, onClose }) {
  const [openAddress, setOpenAddress] = useState(false);
  const [editAddress, setEditAddress] = useState(null);
  const [dropdownOpenId, setDropdownOpenId] = useState(null);
  const [selectedAddressId, setSelectedAddressId] = useState(null);
    const { setSelectedAddress } = useSelectedAddress(); // ✅ use context instead



  const dropdownRef = useRef(null); // ✅ Single ref

    const { addresses, fetchAddress, addAddress } = useCart();
    useEffect(()=>{
      const userId = localStorage.getItem("userId");  
      if(userId){
        fetchAddress(userId,true);
      }
    },[])

  const handleAddAddress = (newAddress) => {
    if (editAddress) {
      updateAddress({ ...newAddress, id: editAddress.id });
    } else {
      addAddress({ ...newAddress, id: Date.now() });
    }
    setOpenAddress(false);
    setEditAddress(null);
  };

  const handleEdit = (address) => {
    setEditAddress(address); // ✅ Set the correct address
    setOpenAddress(true); // ✅ Open address modal
    setDropdownOpenId(null); // ✅ Close dropdown
  };

  // ✅ Click-outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpenId(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 right-0 w-[350px] sm:w-[400px] h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center px-4 py-3 border-b">
          <button onClick={onClose} className="mr-3 text-xl font-semibold">
            ←
          </button>
          <h2 className="text-lg font-bold">Select delivery address</h2>
        </div>

        {/* Add New */}
        <div className="p-4 border-b">
          <button
            className="flex items-center w-full bg-green-50 text-green-700 border border-green-600 rounded-lg py-2 px-3 font-medium hover:bg-green-100 transition"
            onClick={() => {
              setOpenAddress(true);
              setEditAddress(null);
            }}
          >
            <Plus className="w-5 h-5 mr-2" />
            Add a new address
          </button>
        </div>

        {/* Saved Addresses */}
        <div className="p-4">
          <h3 className="text-sm text-gray-600 mb-3">Your saved address</h3>

          {addresses.map((address) => (
            <div
              key={address.id}
              className="relative flex items-start justify-between p-4 rounded-lg border border-gray-200"
            >
              <div
                //className="flex items-start gap-3"
                className={`relative flex items-start justify-between p-4 rounded-lg border
    ${
      selectedAddressId === address.id
        ? "border-green-500 bg-green-50"
        : "border-gray-200"
    }`}
                onClick={() => {
                  console.log("address", address);
                  console.log("address", address.id);
                  setSelectedAddress(address); // ✅ this sets the context properly
                  setSelectedAddressId(address.id); // optional – just for local highlight if needed
                  onClose(); // ✅ optional – close the address slider after selection
                }}
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-yellow-100">
                  <Home className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  {/* Name + Mobile */}
                  <h2 className="font-medium text-gray-900">
                    {address.deliveryname} ({address.mobile})
                  </h2>
                  {/* Address Details */}
                  <p className="text-sm text-gray-500 leading-snug">
                    {address.house_no}, {address.landmark}, {address.locality}
                  </p>
                </div>
              </div>

              <div className="relative">
                <button
                  className="text-gray-500 hover:text-gray-700"
                  onClick={() => {
                    console.log("dropdown open id:", dropdownOpenId);
                    console.log("dropdown address id:", address.id);
                    setDropdownOpenId(
                      dropdownOpenId === address.id ? null : address.id
                    );
                  }}
                >
                  <MoreVertical className="w-5 h-5" />
                </button>

                {dropdownOpenId === address.id && (
                  <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded shadow-md z-10">
                    <button
                      className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                      onClick={() => {
                        handleEdit(address), console.log(address);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="block w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-100"
                      onClick={() => handleDelete(address.id)}
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Address Modal */}
      {openAddress && (
        <AddAddress
          openModal={openAddress}
          setOpenModal={setOpenAddress}
          onSubmit={handleAddAddress}
          addressToEdit={editAddress} // ✅ pass for editing
        />
      )}
    </>
  );
}
