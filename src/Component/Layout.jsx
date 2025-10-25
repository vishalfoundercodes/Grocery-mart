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

// // Layout.jsx
// import React, { useState,useEffect } from "react";
// import Header from "./Header";
// import Footer from "./Footer";
// import { Outlet } from "react-router-dom";
// import CategorySection from "../Pages/Categories/Category";
// import { useCart } from '../Context/CartContext';

// export default function Layout() {
//   const [searchResults, setSearchResults] = useState([]);
//   const [searchValue, setSearchValue] = useState("");

//   const handleSearchResults = (results, term) => {
//     setSearchResults(results);
//     setSearchValue(term);
//   };

//     const {fetchCart}=useCart();
//     const userId = localStorage.getItem("userId");
//     useEffect(()=>{
//       if(userId){
//         fetchCart(userId, true);
//       } 
//     },[])
//     useEffect(() => {
//       if (userId) {
//         fetchCart(userId, true);
//       }
//     }, [userId]);

//   return (
//     <div>
//       {/* Pass setter to Header */}
//       <Header onSearchResults={handleSearchResults} />

//       <main className="min-h-[60vh]">
//         {searchResults.length > 0 ? (
//           <CategorySection
//             title={`Search Results for "${searchValue}"`} // ✅ show entered value
//             products={searchResults}
//           />
//         ) : (
//           <Outlet />
//         )}
//       </main>

//       <Footer />
//     </div>
//   );
// }

// import React, { useState, useEffect } from "react";
// import Header from "./Header";
// import Footer from "./Footer";
// import { Outlet } from "react-router-dom";
// import CategorySection from "../Pages/Categories/Category";
// import { useCart } from "../Context/CartContext";

// export default function Layout() {
//   const [searchResults, setSearchResults] = useState([]);
//   const [searchValue, setSearchValue] = useState("");
//   const [loading, setLoading] = useState(false); // To manage the loading state
//   const [focus, setFocus] = useState(false); // To manage the focus state

//   const handleSearchResults = (results, term) => {
//     setSearchResults(results);
//     setSearchValue(term);
//     setLoading(false); // Stop loading when results are fetched
//   };

//   const { fetchCart } = useCart();
//   const userId = localStorage.getItem("userId");

//   useEffect(() => {
//     if (userId) {
//       fetchCart(userId, true);
//     }
//   }, [userId]);

//   useEffect(() => {
//     if (searchValue) {
//       setLoading(true); // Start loading when the user starts typing
//       // Here, you can add the API call to fetch search results based on the search term
//       // For now, let's simulate loading
//       setTimeout(() => {
//         // Simulate an API call and update search results
//         handleSearchResults(
//           [
//             // Example results for "mil"
//             {
//               id: 1,
//               name: "Amul Gold Full Cream Milk",
//               price: "₹35",
//               image: "/path/to/image",
//             },
//             {
//               id: 2,
//               name: "Amul Taaza Toned Milk",
//               price: "₹29",
//               image: "/path/to/image",
//             },
//             // Add more items...
//           ],
//           searchValue
//         );
//       }, 1000); // Simulate delay of 1 second
//     }
//   }, [searchValue]);

//   return (
//     <div>
//       {/* Pass setter to Header */}
//       <Header onSearchResults={handleSearchResults} />

//       <main className="min-h-[60vh]">
       
//         {/* {searchValue && !loading ? (
//           <div>
         
//             <CategorySection
//               title={`Showing results for "${searchValue}"`}
//               products={searchResults}
//             />
//           </div>
//         ) 
//         : ( */}
         
//           <Outlet />
//         {/* // )} */}

//         {/* Loading spinner when typing */}
//         {/* {loading && searchValue && (
//           <div className="loading-spinner">
            
//             <p>Loading...</p>
//           </div>
//         )} */}
//       </main>

//       <Footer />
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { useCart } from "../Context/CartContext";

export default function Layout() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const handleSearchResults = (results, term) => {
    setSearchResults(results);
    setSearchValue(term);
  };

  const { fetchCart } = useCart();
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    if (userId) {
      fetchCart(userId, true);
    }
  }, [userId]);

  return (
    <div>
      <Header onSearchResults={handleSearchResults} />
      <main className="min-h-[60vh]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

