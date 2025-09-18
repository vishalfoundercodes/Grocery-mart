// import React, { useEffect } from "react";
// import { FiChevronRight } from "react-icons/fi";
// import { MdCheck } from "react-icons/md";
// import { useCart } from "../../Context/CartContext";

// export default function OrderHistory({ onSelectOrder }) {
//   const { orderHistory } = useCart();
//   // console.log("orderHistory:", orderHistory);
//   useEffect(() => {
//     const userId = localStorage.getItem("userId");
//     orderHistory({ user_id: userId });

//   },[])
//   const orders = [
//     {
//       id: 1,
//       status: "Arrived in 7 minutes",
//       price: "₹47",
//       date: "15 Apr, 11:14 pm",
//     },
//   ];

//   return (
//     <div className="space-y-0 px-0 py-0">
//       {orders.map((order) => (
//         <div
//           // key={order.id}
//           onClick={() => onSelectOrder(order.id)}
//           className="bg-white rounded-2xl shadow-sm border overflow-hidden cursor-pointer"
//         >
//           <div className="flex justify-between items-start p-4">
//             <div className="flex items-start space-x-3">
//               <div className="bg-green-100 text-green-600 p-1.5 rounded-full">
//                 <MdCheck className="text-xl" />
//               </div>
//               <div>
//                 <h2 className="font-semibold text-sm sm:text-base">
//                   {order.status}
//                 </h2>
//                 <p className="text-xs text-gray-500">
//                   {order.price} • {order.date}
//                 </p>
//               </div>
//             </div>
//             <FiChevronRight className="text-gray-500 text-xl" />
//           </div>

//           <div className="px-4 pb-4">
//             <div className="w-16 h-16 bg-gray-100 rounded flex items-center justify-center border">
//               <img
//                 src="https://via.placeholder.com/40x40.png?text=Img"
//                 alt="Order Preview"
//                 className="w-10 h-10 object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import { MdCheck } from "react-icons/md";
import { useCart } from "../../Context/CartContext";

export default function OrderHistory({ onSelectOrder }) {
  const { orderHistory } = useCart();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    const fetchOrders = async () => {
      const data = await orderHistory(userId, true); // ✅ pass userId
      setOrders(data);
    };
    fetchOrders();
  }, []);

  return (
    <div className="space-y-4 px-2 py-2">
      {orders.length === 0 ? (
        <p className="text-gray-500 text-center">No orders found</p>
      ) : (
        orders.map((order, idx) => (
          <div
            key={idx}
            // onClick={() => onSelectOrder(order.orderDetail.order_id)}
            // onClick={() => {onSelectOrder(order),console.log(order)}}
            onClick={(() => {onSelectOrder(order), console.log(order)})}
            className="bg-white rounded-2xl shadow-sm border overflow-hidden cursor-pointer"
          >
            {/* Top Section */}
            <div className="flex justify-between items-start p-4">
              <div className="flex items-start space-x-3">
                <div className="bg-green-100 text-green-600 p-1.5 rounded-full">
                  <MdCheck className="text-xl" />
                </div>
                <div>
                  <h2 className="font-semibold text-sm sm:text-base">
                    Order #{order.orderDetail.order_id}
                  </h2>
                  <p className="text-xs text-gray-500">
                    ₹{order.orderDetail.total_amount} •{" "}
                    {new Date(order.orderDetail.created_at).toLocaleString()}
                  </p>
                  <p className="text-xs text-gray-400">
                    {order.orderDetail.delivery_time}
                  </p>
                </div>
              </div>
              <FiChevronRight className="text-gray-500 text-xl" />
            </div>

            {/* Products Preview */}
            <div className="flex space-x-2 px-4 pb-4 overflow-x-auto">
              {order.products.length > 0 ? (
                order.products.map((prod) => (
                  <div
                    key={prod.id}
                    className="w-16 h-16 bg-gray-100 rounded flex items-center justify-center border"
                  >
                    <img
                      src={
                        prod.produt_image?.[0] ||
                        "https://via.placeholder.com/40"
                      }
                      alt={prod.name}
                      className="w-10 h-10 object-cover"
                    />
                  </div>
                ))
              ) : (
                <span className="text-xs text-gray-400">No products</span>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
}
