// import React from 'react'
// import Empty from "../../assets/Profile/Empty-Ecard.avif";
// export default function EgiftCard() {
//   return (
//     <div>
//       <img src={Empty} alt="" />
//     </div>
//   )
// }

import React, { useState } from "react";
import Empty from "../../assets/Profile/Empty-Ecard.avif"; // Ensure the path is correct

export default function EgiftCard() {
  const [activeTab, setActiveTab] = useState("sent");

  return (
    <div className="w-full  mx-auto px-0 py-0">
      {/* Tabs */}
      <div className="flex border-b border-gray-300 mb-10">
        <button
          className={`flex-1 text-center py-3 text-lg font-medium transition-colors ${
            activeTab === "sent"
              ? "text-green-700 border-b-2 border-green-700"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("sent")}
        >
          Sent
        </button>
        <button
          className={`flex-1 text-center py-3 text-lg font-medium transition-colors ${
            activeTab === "received"
              ? "text-green-700 border-b-2 border-green-700"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("received")}
        >
          Received
        </button>
      </div>

      {/* Empty State */}
      <div className="flex flex-col items-center justify-center text-center min-h-[250px]">
        <img
          src={Empty}
          alt="No e-gift cards"
          className="w-28 sm:w-32 md:w-36 mb-4"
        />
        <p className="text-base sm:text-lg font-medium text-gray-700">
          No e-gift cards to show here!
        </p>
      </div>
    </div>
  );
}
