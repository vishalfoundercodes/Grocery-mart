// components/ProductCard.jsx
// import { useCart } from "../../Context/CartContext";
// import amulMilk from "../../assets/Categories/Amul/amulMilk.avif"
// import cowMilk from "../../assets/Categories/Amul/Cowmilk.avif"
// export default function ProductCard({ item }) {
//   const { cart, addToCart, increment, decrement } = useCart();
//   const cartItem = cart.items.find((ci) => ci.id === item.id);

//   return (
//     <div className="min-w-[180px] md:min-w-[200px] bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-300">
//       {/* Image */}
//       <div className="w-full flex justify-center items-center h-28 md:h-32 bg-white">
//         <img
//           src={item.image || amulMilk}
//           alt={item.name}
//           className="max-h-full object-contain"
//         />
//       </div>

//       {/* Content */}
//       <div className="p-3">
//         <div className="flex items-center text-[11px] text-gray-600 mb-2">
//           <span className="mr-1">⏱</span>
//           <span className="font-medium">{item.time || "12 MINS"}</span>
//         </div>

//         <h3 className="text-sm font-semibold text-gray-900 truncate">{item}</h3>
//         <p className="text-gray-400 text-xs mt-1">
//           {item.weight || "200 gram"}{" "}
//         </p>

//         <div className="flex justify-between items-center mt-3">
//           <div>
//             <span className="font-semibold text-sm">
//               ₹{item.price || "100"}
//             </span>
//             {item.oldPrice && (
//               <span className="ml-1 text-gray-300 line-through text-xs">
//                 ₹{item.oldPrice || "130"}
//               </span>
//             )}
//           </div>

//           {/* Add to cart or quantity controls */}
//           {cartItem ? (
//             <div className="flex items-center border border-green-600 rounded-md text-white bg-green-600">
//               <button
//                 className="px-2 py-1"
//                 onClick={() => decrement(cartItem.id)}
//               >
//                 -
//               </button>
//               <span className="px-3 text-sm font-semibold">
//                 {cartItem.qty || 1}
//               </span>
//               <button
//                 className="px-2 py-1"
//                 onClick={() => increment(cartItem.id)}
//               >
//                 +
//               </button>
//             </div>
//           ) : (
//             <button
//               className="px-4 py-1.5 rounded-md text-sm font-medium border border-green-600 text-green-600 bg-white hover:bg-green-50"
//               onClick={() => addToCart(item)}
//             >
//               ADD
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// import { useCart } from "../../Context/CartContext";
// import amulMilk from "../../assets/Categories/Amul/amulMilk.avif";
// import cowMilk from "../../assets/Categories/Amul/Cowmilk.avif";

// export default function ProductList({ item }) {
//   const items = [
//     {
//       id: 1,
//       name: "Amul Gold Full Cream Milk",
//       weight: "500 ml",
//       price: 35,
//       oldPrice: 40,
//       image: amulMilk,
//       time: "8 MINS",
//       options: ["500 ml", "1 litre"],
//     },
//     {
//       id: 2,
//       name: "Amul Masti Pouch Curd",
//       weight: "390 g",
//       price: 35,
//       image: cowMilk,
//       time: "8 MINS",
//       options: ["390 g"],
//     },
//     {
//       id: 3,
//       name: "Amul Taaza Toned Milk",
//       weight: "500 ml",
//       price: 29,
//       image: amulMilk,
//       time: "8 MINS",
//     },
//     {
//       id: 4,
//       name: "Good Morning Malai Milk Bread",
//       weight: "400 g",
//       price: 40,
//       image: cowMilk,
//       time: "8 MINS",
//     },
//     {
//       id: 5,
//       name: "Amul Salted Butter",
//       weight: "100 g",
//       price: 60,
//       image: amulMilk,
//       time: "8 MINS",
//       options: ["100 g", "200 g"],
//     },
//     {
//       id: 6,
//       name: "Amul Masti Cup Curd",
//       weight: "200 g",
//       price: 24,
//       image: cowMilk,
//       time: "8 MINS",
//     },
//     {
//       id: 7,
//       name: "Amul Salted Butter",
//       weight: "100 g",
//       price: 60,
//       image: amulMilk,
//       time: "8 MINS",
//       options: ["100 g", "200 g"],
//     },
//     {
//       id: 8,
//       name: "Amul Masti Cup Curd",
//       weight: "200 g",
//       price: 24,
//       image: cowMilk,
//       time: "8 MINS",
//     },
//     {
//       id: 9,
//       name: "Amul Salted Butter",
//       weight: "100 g",
//       price: 60,
//       image: amulMilk,
//       time: "8 MINS",
//       options: ["100 g", "200 g"],
//     },
//     {
//       id: 10,
//       name: "Amul Masti Cup Curd",
//       weight: "200 g",
//       price: 24,
//       image: cowMilk,
//       time: "8 MINS",
//     },
//     {
//       id: 11,
//       name: "Amul Salted Butter",
//       weight: "100 g",
//       price: 60,
//       image: amulMilk,
//       time: "8 MINS",
//       options: ["100 g", "200 g"],
//     },
//     {
//       id: 12,
//       name: "Amul Masti Cup Curd",
//       weight: "200 g",
//       price: 24,
//       image: cowMilk,
//       time: "8 MINS",
//     },
//     {
//       id: 13,
//       name: "Amul Salted Butter",
//       weight: "100 g",
//       price: 60,
//       image: amulMilk,
//       time: "8 MINS",
//       options: ["100 g", "200 g"],
//     },
//     {
//       id: 14,
//       name: "Amul Masti Cup Curd",
//       weight: "200 g",
//       price: 24,
//       image: cowMilk,
//       time: "8 MINS",
//     },
//     {
//       id: 15,
//       name: "Amul Salted Butter",
//       weight: "100 g",
//       price: 60,
//       image: amulMilk,
//       time: "8 MINS",
//       options: ["100 g", "200 g"],
//     },
//     {
//       id: 16,
//       name: "Amul Masti Cup Curd",
//       weight: "200 g",
//       price: 24,
//       image: cowMilk,
//       time: "8 MINS",
//     },
//     {
//       id: 17,
//       name: "Amul Salted Butter",
//       weight: "100 g",
//       price: 60,
//       image: amulMilk,
//       time: "8 MINS",
//       options: ["100 g", "200 g"],
//     },
//     {
//       id: 18,
//       name: "Amul Masti Cup Curd",
//       weight: "200 g",
//       price: 24,
//       image: cowMilk,
//       time: "8 MINS",
//     },
//     {
//       id: 19,
//       name: "Amul Salted Butter",
//       weight: "100 g",
//       price: 60,
//       image: amulMilk,
//       time: "8 MINS",
//       options: ["100 g", "200 g"],
//     },
//     {
//       id: 20,
//       name: "Amul Masti Cup Curd",
//       weight: "200 g",
//       price: 24,
//       image: cowMilk,
//       time: "8 MINS",
//     },
//     {
//       id: 21,
//       name: "Amul Salted Butter",
//       weight: "100 g",
//       price: 60,
//       image: amulMilk,
//       time: "8 MINS",
//       options: ["100 g", "200 g"],
//     },
//     {
//       id: 22,
//       name: "Amul Masti Cup Curd",
//       weight: "200 g",
//       price: 24,
//       image: cowMilk,
//       time: "8 MINS",
//     },
//     {
//       id: 23,
//       name: "Amul Salted Butter",
//       weight: "100 g",
//       price: 60,
//       image: amulMilk,
//       time: "8 MINS",
//       options: ["100 g", "200 g"],
//     },
//     {
//       id: 24,
//       name: "Amul Masti Cup Curd",
//       weight: "200 g",
//       price: 24,
//       image: cowMilk,
//       time: "8 MINS",
//     },
//   ];

//   console.log("item on see all:", item);

//   const { cart, addToCart, increment, decrement } = useCart();

//   return (
//     <div className="px-4 sm:px-8 py-6 max-w-screen-xl mx-auto h-[calc(100vh-80px)]">
//       {/* Product Section Container (scrollable) */}
//       <div className="bg-white rounded-xl border border-gray-200 shadow-sm h-full flex flex-col overflow-hidden">
//         {/* Sticky Category Header */}
//         <h2 className="text-lg font-semibold px-4 py-3 sticky top-0 z-10 bg-white border-b border-gray-200">
//           Buy Dairy Bread & Eggs Online
//         </h2>

//         {/* Scrollable Product Grid */}
//         <div className="flex-1 overflow-y-auto px-4 py-4">
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
//             {items.map((item) => {
//               const cartItem = cart.items.find((ci) => ci.id === item.id);

//               return (
//                 <div
//                   key={item.id}
//                   className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
//                 >
//                   {/* Image */}
//                   <div className="w-full flex justify-center items-center h-28 md:h-32 bg-white">
//                     <img
//                       src={item.image || amulMilk}
//                       alt={item.name}
//                       className="max-h-full object-contain"
//                     />
//                   </div>

//                   {/* Content */}
//                   <div className="p-3">
//                     {/* Time */}
//                     <div className="flex items-center gap-1 text-xs text-gray-500 mb-1">
//                       <span className="text-green-600">⏱</span>
//                       <span>{item.time || "8 MINS"}</span>
//                     </div>

//                     {/* Name */}
//                     <h3 className="text-sm font-semibold text-gray-900 leading-tight truncate">
//                       {item.name}
//                     </h3>

//                     {/* Weight */}
//                     <p className="text-xs text-gray-400 mt-1">{item.weight}</p>

//                     {/* Price + Cart Controls */}
//                     <div className="flex justify-between items-center mt-3">
//                       <div>
//                         <span className="text-sm font-semibold text-gray-900">
//                           ₹{item.price}
//                         </span>
//                         {item.oldPrice && (
//                           <span className="ml-1 line-through text-xs text-gray-300">
//                             ₹{item.oldPrice}
//                           </span>
//                         )}
//                       </div>

//                       {cartItem ? (
//                         <div className="flex items-center border border-green-600 rounded-md text-white bg-green-600">
//                           <button
//                             className="px-2 py-1"
//                             onClick={() => decrement(cartItem.id)}
//                           >
//                             -
//                           </button>
//                           <span className="px-3 text-sm font-semibold">
//                             {cartItem.qty || 1}
//                           </span>
//                           <button
//                             className="px-2 py-1"
//                             onClick={() => increment(cartItem.id)}
//                           >
//                             +
//                           </button>
//                         </div>
//                       ) : (
//                         <div className="text-center">
//                           <button
//                             className="px-4 py-1.5 rounded-md text-sm font-semibold border border-green-600 text-green-600 bg-white hover:bg-green-50 w-full"
//                             onClick={() => addToCart(item)}
//                           >
//                             ADD
//                           </button>
//                           {item.options && (
//                             <div className="text-[10px] text-gray-500 mt-1">
//                               {item.options.length} options
//                             </div>
//                           )}
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import { useState, useEffect } from "react";
// import { useCart } from "../../Context/CartContext";
// import { useGetCategoriesQuery } from "../../store/api";
// import { useLocation } from "react-router-dom";
// import { useGetCategoryWiseProductsQuery } from "../../store/api";
// import { skipToken } from "@reduxjs/toolkit/query";
// import { useNavigate } from "react-router-dom";

// export default function ProductList() {
//   const { cart, addToCart, increment, decrement } = useCart();
//   const location = useLocation();
//   const passedSubcategories = location.state?.subcategoryFirst || [];
//   const navigate=useNavigate()

//   // Store selected subcategory (default = first one)
//   const [selectedSub, setSelectedSub] = useState(null);
//   const [products, setProducts] = useState([]);

//   // Initialize selectedSub when passedSubcategories loads
//   useEffect(() => {
//     if (passedSubcategories.length > 0) {
//       setSelectedSub(passedSubcategories[0].id);
//     }
//   }, [passedSubcategories]);

//   // RTK Query for fetching products
//   const {
//     data: productData,
//     isLoading,
//     isFetching,
//     error,
//   } = useGetCategoryWiseProductsQuery(
//     selectedSub ? { sub_categorise_id: selectedSub } : skipToken
//   );

//   // Handle product data updates - this is the key fix
//   useEffect(() => {
//     if (selectedSub) {
//       // Clear products immediately when subcategory changes
//       setProducts([]);

//       // Only set new products if the API call is successful and data matches current selection
//       if (productData?.productslist && !isFetching) {
//         // Double-check that this data is for the currently selected subcategory
//         // This prevents race conditions where old API responses update the state
//         setProducts(productData.productslist);
//         console.log(productData.productslist);
//       }
//     }
//   }, [selectedSub, productData, isFetching]);

//   // Handle subcategory selection
//   const handleSubcategoryClick = (subId) => {
//     console.log("Selecting subcategory:", subId);
//     setSelectedSub(subId);
//     // Clear products immediately to show loading state
//     setProducts([]);
//   };

//   return (
//     <div className="px-4 sm:px-8 py-6 max-w-screen-xl mx-auto h-[calc(100vh-80px)]">
//       <div className="bg-white rounded-xl border border-gray-200 shadow-sm h-full flex flex-col overflow-hidden">
//         {/* Header */}
//         <h2 className="text-lg font-semibold px-4 py-3 sticky top-0 z-10 bg-white border-b border-gray-200">
//           Buy Products Online
//         </h2>

//         <div className="flex flex-1 overflow-hidden">
//           {/* Subcategory list */}
//           <div className="w-28 border-r border-gray-200 overflow-y-auto">
//             {isLoading && (
//               <div className="p-3 text-gray-400 text-sm">Loading...</div>
//             )}
//             {!isLoading &&
//               passedSubcategories.map((sub) => (
//                 <div
//                   // key={sub.id}
//                   className={`flex flex-col items-center p-3 cursor-pointer transition-colors ${
//                     selectedSub === sub.id
//                       ? "bg-green-50 border-l-4 border-green-600"
//                       : "hover:bg-gray-50"
//                   }`}
//                   onClick={() => handleSubcategoryClick(sub.id)}
//                 >
//                   <img
//                     src={sub.image}
//                     alt={sub.title}
//                     className="w-12 h-12 object-contain mb-2 rounded"
//                   />
//                   <span className="text-xs text-center">{sub.title}</span>
//                 </div>
//               ))}
//           </div>

//           {/* Products section */}
//           <div className="flex-1 flex flex-col overflow-hidden">
//             <div className="flex-1 overflow-y-auto px-4 py-4">
//               {/* Loading state */}
//               {isFetching && (
//                 <div className="flex justify-center items-center h-32">
//                   <div className="text-gray-400">Loading products...</div>
//                 </div>
//               )}

//               {/* Error state */}
//               {error && (
//                 <div className="flex justify-center items-center h-32">
//                   <div className="text-red-500">Failed to load products</div>
//                 </div>
//               )}

//               {/* Products grid */}
//               {!isFetching && !error && (
//                 <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 lg2:grid-cols-5 gap-2">
//                   {products.map((item) => {
//                     const cartItem = cart.items.find((ci) => ci.id === item.id);

//                     return (
//                       <div
//                         // key={item.id}
//                         className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow"
//                       >
//                         {/* Image */}
//                         <div className="w-full flex justify-center items-center h-28 md:h-32 bg-white">
//                           <img
//                             src={item.image}
//                             alt={item.name}
//                             className="max-h-full object-contain"
//                             onClick={() =>
//                               navigate(`/productDetails/${item.id}`, {
//                                 state: { product: item },
//                               })
//                             }
//                           />
//                         </div>

//                         {/* Content */}
//                         <div className="p-3">
//                           <div className="flex items-center gap-1 text-xs text-gray-500 mb-1">
//                             <span className="text-green-600">⏱</span>
//                             <span>{item.delivery_time} min</span>
//                           </div>

//                           <h3
//                             className="text-sm font-semibold text-gray-900 leading-tight truncate"
//                             onClick={() =>
//                               navigate(`/productDetails/${item.id}`, {
//                                 state: { product: item },
//                               })
//                             }
//                           >
//                             {item.name}
//                           </h3>

//                           <p className="text-xs text-gray-400 mt-1">
//                             {item.weight}
//                             {item.grocery_type}
//                           </p>

//                           <div className="flex justify-between items-center mt-3">
//                             <span className="text-sm font-semibold text-gray-900">
//                               ₹{item.price}
//                             </span>

//                             {cartItem ? (
//                               <div className="flex items-center border border-green-600 rounded-md text-white bg-green-600">
//                                 <button
//                                   className="px-2 py-1 hover:bg-green-700 transition-colors"
//                                   onClick={() => decrement(cartItem)}
//                                 >
//                                   -
//                                 </button>
//                                 <span className="px-3 text-sm font-semibold">
//                                   {cartItem.qty || 1}
//                                 </span>
//                                 <button
//                                   className="px-2 py-1 hover:bg-green-700 transition-colors"
//                                   onClick={() => increment(cartItem)}
//                                 >
//                                   +
//                                 </button>
//                               </div>
//                             ) : (
//                               <button
//                                 className="px-4 py-1.5 rounded-md text-sm font-semibold border border-green-600 text-green-600 bg-white hover:bg-green-50 transition-colors"
//                                 // onClick={() => addToCart(item)}
//                                 onClick={() => {
//                                   const user_id =
//                                     localStorage.getItem("userId"); // ✅ get user_id
//                                   addToCart({ ...item, user_id }); // ✅ send item + user_id
//                                   console.log("item", { ...item });
//                                   console.log("user id", { user_id });
//                                   console.log("item", { ...item, user_id });
//                                 }}
//                               >
//                                 ADD
//                               </button>
//                             )}
//                           </div>
//                         </div>
//                       </div>
//                     );
//                   })}

//                   {/* Empty state */}
//                   {products.length === 0 && !isFetching && (
//                     <div className="col-span-full text-center text-gray-400 py-8">
//                       No products available for this category
//                     </div>
//                   )}
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import { useState, useEffect } from "react";
import { useCart } from "../../Context/CartContext";
import { useGetCategoriesQuery } from "../../store/api";
import { useLocation } from "react-router-dom";
import { useGetCategoryWiseProductsQuery } from "../../store/api";
import { skipToken } from "@reduxjs/toolkit/query";
import { useNavigate } from "react-router-dom";

export default function ProductList() {
  const user_id = localStorage.getItem("userId");
  const { cart, addToCart, increment, decrement, isProductLoading } = useCart();
  const location = useLocation();
  const passedSubcategories = location.state?.subcategoryFirst || [];
  const navigate = useNavigate();

  // Store selected subcategory (default = first one)
  const [selectedSub, setSelectedSub] = useState(null);
  const [products, setProducts] = useState([]);

  // Initialize selectedSub when passedSubcategories loads
  useEffect(() => {
    if (passedSubcategories.length > 0) {
      setSelectedSub(passedSubcategories[0].id);
    }
  }, [passedSubcategories]);

  // RTK Query for fetching products
  const {
    data: productData,
    isLoading,
    isFetching,
    error,
  } = useGetCategoryWiseProductsQuery(
    selectedSub ? { sub_categorise_id: selectedSub } : skipToken
  );

  // Handle product data updates - this is the key fix
  useEffect(() => {
    if (selectedSub) {
      // Clear products immediately when subcategory changes
      setProducts([]);

      // Only set new products if the API call is successful and data matches current selection
      if (productData?.productslist && !isFetching) {
        // Double-check that this data is for the currently selected subcategory
        // This prevents race conditions where old API responses update the state
        setProducts(productData.productslist);
        console.log(productData.productslist);
      }
    }
  }, [selectedSub, productData, isFetching]);

  // Handle subcategory selection
  const handleSubcategoryClick = (subId) => {
    console.log("Selecting subcategory:", subId);
    setSelectedSub(subId);
    // Clear products immediately to show loading state
    setProducts([]);
  };

  return (
    <div className="px-4 sm:px-8 py-6 max-w-screen-xl mx-auto h-[calc(100vh-80px)]">
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm h-full flex flex-col overflow-hidden">
        {/* Header */}
        <h2 className="text-lg font-semibold px-4 py-3 sticky top-0 z-10 bg-white border-b border-gray-200">
          Buy Products Online
        </h2>

        <div className="flex flex-1 overflow-hidden">
          {/* Subcategory list */}
          <div className="w-28 border-r border-gray-200 overflow-y-auto">
            {isLoading && (
              <div className="p-3 text-gray-400 text-sm">Loading...</div>
            )}
            {!isLoading &&
              passedSubcategories.map((sub) => (
                <div
                  // key={sub.id}
                  className={`flex flex-col items-center p-3 cursor-pointer transition-colors ${
                    selectedSub === sub.id
                      ? "bg-green-50 border-l-4 border-green-600"
                      : "hover:bg-gray-50"
                  }`}
                  onClick={() => handleSubcategoryClick(sub.id)}
                >
                  <img
                    src={sub.image}
                    alt={sub.title}
                    className="w-12 h-12 object-contain mb-2 rounded"
                  />
                  <span className="text-xs text-center">{sub.title}</span>
                </div>
              ))}
          </div>

          {/* Products section */}
          <div className="flex-1 flex flex-col overflow-hidden">
            <div className="flex-1 overflow-y-auto px-4 py-4">
              {/* Loading state */}
              {isFetching && (
                <div className="flex justify-center items-center h-32">
                  <div className="text-gray-400">Loading products...</div>
                </div>
              )}

              {/* Error state */}
              {error && (
                <div className="flex justify-center items-center h-32">
                  <div className="text-red-500">Failed to load products</div>
                </div>
              )}

              {/* Products grid */}
              {!isFetching && !error && (
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 lg2:grid-cols-5 gap-2">
                  {products.map((item) => {
                    // console.log("product items", item);
                    // console.log("cart items", cart.items);
                 const cartItem = cart.items.find(
                   (ci) => String(ci.id) === String(item.id)
                 );

                    const isLoading = isProductLoading(item.id);
                    return (
                      <div
                        // key={item.id}
                        className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                      >
                        {/* Image */}
                        <div className="w-full flex justify-center items-center h-28 md:h-32 bg-white">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="max-h-full object-contain cursor-pointer"
                            onClick={() =>
                              navigate(`/productDetails/${item.id}`, {
                                state: { product: item },
                              })
                            }
                          />
                        </div>

                        {/* Content */}
                        <div className="p-3">
                          <div className="flex items-center gap-1 text-xs text-gray-500 mb-1">
                            <span className="text-green-600">⏱</span>
                            <span>{item.delivery_time} min</span>
                          </div>

                          <h3
                            className="text-sm font-semibold text-gray-900 leading-tight truncate cursor-pointer"
                            onClick={() =>
                              navigate(`/productDetails/${item.id}`, {
                                state: { product: item },
                              })
                            }
                          >
                            {item.name}
                          </h3>

                          <p className="text-xs text-gray-400 mt-1">
                            {item.weight}
                            {item.grocery_type}
                          </p>

                          <div className="flex justify-between items-center mt-3">
                            <span className="text-sm font-semibold text-gray-900">
                              ₹{item.price}
                            </span>

                            {user_id && cartItem ? (
                              <div
                                className={`flex items-center rounded-md text-white transition-colors ${
                                  isLoading
                                    ? "bg-gray-400 cursor-not-allowed"
                                    : "bg-green-600 hover:bg-green-700"
                                }`}
                              >
                                <button
                                  className="px-3 py-1.5 text-sm font-semibold transition-colors hover:bg-green-700 disabled:hover:bg-gray-400"
                                  onClick={() =>
                                    !isLoading && decrement(cartItem)
                                  }
                                  disabled={isLoading}
                                >
                                  -
                                </button>
                                <span className="px-3 py-1.5 text-sm font-semibold min-w-[32px] text-center">
                                  {isLoading ? (
                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto"></div>
                                  ) : (
                                    cartItem.qty || 1
                                  )}
                                </span>
                                <button
                                  className="px-3 py-1.5 text-sm font-semibold transition-colors hover:bg-green-700 disabled:hover:bg-gray-400"
                                  onClick={() => {
                                    !isLoading && increment(cartItem);
                                    // console.log("increment item", cartItem)
                                  }}
                                  disabled={isLoading}
                                >
                                  +
                                </button>
                              </div>
                            ) : (
                              <button
                                className={`px-4 py-1.5 rounded-md text-sm font-semibold border transition-colors min-w-[60px] ${
                                  isLoading
                                    ? "border-gray-300 text-gray-400 bg-gray-100 cursor-not-allowed"
                                    : "border-green-600 text-green-600 bg-white hover:bg-green-50"
                                }`}
                                onClick={() => {
                                  if (!isLoading) {
                                    const user_id =
                                      localStorage.getItem("userId");
                                    addToCart({ ...item, user_id });
                                    // console.log("add to cart item", { ...item });
                                    // console.log("add to cart user id", { user_id });
                                    // console.log("add to cart item", { ...item, user_id });
                                  }
                                }}
                                disabled={isLoading}
                              >
                                {isLoading ? (
                                  <div className="flex items-center justify-center">
                                    <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                                  </div>
                                ) : (
                                  "ADD"
                                )}
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  {/* Empty state */}
                  {products.length === 0 && !isFetching && (
                    <div className="col-span-full text-center text-gray-400 py-8">
                      No products available for this category
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}