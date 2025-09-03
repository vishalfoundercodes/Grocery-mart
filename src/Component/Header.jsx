import { ShoppingCart, Search, User } from "lucide-react";
import React, { useEffect, useState } from "react";
import LoginModal from "../Auth/Login"; // Adjust the path as necessary
import LocationModal from "./LocationModaal";
import ProfileHome from "../Pages/Profie/ProfileHome";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext"; // adjust path
import CartSidebar from "../Context/CartSidebar"; // adjust path
import { useLocation } from "../Context/LocationContext";
import CartManager from "../Context/CartManager";



export default function Header() {
   const { cart } = useCart(); // 👈 access cart
   const [showCart, setShowCart] = useState(false);
   const [addressOpen, setAddressOpen] = useState(false);
   const { location, address } = useLocation();


   const totalItems = cart.items.reduce((sum, item) => sum + item.qty, 0);
  const placeholders = [
    'Search "milk"',
    'Search "bread"',
    'Search "cake"',
    'Search "fruits"',
  ];

  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
   const [open, setOpen] = useState(false);
   const [openprofile, setOpenProfile] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false); 
  const navigate = useNavigate();

  const userid=localStorage.getItem("userId")
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % placeholders.length);
        setAnimating(false);
      }, 500); // matches animation duration
    }, 2000); // change every 2 sec

    return () => clearInterval(interval);
  }, []);

 return (
   <header className="w-full shadow-md bg-white sticky top-0 z-20">
     <div className="mx-auto px-1 sm:px-4 py-3 md:py-4">
       {/* ---------- Mobile Layout (<= 500px) ---------- */}
       <div className="flex items-center justify-between sm:hidden">
         <span
           className="text-sm font-bold cursor-pointer"
           onClick={() => navigate("/")}
         >
           <span className="text-yellow-400">Grocery</span>
           <span className="text-green-600">mart</span>
         </span>
         {/* Left side (delivery + address) */}
         <div
           className="flex flex-col  cursor-pointer"
           onClick={() => setLocationOpen(true)}
         >
           <p className="font-semibold text-sm">Delivery in 12 minutes</p>
           <p className="text-xs text-gray-600 truncate max-w-[200px]">
             {/* 3/62, Janki Vihar Colony, Jankip... */}
             {address || "select your location"}
           </p>
         </div>

         {/* Right side (profile icon → opens login modal) */}
         {!userid ? (
           <button
             className="text-gray-800 font-medium"
             onClick={() => setOpen(true)}
             aria-haspopup="dialog"
           >
             Login
           </button>
         ) : (
           <>
             <div className="flex flex-col">
               <button
                 onClick={() => setOpenProfile(true)}
                 aria-label="Login"
                 className="p-2 rounded-full hover:bg-gray-100"
               >
                 <User className="w-6 h-6 text-gray-700" />
               </button>
               {totalItems == 0 ? (
                 <button className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg">
                   <ShoppingCart className="w-5 h-5 text-gray-600" />
                   <span className="font-semibold hidden sm:block">
                     My Cart
                   </span>
                 </button>
               ) : (
                 <button
                   className="flex items-center gap-2 bg-green-600 text-white px-3 py-2 rounded-lg"
                   onClick={() => setShowCart(true)} // 👈 open
                 >
                   <ShoppingCart className="w-5 h-5" />
                   <div className="text-left leading-tight">
                     <div className="text-sm font-semibold">
                       {totalItems} items
                     </div>
                     <div className="text-xs font-medium">
                       ₹{cart.totalPrice}
                     </div>
                   </div>
                 </button>
               )}
             </div>
           </>
         )}
       </div>

       {/* Search Bar for mobile */}
       <div className="mt-2 sm:hidden">
         <div className="relative flex items-center w-full bg-gray-100 rounded-lg px-3 py-2">
           <Search className="text-gray-500 w-5 h-5 mr-2" />
           <input
             type="text"
             className="w-full bg-transparent text-sm focus:outline-none placeholder-gray-400"
             placeholder="Search 'milk'"
           />
         </div>
       </div>

       {/* ---------- Desktop Layout (> 500px) ---------- */}
       <div className="hidden sm:flex items-center justify-between">
         {/* Left Section */}
         <div className="flex items-center gap-4">
           <span
             className="text-3xl font-bold cursor-pointer"
             onClick={() => navigate("/")}
           >
             <span className="text-yellow-400">Grocery</span>
             <span className="text-green-600">mart</span>
           </span>
           <div onClick={() => setLocationOpen(true)}>
             <p className="font-semibold">Delivery in 12 minutes</p>
             <p className="text-sm text-gray-600 truncate max-w-[180px]">
               {/* 3/62, Janki Vihar Colony, Jankip... */}
               {address || "Select your address"}
             </p>
           </div>
         </div>

         {/* Search Bar */}
         <div className="flex-1 mx-4">
           <div className="relative flex items-center w-full bg-gray-100 rounded-lg px-3 py-2 overflow-hidden">
             <Search className="text-gray-500 w-5 h-5 mr-2" />
             <input
               type="text"
               className="w-full bg-transparent text-sm focus:outline-none placeholder-transparent"
               placeholder={placeholders[index]}
             />
             {/* Animated Placeholder Overlay */}
             <div className="absolute left-10 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none h-5 overflow-hidden">
               <div
                 className={`transition-transform duration-500`}
                 style={{
                   transform: animating ? `translateY(-100%)` : `translateY(0)`,
                 }}
               >
                 <div className="h-5 flex items-center">
                   {placeholders[index]}
                 </div>
                 <div className="h-5 flex items-center">
                   {placeholders[(index + 1) % placeholders.length]}
                 </div>
               </div>
             </div>
           </div>
         </div>

         {/* Right Section */}
         <div className="flex items-center gap-4">
           {!userid ? (
             <button
               className="text-gray-800 font-medium"
               onClick={() => setOpen(true)}
               aria-haspopup="dialog"
             >
               Login
             </button>
           ) : (
             <button
               onClick={() => setOpenProfile(true)}
               aria-label="Login"
               className="p-2 rounded-full hover:bg-gray-100"
             >
               <User className="w-6 h-6 text-gray-700" />
             </button>
           )}

           {totalItems == 0 ? (
             <button className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg">
               <ShoppingCart className="w-5 h-5 text-gray-600" />
               <span className="font-semibold hidden sm:block">My Cart</span>
             </button>
           ) : (
             <button
               className="flex items-center gap-2 bg-green-600 text-white px-3 py-2 rounded-lg"
               //  onClick={() => setShowCart(true)} // 👈 open
               onClick={() => {
                 setAddressOpen(false); // ensure address is closed
                 setShowCart(true); // open cart
               }}
             >
               <ShoppingCart className="w-5 h-5" />
               <div className="text-left leading-tight">
                 <div className="text-sm font-semibold">{totalItems} items</div>
                 <div className="text-xs font-medium">
                   ₹{cart.totalPrice.toFixed(2)}
                 </div>
               </div>
             </button>
           )}
         </div>
       </div>
     </div>

     {/* Login Modal */}
     <LoginModal open={open} onClose={() => setOpen(false)} />
     <LocationModal
       open={locationOpen}
       onClose={() => setLocationOpen(false)}
     />
     {/* <CartSidebar open={showCart} onClose={() => setShowCart(false)} /> */}
     <CartManager
       cartOpen={showCart}
       setCartOpen={setShowCart}
       addressOpen={addressOpen}
       setAddressOpen={setAddressOpen}
     />

     <ProfileHome open={openprofile} onClose={() => setOpenProfile(false)} />
   </header>
 );
}
