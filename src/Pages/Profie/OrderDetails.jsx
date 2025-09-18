import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import { IoArrowBackOutline } from "react-icons/io5";
import { FaRegCopy } from "react-icons/fa";
import { useCart } from "../../Context/CartContext";
import { toast } from "react-toastify";

export default function OrderDetails({ order, onBack }) {
  const navigate = useNavigate();
  const { id } = useParams();
     const { orderHistory } = useCart();
     const [orderData, setOrderData] = useState(order);

     useEffect(() => {
       const fetchOrder = async () => {
         if (!orderData?.orderDetail) {
           const userId = localStorage.getItem("userId");
           const orders = await orderHistory(userId, true);
           const foundOrder = orders.find(
             (o) => o.orderDetail.order_id === order?.orderDetail.order_id
           );
           console.log("Fetched order:", foundOrder);
           setOrderData(foundOrder);
         }
       };
       fetchOrder();
     }, [order, orderData, orderHistory]);

     useEffect(() => {
       if (orderData) console.log("✅ Order detail:", orderData);
     }, [orderData]);

   

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6">
      {/* Back button */}
      <button
        // onClick={() => navigate(-1)}
        onClick={onBack}
        className="w-10 h-10 flex items-center justify-center rounded-md border"
      >
        <IoArrowBackOutline className="text-xl" />
      </button>

      {/* Order Summary */}
      <div>
        <h2 className="text-xl font-semibold">Order summary</h2>
        <p className="text-sm text-gray-500">
          Delivered in {orderData?.orderDetail?.delivery_time}
        </p>
        <button className="text-green-600 text-sm font-medium flex items-center mt-1">
          Download Invoice <span className="ml-1 text-lg">📥</span>
        </button>
      </div>

      {/* Item list */}
      {/* Item list */}
      <div>
        <h3 className="font-semibold mb-3">
          {orderData?.products?.length || 0} item
          {orderData?.products?.length > 1 ? "s" : ""} in this order
        </h3>

        {orderData?.products?.map((product, idx) => (
          <div
            key={idx}
            className="flex justify-between items-center border rounded-lg p-3 mb-2"
          >
            <div className="flex items-center space-x-3">
              <img
                src={
                  product.produt_image?.[0] ||
                  "https://via.placeholder.com/48x48.png?text=Img"
                }
                className="w-12 h-12 bg-gray-100 rounded object-cover"
                alt={product.name}
              />
              <div>
                <p className="text-sm font-medium">{product.name}</p>
                <p className="text-xs text-gray-500">
                  {product.quantity} piece x ₹{product.price}
                </p>
              </div>
            </div>
            <p className="text-sm font-semibold">
              ₹{(product.price * product.quantity).toFixed(2)}
            </p>
          </div>
        ))}
      </div>

      {/* Bill details */}
      <div>
        <h3 className="font-semibold mb-2">Bill details</h3>
        <div className="text-sm space-y-1 border-t pt-3">
          <div className="flex justify-between">
            <span>MRP</span>
            <span>₹{orderData?.orderDetail?.total_amount}</span>
          </div>
          <div className="flex justify-between text-blue-600">
            <span>Product discount</span>
            <span>-₹{orderData?.orderDetail?.discount}</span>
          </div>
          <div className="flex justify-between">
            <span>Item total</span>
            <span>₹{orderData?.orderDetail?.Item_total}</span>
          </div>
          <div className="flex justify-between">
            <span>Handling charge</span>
            <span>+₹{orderData?.orderDetail?.handling_charge}</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery charges</span>
            <span>+₹{orderData?.orderDetail?.delivery_amount}</span>
          </div>
          <div className="flex justify-between font-semibold pt-2 border-t">
            <span>Bill total</span>
            <span>₹{orderData?.orderDetail?.bill_total}</span>
          </div>
        </div>
      </div>

      {/* Order details */}
      <div>
        <h3 className="font-semibold mb-2">Order details</h3>
        <div className="text-sm space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-gray-500">Order id</span>
            <span className="flex items-center space-x-1 font-medium">
              <span>{orderData?.orderDetail?.order_id}</span>
              <FaRegCopy
                className="text-gray-500 cursor-pointer text-sm"
                onClick={() => {
                  navigator.clipboard.writeText(
                    orderData?.orderDetail?.order_id
                  );
                  toast.success("Order ID copied to clipboard!");
                }}
              />
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Payment</span>
            <span className="font-medium">Pay on Delivery</span>
          </div>
          <div>
            {/* <span className="text-gray-500 block">Deliver to</span>
            <p className="font-medium">
              Vishal Mishra, Ajay Gupta Sector-A, Sector K, Aliganj, Lucknow
            </p> */}
          </div>
          <div className="text-gray-500">
            Order placed on{" "}
            {new Date(orderData?.orderDetail?.created_at).toLocaleDateString(
              "en-GB",
              {
                day: "2-digit",
                month: "short",
                year: "numeric",
              }
            )}
          </div>
        </div>
      </div>

      {/* Chat with us */}
      <div className="pt-4 border-t">
        <h3 className="font-semibold mb-3">Need help with your order?</h3>
        <div className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-3 rounded-md border">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
              💬
            </div>
            <div>
              <p className="font-medium text-sm">Chat with us</p>
              <p className="text-xs text-gray-500">
                About any issues related to your order
              </p>
            </div>
          </div>
          <FiChevronRight className="text-green-600 text-lg" />
        </div>
      </div>
    </div>
  );
}
