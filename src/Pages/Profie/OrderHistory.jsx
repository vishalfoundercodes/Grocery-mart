import React from "react";
import { FiChevronRight } from "react-icons/fi";
import { MdCheck } from "react-icons/md";

export default function OrderHistory({ onSelectOrder }) {
  const orders = [
    {
      id: 1,
      status: "Arrived in 7 minutes",
      price: "₹47",
      date: "15 Apr, 11:14 pm",
    },
  ];

  return (
    <div className="space-y-0 px-0 py-0">
      {orders.map((order) => (
        <div
          key={order.id}
          onClick={() => onSelectOrder(order.id)}
          className="bg-white rounded-2xl shadow-sm border overflow-hidden cursor-pointer"
        >
          <div className="flex justify-between items-start p-4">
            <div className="flex items-start space-x-3">
              <div className="bg-green-100 text-green-600 p-1.5 rounded-full">
                <MdCheck className="text-xl" />
              </div>
              <div>
                <h2 className="font-semibold text-sm sm:text-base">
                  {order.status}
                </h2>
                <p className="text-xs text-gray-500">
                  {order.price} • {order.date}
                </p>
              </div>
            </div>
            <FiChevronRight className="text-gray-500 text-xl" />
          </div>

          <div className="px-4 pb-4">
            <div className="w-16 h-16 bg-gray-100 rounded flex items-center justify-center border">
              <img
                src="https://via.placeholder.com/40x40.png?text=Img"
                alt="Order Preview"
                className="w-10 h-10 object-cover"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
