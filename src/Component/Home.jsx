// import React,{useEffect} from 'react'
// import AllCategories from '../Pages/Categories/AllCategories'
// import MilkCategories from '../Pages/Categories/MilkCategories'
// import InstantOrderSection from '../Pages/Home/InstantOrderSection';
// import Hero from '../Pages/Home/Hero';
// import { useCart } from '../Context/CartContext';

// export default function Home() {
//   const {fetchCart}=useCart();
//   useEffect(()=>{
//     const userId = localStorage.getItem("userId");
//     if(userId){
//   fetchCart(userId, true);
//     }
//   },[])
//   return (
//     <div className=" p-2 xsm:px-16 hide-scrollbar">
//       {/* I am home Page */}
//       <Hero />
//       <InstantOrderSection />
//       <AllCategories />
//       <MilkCategories />
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import AllCategories from "../Pages/Categories/AllCategories";
import MilkCategories from "../Pages/Categories/MilkCategories";
import InstantOrderSection from "../Pages/Home/InstantOrderSection";
import Hero from "../Pages/Home/Hero";
import { useCart } from "../Context/CartContext";
import CategorySection from "../Pages/Categories/Category"; // To display search results

export default function Home({ searchResults, searchValue }) {
  const [isSearching, setIsSearching] = useState(false); // New state to check search status
  const { fetchCart } = useCart();

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      fetchCart(userId, true);
    }
  }, []);

  // Trigger search UI change when search term is entered
  useEffect(() => {
    if (searchValue) {
      setIsSearching(true); // Set to true when there's a search term
    } else {
      setIsSearching(false); // Reset when there's no search term
    }
  }, [searchValue]);

  return (
    <div className="p-2 xsm:px-16 hide-scrollbar">
      {isSearching ? (
        <div>
          {/* If searching, display the search results */}
          <CategorySection
            title={`Showing results for "${searchValue}"`}
            products={searchResults}
          />
        </div>
      ) : (
        <div>
          {/* Otherwise, display the normal Home Page UI */}
          <Hero />
          <InstantOrderSection />
          <AllCategories />
          <MilkCategories />
        </div>
      )}
    </div>
  );
}
