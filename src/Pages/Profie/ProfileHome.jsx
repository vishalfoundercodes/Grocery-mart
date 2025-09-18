import React, { useEffect, useRef } from "react";
import {
  User,
  MapPin,
  Wallet,
  Gift,
  Lock,
  LogOut,
  ClipboardList,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../Context/CartContext";

export default function ProfileHome({ open, onClose }) {
  const { fetchCart } = useCart();
  const dropdownRef = useRef(null);
const navigate = useNavigate();
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClose(); // close if clicked outside
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      ref={dropdownRef}
      className="absolute right-4 top-14 h-auto w-64 bg-white shadow-lg rounded-xl p-4 z-50"
    >
      {/* Phone Number */}
      <p className="text-gray-700 font-medium mb-3">7570006440</p>

      <p className="text-sm text-gray-500 mb-2">Your Information</p>

      <div className="flex flex-col space-y-2">
        <button
          className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100"
          onClick={() => {
            navigate("/profilepage?tab=orders");
            onClose();
          }}
        >
          <ClipboardList className="w-5 h-5 text-gray-500" />
          <span>Order History</span>
        </button>
        <button
          className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100"
          onClick={() => {
            navigate("/profilepage?tab=address");
            onClose();
          }}
        >
          <MapPin className="w-5 h-5 text-gray-500" />
          <span>Address Book</span>
        </button>
        {/* <button className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100">
          <Wallet className="w-5 h-5 text-gray-500" />
          <span>Wallet Details</span>
        </button> */}
        <button
          className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100"
          onClick={() => {
            navigate("/profilepage?tab=eGiftCards");
            onClose();
          }}
        >
          <Gift className="w-5 h-5 text-gray-500" />
          <span>E-Gift Cards</span>
        </button>
        <button
          className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100"
          onClick={() => {
            navigate("/profilepage?tab=accountPrivacy");
            onClose();
          }}
        >
          <Lock className="w-5 h-5 text-gray-500" />
          <span>Account Privacy</span>
        </button>
        <button
          className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100"
          onClick={() => {
            localStorage.removeItem("userId");
            
            navigate("/");
            onClose();
          }}
        >
          <LogOut className="w-5 h-5 text-gray-500" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}
