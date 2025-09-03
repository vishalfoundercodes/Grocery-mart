import React, { useEffect, useState, useRef } from "react";
import { Plus, Pencil } from "lucide-react";
import { useAddress } from "../Context/AddressContext";
import AddAddress from "../Pages/Profie/AddAdress";
import { useLocation } from "../Context/LocationContext";
import { useSelectedAddress } from "../Context/SelectedAddressContext";

export default function AddressCartSlider({ open, onClose }) {
  const [openAddress, setOpenAddress] = useState(false);
  const [editAddress, setEditAddress] = useState(null);
  const [dropdownOpenId, setDropdownOpenId] = useState(null);
  const [selectedAddressId, setSelectedAddressId] = useState(null);
    const { setSelectedAddress } = useSelectedAddress(); // ✅ use context instead



  const dropdownRef = useRef(null); // ✅ Single ref

  const { addresses, addAddress, deleteAddress, updateAddress } = useAddress();

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

          {addresses.map((address) => {
            const isSelected = selectedAddressId === address.id;

            return (
              <div
                key={address.id}
                className={`relative flex items-start justify-between p-4 border rounded-lg mb-2 transition cursor-pointer 
        ${
          isSelected
            ? "bg-green-100 border-green-600"
            : "bg-gray-50 border-gray-300"
        }`}
                //onClick={() => setSelectedAddressId(address.id)} // 👈 Select address
                onClick={() => {
                  setSelectedAddress(address);
                  setSelectedAddressId(address.id); // highlight selected
                }}
              >
                <div>
                  <p className="font-bold mb-1 flex items-center">🏠 Home</p>
                  <p className="text-sm text-gray-600 max-w-[250px]">
                    {address.details}
                  </p>
                </div>

                <div className="relative">
                  <button
                    className="text-green-600 hover:text-green-800 transition mt-1"
                    onClick={(e) => {
                      e.stopPropagation(); // ✅ Prevents click bubbling to outer div
                      setDropdownOpenId(
                        dropdownOpenId === address.id ? null : address.id
                      );
                    }}
                  >
                    <Pencil className="w-4 h-4" />
                  </button>

                  {dropdownOpenId === address.id && (
                    <div
                      ref={dropdownRef}
                      className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded shadow-md z-10"
                      onClick={(e) => e.stopPropagation()} // ✅ Prevents close when clicking inside
                    >
                      <button
                        className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                        onClick={() => handleEdit(address)}
                      >
                        Edit
                      </button>
                      <button
                        className="block w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-100"
                        onClick={() => deleteAddress(address.id)}
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
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
