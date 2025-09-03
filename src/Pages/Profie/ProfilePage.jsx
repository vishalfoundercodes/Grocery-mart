import React, { useState, useEffect } from "react";
import ProfileLayout from "./ProfileLayout";
import Sidebar from "./SideBar";
import OrderHistory from "./OrderHistory";
import { useLocation } from "react-router-dom";
import Address from "./Address";
import EgiftCard from "./EgiftCard";
import AccountPrivacy from "./AccountPrivacy";
import OrderDetails from "./OrderDetails"; // import OrderDetails

export default function ProfilePage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialTab = queryParams.get("tab") || "orders";

  const [active, setActive] = useState(initialTab);
  const [selectedOrderId, setSelectedOrderId] = useState(null);

  useEffect(() => {
    setActive(initialTab);
  }, [initialTab]);

  // Back from OrderDetails to OrderHistory
  const handleBackToOrders = () => {
    setSelectedOrderId(null);
  };

  return (
    <ProfileLayout
      sidebar={<Sidebar active={active} onNavigate={setActive} />}
      content={
        active === "orders" ? (
          selectedOrderId ? (
            <OrderDetails
              orderId={selectedOrderId}
              onBack={handleBackToOrders}
            />
          ) : (
            <OrderHistory onSelectOrder={(id) => setSelectedOrderId(id)} />
          )
        ) : active === "address" ? (
          <Address />
        ) : active === "wallet" ? (
          <p className="text-gray-500">Wallet Details...</p>
        ) : active === "eGiftCards" ? (
          <EgiftCard />
        ) : active === "accountPrivacy" ? (
          <AccountPrivacy />
        ) : (
          <p className="text-gray-500">Coming soon...</p>
        )
      }
    />
  );
}
