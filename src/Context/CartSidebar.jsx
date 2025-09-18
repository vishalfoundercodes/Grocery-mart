// import { useCart } from "./CartContext";
// import { X } from "lucide-react";
// import { useEffect,useState } from "react";
// import { useSelectedAddress } from "./SelectedAddressContext";
// import axios from "axios";
// import { toast } from "react-toastify";

// export default function CartSidebar({ open, onClose, onAddressOpen }) {
//   const { cart, increment, decrement, fetchCart, orderPlaced } = useCart();
//   const [showAddressSelection, setShowAddressSelection] = useState(false);
//   const { selectedAddress } = useSelectedAddress();
// // console.log("cartt items:", cart.billItem );
// const deleiveryCost = cart.billItem?.delivery_charge || 0;
// const handlingCost = cart.billItem?.handling_charge || 0;
// const itemsTotal = cart.billItem?.total_items_amount || 0;
// const totalItem = cart.billItem?.total_item || 0;
// const grandTotal = cart.billItem?.grand_total || 0;
//   const smallCartCost = 0;

//   // Inside your component:
// useEffect(() => {
//   if (open && cart.itemsFetched && cart.items.length === 0) {
//     onClose();
//   }
// }, [cart.itemsFetched, cart.items.length, open, onClose]);

// const userId = localStorage.getItem("userId");
//   useEffect(() => {
//     if (open) {
//       fetchCart(userId); // 👈 pass logged-in user_id
//     }
//   }, [open, fetchCart]);

  

// const handleProceedToPay = async () => {
//   if (!selectedAddress) {
//     // alert("Please select an address first!");
//     toast.error("Please select an address first!");
//     return;
//   }
// console.log("cart Address:", cart.items);
//   const payload = {
//     user_id: userId,
//     discount: 10,
//     order_id: Date.now(),
//     product_id: cart.items.map((item) => Number(item.product_id)), // 👈 API ko array chahiye to aise
//     vendor_id: cart.items.map((item) => Number(item.vendor_id)),
//     quantity: cart.items.map((item) => Number(item.quantity)),
//     Item_total: cart.totalPrice.toFixed(2),
//     total_amount: grandTotal,
//     delivery_amount: deleiveryCost,
//     handling_charge: handlingCost,
//     address_id: selectedAddress?.id,
//     status: "0",
//     paymode: "Cash",
//     coupon_id: "couponId",
//   };

//   const res = await orderPlaced(payload); // ✅ Context se call
//     console.log("order placed response:", res);
//   if (res?.status) {
   

//     // ✅ Refresh cart again so Header updates immediately
//     await fetchCart(userId);
//  toast.success(res.message || "Order placed successfully!");
//     // ✅ Close sidebar
//     onClose();
//     window.location.reload();

//   } else {
//     toast.error(res?.message || "Failed to place order");
//   }
// };

//   return (
//     <div className=" ">
//       {/* Overlay (blurs the background) */}
//       {open && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-30 transition-opacity duration-300"
//           onClick={onClose} // Optional: close cart when clicking outside
//         />
//       )}

//       <div
//         className={`fixed top-0 right-0 w-[350px] overflow-y-auto scrollbar-hide sm:w-[400px] h-full bg-[#F5F7FD] shadow-lg z-40 transform transition-transform duration-300 ${
//           open ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         {/* Header */}
//         <div className="flex justify-between items-center px-4 py-3 border-b sticky top-0 bg-white">
//           <h2 className="text-lg font-bold items-center">My Cart</h2>
//           <button onClick={onClose}>
//             <X className="w-5 h-5" />
//           </button>
//         </div>

//         {/* Delivery Info */}
//         <div className="px-4 py-2 bg-gray-100 text-sm">
//           <p className="font-medium text-green-600">Delivery in 8 minutes</p>
//           <p className="text-gray-500 text-xs">
//             Shipment of {cart.items.length} item{cart.items.length > 1 && "s"}
//           </p>
//         </div>

//         {/* Cart Items */}
//         <div className="p-4 space-y-4 overflow-y-auto ">
//           {cart.items.length === 0 ? (
//             <p className="text-gray-500 text-center mt-8">
//               Your cart is empty.
//             </p>
//           ) : (
//             cart.items.map((item) => (
//               <div
//                 // key={item.index}
//                 className="flex items-center border rounded-lg p-2"
//               >
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="w-16 h-16 object-contain"
//                 />
//                 <div className="flex-1 px-3">
//                   <h3 className="text-sm font-semibold">{item.name}</h3>
//                   <p className="text-xs text-gray-600">{item.description}</p>
//                   <p className="text-sm font-semibold mt-1">
//                     ₹{item.price.toFixed(2)}
//                   </p>
//                 </div>

//                 {/* Quantity Controls */}
//                 <div className="flex items-center">
//                   <button
//                     className="px-2 py-1 border border-gray-300"
//                     onClick={() => decrement(item)}
//                   >
//                     -
//                   </button>
//                   <span className="px-3">{item.qty}</span>
//                   <button
//                     className="px-2 py-1 border border-gray-300"
//                     onClick={() => increment(item)}
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>

//         {/* Bill Details */}
//         <div className="px-4 py-5">
//           <div className="bg-white border rounded-lg shadow-md p-4 text-sm space-y-3">
//             <h4 className="font-bold text-base">Bill details</h4>

//             <div className="flex justify-between">
//               <span className="flex items-center gap-1">
//                 <span role="img" aria-label="item">
//                   🧾
//                 </span>{" "}
//                 Total items
//               </span>
//               <span>{totalItem}</span>
//             </div>
//             <div className="flex justify-between">
//               <span className="flex items-center gap-1">
//                 <span role="img" aria-label="item">
//                   🧾
//                 </span>{" "}
//                 Items total
//               </span>
//               <span>₹{cart.totalPrice.toFixed(2)}</span>
//             </div>

//             <div className="flex justify-between">
//               <span className="flex items-center gap-1">
//                 <span role="img" aria-label="delivery">
//                   🛵
//                 </span>{" "}
//                 Delivery charge
//                 <span
//                   className="text-gray-400 cursor-pointer text-xs"
//                   title="Delivery fee varies by location."
//                 >
//                   ℹ️
//                 </span>
//               </span>
//               <span>₹{deleiveryCost}</span>
//             </div>

//             <div className="flex justify-between">
//               <span className="flex items-center gap-1">
//                 <span role="img" aria-label="handling">
//                   🔒
//                 </span>{" "}
//                 Handling charge
//                 <span
//                   className="text-gray-400 cursor-pointer text-xs"
//                   title="Handling includes packaging & safety."
//                 >
//                   ℹ️
//                 </span>
//               </span>
//               <span>₹{handlingCost}</span>
//             </div>

//             {/* Optional: Remove this if smallCartCost is no longer needed */}
//             {smallCartCost > 0 && (
//               <div className="flex justify-between">
//                 <span className="flex items-center gap-1">
//                   <span role="img" aria-label="cart">
//                     🛒
//                   </span>{" "}
//                   Small cart charge
//                 </span>
//                 <span>₹{smallCartCost}</span>
//               </div>
//             )}

//             <div className="flex justify-between font-bold pt-2 border-t">
//               <span>Grand total</span>
//               <span>₹{grandTotal}</span>
//             </div>
//           </div>
//         </div>

//         {/* Feeding India Donation */}
//         <div className="px-4 py-3 mt-4 bg-yellow-100 rounded-md flex items-start space-x-2 text-sm">
//           <input type="checkbox" className="mt-1" />
//           <div className="flex-1">
//             <p className="font-semibold">Feeding India donation</p>
//             <p className="text-gray-600 text-xs">
//               Working towards a malnutrition free India.
//             </p>
//           </div>
//           <span className="ml-auto font-medium">₹1</span>
//         </div>

//         {/* Tip Section */}
//         {/* Tip Section */}
//         <div className="px-4 py-3">
//           <div className="bg-white border rounded-lg shadow-md p-4">
//             <p className="text-black font-bold">Tip your delivery partner</p>
//             <p className="text-xs text-gray-600 mt-1">
//               Your kindness means a lot! 100% of your tip will go directly to
//               your delivery partner.
//             </p>

//             {/* Scrollable Tip Options */}
//             <div className="flex space-x-3 mt-4 overflow-x-auto scrollbar-hide">
//               {/* Tip Option Buttons */}
//               {[
//                 { emoji: "😊", amount: 20 },
//                 { emoji: "🤩", amount: 30 },
//                 { emoji: "😍", amount: 50 },
//                 { emoji: "😎", amount: 60 },
//                 { emoji: "👏", label: "Custom" },
//               ].map((tip, idx) => (
//                 <button
//                   // key={idx}
//                   className="flex-shrink-0 flex items-center space-x-1 px-4 py-2 border rounded-full text-sm bg-white hover:bg-gray-100"
//                 >
//                   <span>{tip.emoji}</span>
//                   <span>{tip.label || `₹${tip.amount}`}</span>
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Cancel Policy */}
//         <div className="px-4 py-3">
//           <div className="px-4 py-3 text-sm text-gray-600 bg-white border rounded-lg shadow-md">
//             <p className="text-black font-bold">Cancellation Policy</p>
//             <p className="text-xs">
//               Orders cannot be cancelled once packed for delivery. In case of
//               unexpected delays, a refund will be provided, if applicable.
//             </p>
//           </div>
//         </div>

//         {/* Footer */}
//         {/* <div className=" left-0 w-full border-t p-4 bg-white sticky bottom-0">
//           <div className="flex justify-between items-center font-bold">
//             <span>₹{grandTotal} TOTAL</span>
//             <button
//               disabled={cart.items.length === 0}
//               className="bg-green-600 text-white px-6 py-2 rounded-lg disabled:bg-gray-300"
//             >
//               Proceed &gt;
//             </button>
//           </div>
//         </div> */}
//         {/* Delivery Address & Footer Section */}
//         <div className="left-0 w-full bg-white sticky bottom-0">
//           {/* Address Block */}
//           <div className="flex justify-between items-start px-4 pt-3 pb-2 border-t">
//             <div>
//               <p className="text-sm font-semibold">Delivering to Home</p>
//               {/* <p className="text-xs text-gray-500 truncate max-w-[240px]">
//                 Vishal Mishra, Ajay Gupta Sector-A, Sector K, Lucknow
//               </p> */}
//               <p className="text-xs text-gray-500 truncate max-w-[240px]">
//                 {selectedAddress?.details || "No address selected"}
//               </p>
//             </div>
//             <button
//               // onClick={() => setShowAddressSelection(true)}
//               onClick={onAddressOpen}
//               className="text-green-600 text-sm font-medium hover:underline"
//             >
//               Change
//             </button>
//           </div>

//           {/* Bottom Total + Button */}
//           <div className="flex justify-between items-center px-4 py-3 border-t">
//             <span className="text-base font-semibold">₹{grandTotal} TOTAL</span>
//             <button
//               disabled={cart.items.length === 0}
//               onClick={handleProceedToPay}
//               className="bg-green-600 text-white px-6 py-2 rounded-lg text-sm disabled:bg-gray-300"
//             >
//               Proceed To Pay &gt;
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useCart } from "./CartContext";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { useSelectedAddress } from "./SelectedAddressContext";
import axios from "axios";
import { toast } from "react-toastify";

export default function CartSidebar({ open, onClose, onAddressOpen }) {
  const { cart, increment, decrement, fetchCart, orderPlaced } = useCart();
  const [showAddressSelection, setShowAddressSelection] = useState(false);
  const { selectedAddress } = useSelectedAddress();

  // console.log("cartt items:", cart.billItem );
  const deleiveryCost = cart.billItem?.delivery_charge || 0;
  const handlingCost = cart.billItem?.handling_charge || 0;
  const itemsTotal = cart.billItem?.total_items_amount || 0;
  const totalItem = cart.billItem?.total_item || 0;
  const grandTotal = cart.billItem?.grand_total || 0;
  const smallCartCost = 0;

  // ✅ Fixed: Check if cart is empty and close sidebar
  useEffect(() => {
    // Add a small delay to ensure cart state is updated
    const timeoutId = setTimeout(() => {
      if (open && cart.items.length === 0 && cart.itemsFetched) {
        console.log("Cart is empty, closing sidebar");
        onClose();
      }
    }, 100); // Small delay to ensure state is updated

    return () => clearTimeout(timeoutId);
  }, [cart.items.length, cart.itemsFetched, open, onClose]);

  useEffect(()=>{
    if(cart.items.length === 0 ){
      onClose();
    }}
  ,[cart.items.length === 0 ])
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    if (open && userId) {
      fetchCart(userId); // 👈 pass logged-in user_id
    }
  }, [open, fetchCart, userId]);

  const handleProceedToPay = async () => {
    if (!selectedAddress) {
      // alert("Please select an address first!");
      toast.error("Please select an address first!");
      return;
    }
    console.log("cart Address:", cart.items);
    const payload = {
      user_id: userId,
      discount: 10,
      order_id: Date.now(),
      product_id: cart.items.map((item) => Number(item.product_id)), // 👈 API ko array chahiye to aise
      vendor_id: cart.items.map((item) => Number(item.vendor_id)),
      quantity: cart.items.map((item) => Number(item.quantity)),
      Item_total: cart.totalPrice.toFixed(2),
      total_amount: grandTotal,
      delivery_amount: deleiveryCost,
      handling_charge: handlingCost,
      address_id: selectedAddress?.id,
      status: "0",
      paymode: "Cash",
      coupon_id: "couponId",
    };
console.log("selected address:",selectedAddress)
    console.log("paylload order:",payload)
    const res = await orderPlaced(payload); // ✅ Context se call
    console.log("order placed response:", res);
    if (res?.status) {
      // ✅ Refresh cart again so Header updates immediately
      await fetchCart(userId);
      toast.success(res.message || "Order placed successfully!");
      // ✅ Close sidebar
      onClose();
      // ✅ Remove window.location.reload() - it's not needed in React
      // window.location.reload();
    } else {
      toast.error(res?.message || "Failed to place order");
    }
  };

  return (
    <div className=" ">
      {/* Overlay (blurs the background) */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-30 transition-opacity duration-300"
          onClick={onClose} // Optional: close cart when clicking outside
        />
      )}

      <div
        className={`fixed top-0 right-0 w-[350px] overflow-y-auto scrollbar-hide sm:w-[400px] h-full bg-[#F5F7FD] shadow-lg z-40 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-4 py-3 border-b sticky top-0 bg-white">
          <h2 className="text-lg font-bold items-center">My Cart</h2>
          <button onClick={onClose}>
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Delivery Info */}
        <div className="px-4 py-2 bg-gray-100 text-sm">
          <p className="font-medium text-green-600">Delivery in 8 minutes</p>
          <p className="text-gray-500 text-xs">
            Shipment of {cart.items.length} item{cart.items.length > 1 && "s"}
          </p>
        </div>

        {/* Cart Items */}
        <div className="p-4 space-y-4 overflow-y-auto ">
          {cart.items.length === 0 ? (
            <p className="text-gray-500 text-center mt-8">
              Your cart is empty.
            </p>
          ) : (
            cart.items.map((item, index) => (
              <div
                key={`${item.id}-${index}`} // ✅ Better key for re-rendering
                className="flex items-center border rounded-lg p-2"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-contain"
                />
                <div className="flex-1 px-3">
                  <h3 className="text-sm font-semibold">{item.name}</h3>
                  <p className="text-xs text-gray-600">{item.description}</p>
                  <p className="text-sm font-semibold mt-1">
                    ₹{item.price.toFixed(2)}
                  </p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center">
                  <button
                    className="px-2 py-1 border border-gray-300"
                    onClick={() => decrement(item)}
                  >
                    -
                  </button>
                  <span className="px-3">{item.qty}</span>
                  <button
                    className="px-2 py-1 border border-gray-300"
                    onClick={() => increment(item)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Bill Details */}
        <div className="px-4 py-5">
          <div className="bg-white border rounded-lg shadow-md p-4 text-sm space-y-3">
            <h4 className="font-bold text-base">Bill details</h4>

            <div className="flex justify-between">
              <span className="flex items-center gap-1">
                <span role="img" aria-label="item">
                  🧾
                </span>{" "}
                Total items
              </span>
              <span>{totalItem}</span>
            </div>
            <div className="flex justify-between">
              <span className="flex items-center gap-1">
                <span role="img" aria-label="item">
                  🧾
                </span>{" "}
                Items total
              </span>
              <span>₹{cart.totalPrice.toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span className="flex items-center gap-1">
                <span role="img" aria-label="delivery">
                  🛵
                </span>{" "}
                Delivery charge
                <span
                  className="text-gray-400 cursor-pointer text-xs"
                  title="Delivery fee varies by location."
                >
                  ℹ️
                </span>
              </span>
              <span>₹{deleiveryCost}</span>
            </div>

            <div className="flex justify-between">
              <span className="flex items-center gap-1">
                <span role="img" aria-label="handling">
                  🔒
                </span>{" "}
                Handling charge
                <span
                  className="text-gray-400 cursor-pointer text-xs"
                  title="Handling includes packaging & safety."
                >
                  ℹ️
                </span>
              </span>
              <span>₹{handlingCost}</span>
            </div>

            {/* Optional: Remove this if smallCartCost is no longer needed */}
            {smallCartCost > 0 && (
              <div className="flex justify-between">
                <span className="flex items-center gap-1">
                  <span role="img" aria-label="cart">
                    🛒
                  </span>{" "}
                  Small cart charge
                </span>
                <span>₹{smallCartCost}</span>
              </div>
            )}

            <div className="flex justify-between font-bold pt-2 border-t">
              <span>Grand total</span>
              <span>₹{grandTotal}</span>
            </div>
          </div>
        </div>

        {/* Feeding India Donation */}
        <div className="px-4 py-3 mt-4 bg-yellow-100 rounded-md flex items-start space-x-2 text-sm">
          <input type="checkbox" className="mt-1" />
          <div className="flex-1">
            <p className="font-semibold">Feeding India donation</p>
            <p className="text-gray-600 text-xs">
              Working towards a malnutrition free India.
            </p>
          </div>
          <span className="ml-auto font-medium">₹1</span>
        </div>

        {/* Tip Section */}
        {/* Tip Section */}
        <div className="px-4 py-3">
          <div className="bg-white border rounded-lg shadow-md p-4">
            <p className="text-black font-bold">Tip your delivery partner</p>
            <p className="text-xs text-gray-600 mt-1">
              Your kindness means a lot! 100% of your tip will go directly to
              your delivery partner.
            </p>

            {/* Scrollable Tip Options */}
            <div className="flex space-x-3 mt-4 overflow-x-auto scrollbar-hide">
              {/* Tip Option Buttons */}
              {[
                { emoji: "😊", amount: 20 },
                { emoji: "🤩", amount: 30 },
                { emoji: "😍", amount: 50 },
                { emoji: "😎", amount: 60 },
                { emoji: "👏", label: "Custom" },
              ].map((tip, idx) => (
                <button
                  key={idx} // ✅ Added key prop
                  className="flex-shrink-0 flex items-center space-x-1 px-4 py-2 border rounded-full text-sm bg-white hover:bg-gray-100"
                >
                  <span>{tip.emoji}</span>
                  <span>{tip.label || `₹${tip.amount}`}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Cancel Policy */}
        <div className="px-4 py-3">
          <div className="px-4 py-3 text-sm text-gray-600 bg-white border rounded-lg shadow-md">
            <p className="text-black font-bold">Cancellation Policy</p>
            <p className="text-xs">
              Orders cannot be cancelled once packed for delivery. In case of
              unexpected delays, a refund will be provided, if applicable.
            </p>
          </div>
        </div>

        {/* Footer */}
        {/* <div className=" left-0 w-full border-t p-4 bg-white sticky bottom-0">
          <div className="flex justify-between items-center font-bold">
            <span>₹{grandTotal} TOTAL</span>
            <button
              disabled={cart.items.length === 0}
              className="bg-green-600 text-white px-6 py-2 rounded-lg disabled:bg-gray-300"
            >
              Proceed &gt;
            </button>
          </div>
        </div> */}
        {/* Delivery Address & Footer Section */}
        <div className="left-0 w-full bg-white sticky bottom-0">
          {/* Address Block */}
          <div className="flex justify-between items-start px-4 pt-3 pb-2 border-t">
            <div>
              <p className="text-sm font-semibold">Delivering to Home</p>
              {/* <p className="text-xs text-gray-500 truncate max-w-[240px]">
                Vishal Mishra, Ajay Gupta Sector-A, Sector K, Lucknow
              </p> */}
              <p className="text-xs text-gray-500 truncate max-w-[240px]">
                {/* {selectedAddress?.details || "No address selected"} */}
                {selectedAddress
                  ? `${selectedAddress.house_no || ""}, ${
                      selectedAddress.landmark || ""
                    }, ${selectedAddress.locality || ""}`
                  : "No address selected"}
              </p>
            </div>
            <button
              // onClick={() => setShowAddressSelection(true)}
              onClick={onAddressOpen}
              className="text-green-600 text-sm font-medium hover:underline"
            >
              Change
            </button>
          </div>

          {/* Bottom Total + Button */}
          <div className="flex justify-between items-center px-4 py-3 border-t">
            <span className="text-base font-semibold">₹{grandTotal} TOTAL</span>
            <button
              disabled={cart.items.length === 0}
              onClick={handleProceedToPay}
              className="bg-green-600 text-white px-6 py-2 rounded-lg text-sm disabled:bg-gray-300"
            >
              Proceed To Pay &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}