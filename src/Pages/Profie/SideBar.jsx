import React from "react";
import { MapPin, ClipboardList, Gift, Lock, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
export default function Sidebar({ active, onNavigate }) {
    const navigate = useNavigate();
  return (
    <div className="flex flex-col h-full">
      <p className="text-center py-4 font-semibold text-gray-700">
        +917570006440
      </p>

      <button
        className={`flex items-center gap-3 px-4 py-3 text-sm hover:bg-gray-100 ${
          active === "orders" ? "bg-gray-100 font-medium" : ""
        }`}
        onClick={() => onNavigate("orders")}
      >
        <ClipboardList className="w-5 h-5 text-gray-500" />
        My Orders
      </button>

      <button
        className={`flex items-center gap-3 px-4 py-3 text-sm hover:bg-gray-100 ${
          active === "address" ? "bg-gray-100 font-medium" : ""
        }`}
        onClick={() => onNavigate("address")}
      >
        <MapPin className="w-5 h-5 text-gray-500" />
        My Addresses
      </button>

      <button
        className={`flex items-center gap-3 px-4 py-3 text-sm hover:bg-gray-100 ${
          active === "eGiftCards" ? "bg-gray-100 font-medium" : ""
        }`}
        onClick={() => onNavigate("eGiftCards")}
      >
        <Gift className="w-5 h-5 text-gray-500" />
        E-Gift Cards
      </button>

      <button
        className={`flex items-center gap-3 px-4 py-3 text-sm hover:bg-gray-100 ${
          active === "accountPrivacy" ? "bg-gray-100 font-medium" : ""
        }`}
        onClick={() => onNavigate("accountPrivacy")}
      >
        <Lock className="w-5 h-5 text-gray-500" />
        Account Privacy
      </button>

      <button className="flex items-center gap-3 px-4 py-3 text-sm hover:bg-gray-100 mt-auto" 
      onClick={()=>{localStorage.removeItem("userId");navigate("/")}}
      >
        <LogOut className="w-5 h-5 text-gray-500" />
        Logout
      </button>
    </div>
  );
}
