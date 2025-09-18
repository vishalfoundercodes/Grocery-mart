// // import React from 'react'
// // import Header from './Header'
// // import Footer from './Footer'
// // export default function Layout() {
// //   return (
// //     <div>
// //       <Header/>
// //       <Footer/>
// //     </div>
// //   )
// // }

// import React from "react";
// import Header from "./Header";
// import Footer from "./Footer";
// import { Outlet } from "react-router-dom";

// export default function Layout() {
//   return (
//     <div>
//       <Header />

//       {/* This is where nested pages will render */}
//       <main>
//         <Outlet />
//       </main>

//       <Footer />
//     </div>
//   );
// }

// import React from "react";
// import Header from "./Header";
// import Footer from "./Footer";
// import { Outlet } from "react-router-dom";

// export default function Layout() {
//   return (
//     <div>
//       <Header />

//       {/* This is where nested pages will render */}
//       <main>
//         <Outlet />
//       </main>

//       <Footer />
//     </div>
//   );
// }

// Layout.jsx
import React, { useState,useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import CategorySection from "../Pages/Categories/Category";
import { useCart } from '../Context/CartContext';

export default function Layout() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const handleSearchResults = (results, term) => {
    setSearchResults(results);
    setSearchValue(term);
  };

    const {fetchCart}=useCart();
    const userId = localStorage.getItem("userId");
    useEffect(()=>{
      if(userId){
        fetchCart(userId, true);
      } 
    },[])
    useEffect(() => {
      if (userId) {
        fetchCart(userId, true);
      }
    }, [userId]);

  return (
    <div>
      {/* Pass setter to Header */}
      <Header onSearchResults={handleSearchResults} />

      <main className="min-h-[60vh]">
        {searchResults.length > 0 ? (
          <CategorySection
            title={`Search Results for "${searchValue}"`} // ✅ show entered value
            products={searchResults}
          />
        ) : (
          <Outlet />
        )}
      </main>

      <Footer />
    </div>
  );
}

