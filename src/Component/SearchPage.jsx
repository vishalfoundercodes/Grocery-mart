// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import CategorySection from "../Pages/Categories/Category"; // Adjust this import if needed

// const SearchPage = () => {
//   const [searchResults, setSearchResults] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const location = useLocation();
//   const searchQuery = new URLSearchParams(location.search).get("query"); // Get the query param from the URL

//   useEffect(() => {
//     const fetchSearchResults = async () => {
//       if (!searchQuery) return; // If no query, do nothing

//       setLoading(true);

//       try {
//         const response = await fetch(
//           `https://root.grocerya2z.com/api/products_search?name=${searchQuery}`
//         );
//         const data = await response.json();

//         if (data.success && Array.isArray(data.search)) {
//           const products = data.search.map((p) => ({
//             id: p.id,
//             title: p.name,
//             image: p.produt_image?.[0] || "",
//             price: p.price,
//             oldPrice: p.mrp,
//             weight: p.unit,
//           }));

//           setSearchResults(products);
//         } else {
//           setSearchResults([]);
//         }
//       } catch (err) {
//         console.error("Search error", err);
//         setSearchResults([]);
//       }

//       setLoading(false);
//     };

//     fetchSearchResults();
//   }, [searchQuery]);

//   return (
//     <div>
//       <h1>Search Results for "{searchQuery}"</h1>
//       {loading ? (
//         <div>Loading...</div>
//       ) : (
//         <CategorySection title="Products" products={searchResults} />
//       )}
//     </div>
//   );
// };

// export default SearchPage;

// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import CategorySection from "../Pages/Categories/Category";
// import { Package, Search } from "lucide-react";

// const SearchPage = () => {
//   const [searchResults, setSearchResults] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const location = useLocation();
//   const searchQuery = new URLSearchParams(location.search).get("query");

//   useEffect(() => {
//     const fetchSearchResults = async () => {
//       if (!searchQuery) {
//         setLoading(false);
//         return;
//       }

//       setLoading(true);

//       try {
//         const response = await fetch(
//           `https://root.grocerya2z.com/api/products_search?name=${searchQuery}`
//         );
//         const data = await response.json();

//         // ✅ PROBLEM 3 SOLVED: Products automatically show when API responds
//         if (data.success && Array.isArray(data.search)) {
//           const products = data.search.map((p) => ({
//             id: p.id,
//             title: p.name,
//             image: p.produt_image?.[0] || "",
//             price: p.price,
//             oldPrice: p.mrp,
//             weight: p.unit,
//           }));

//           setSearchResults(products);
//         } else {
//           setSearchResults([]);
//         }
//       } catch (err) {
//         console.error("Search error", err);
//         setSearchResults([]);
//       }

//       setLoading(false);
//     };

//     fetchSearchResults();
//   }, [searchQuery]);

//   // ✅ PROBLEM 2 SOLVED: Modern Loader Component - Fully Responsive
//   const ModernLoader = () => (
//     <div className="flex flex-col items-center justify-center min-h-[60vh] p-4">
//       {/* Animated Circle Loader */}
//       <div className="relative mb-6">
//         {/* Outer ring */}
//         <div className="w-16 h-16 sm:w-20 sm:h-20 border-4 border-gray-200 rounded-full"></div>

//         {/* Spinning gradient ring */}
//         <div className="absolute top-0 left-0 w-16 h-16 sm:w-20 sm:h-20 border-4 border-t-blue-500 border-r-blue-400 border-b-transparent border-l-transparent rounded-full animate-spin"></div>

//         {/* Inner pulsing circle */}
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//           <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-500 rounded-full animate-pulse"></div>
//         </div>
//       </div>

//       {/* Loading Text */}
//       <div className="text-center px-4">
//         <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
//           Searching for "{searchQuery}"
//         </h3>
//         <p className="text-xs sm:text-sm text-gray-500">
//           Please wait while we find the best products for you...
//         </p>
//       </div>

//       {/* Animated Dots */}
//       <div className="flex gap-2 mt-4">
//         <div
//           className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
//           style={{ animationDelay: "0ms" }}
//         ></div>
//         <div
//           className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
//           style={{ animationDelay: "150ms" }}
//         ></div>
//         <div
//           className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
//           style={{ animationDelay: "300ms" }}
//         ></div>
//       </div>

//       {/* Optional: Skeleton Cards for better UX */}
//       <div className="w-full max-w-6xl mt-8 px-4 hidden sm:block">
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//           {[1, 2, 3, 4].map((i) => (
//             <div key={i} className="animate-pulse">
//               <div className="bg-gray-200 h-40 rounded-lg mb-2"></div>
//               <div className="bg-gray-200 h-4 rounded w-3/4 mb-2"></div>
//               <div className="bg-gray-200 h-4 rounded w-1/2"></div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );

//   // ✅ PROBLEM 3 SOLVED: No Results Component - Fully Responsive
//   const NoResults = () => (
//     <div className="flex flex-col items-center justify-center min-h-[60vh] p-4 sm:p-6 lg:p-8">
//       <div className="max-w-md w-full text-center">
//         {/* Icon Container with Animation */}
//         <div className="mb-6 flex justify-center">
//           <div className="relative animate-bounce">
//             <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center shadow-lg">
//               <Package className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-gray-400" />
//             </div>
//             <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-red-100 rounded-full flex items-center justify-center shadow-md">
//               <Search className="w-3 h-3 sm:w-4 sm:h-4 text-red-500" />
//             </div>
//           </div>
//         </div>

//         {/* Main Message */}
//         <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2 sm:mb-3">
//           No Products Found
//         </h2>
//         <p className="text-sm sm:text-base text-gray-600 mb-1 sm:mb-2">
//           We couldn't find any products matching
//         </p>
//         <p className="text-base sm:text-lg font-semibold text-blue-600 mb-4 sm:mb-6 break-words px-2">
//           "{searchQuery}"
//         </p>

//         {/* Suggestions Box */}
//         <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 sm:p-5 md:p-6 text-left shadow-sm">
//           <h3 className="font-semibold text-gray-800 mb-3 text-sm sm:text-base flex items-center gap-2">
//             <span className="text-lg">💡</span>
//             Try these suggestions:
//           </h3>
//           <ul className="space-y-2 text-xs sm:text-sm md:text-base text-gray-600">
//             <li className="flex items-start gap-2 sm:gap-3">
//               <span className="text-blue-500 font-bold mt-1">•</span>
//               <span>Check your spelling</span>
//             </li>
//             <li className="flex items-start gap-2 sm:gap-3">
//               <span className="text-blue-500 font-bold mt-1">•</span>
//               <span>Try more general keywords</span>
//             </li>
//             <li className="flex items-start gap-2 sm:gap-3">
//               <span className="text-blue-500 font-bold mt-1">•</span>
//               <span>Try different keywords</span>
//             </li>
//             <li className="flex items-start gap-2 sm:gap-3">
//               <span className="text-blue-500 font-bold mt-1">•</span>
//               <span>Browse our categories instead</span>
//             </li>
//           </ul>
//         </div>

//         {/* Action Button */}
//         <button
//           onClick={() => (window.location.href = "/")}
//           className="mt-4 sm:mt-6 w-full sm:w-auto px-6 py-2.5 sm:py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-sm sm:text-base font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
//         >
//           Continue Shopping
//         </button>
//       </div>
//     </div>
//   );

//   return (
//     <div className="w-full">
//       {loading ? (
//         <ModernLoader />
//       ) : searchResults.length > 0 ? (
//         <div className="px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6">
//           <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
//             Search Results for "{searchQuery}"
//           </h1>
//           <CategorySection title="Products" products={searchResults} />
//         </div>
//       ) : (
//         <NoResults />
//       )}
//     </div>
//   );
// };

// export default SearchPage;


import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import CategorySection from "../Pages/Categories/Category";
import { Package, Search } from "lucide-react";

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);
   const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (!searchQuery) {
        setLoading(false);
        return;
      }

      setLoading(true);

      try {
        const response = await fetch(
          `https://root.grocerya2z.com/api/products_search?name=${searchQuery}`
        );
        
        const data = await response.json();

        // ✅ PROBLEM 3 SOLVED: Products automatically show when API responds
        if (data.success && Array.isArray(data.search)) {
          const products = data.search.map((p) => ({
            id: p.id,
            title: p.name,
            image: p.produt_image?.[0] || "",
            price: p.price,
            oldPrice: p.mrp,
            weight: p.unit,
          }));
        setSuggestions(data.search.slice(0, 5).map((item) => item.name));
          setSearchResults(products);
        } else {
          setSearchResults([]);
           setSuggestions([]);
        }
      } catch (err) {
        console.error("Search error", err);
        setSearchResults([]);
         setSuggestions([]);
      }

      setLoading(false);
    };

    fetchSearchResults();
  }, [searchQuery]);

  // ✅ PROBLEM 2 SOLVED: Skeleton Loader Like Image - Fully Responsive
  const ModernLoader = () => (
    <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 animate-pulse">
      {/* Header Skeleton Lines */}
      <div className="mb-6 space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
          <div className="h-6 bg-gray-200 rounded w-3/4 sm:w-2/3 md:w-1/2"></div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
          <div className="h-6 bg-gray-200 rounded w-2/3 sm:w-1/2 md:w-2/5"></div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
          <div className="h-6 bg-gray-200 rounded w-3/4 sm:w-3/5 md:w-1/2"></div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
          <div className="h-6 bg-gray-200 rounded w-1/2 sm:w-2/5 md:w-1/3"></div>
        </div>
      </div>

      {/* Product Grid Skeleton */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 mb-8">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
          <div
            key={i}
            className="bg-white rounded-lg overflow-hidden shadow-sm"
          >
            {/* Image Skeleton */}
            <div className="w-full aspect-square bg-gray-200"></div>

            {/* Content Skeleton */}
            <div className="p-2 sm:p-3 space-y-2">
              <div className="h-3 sm:h-4 bg-gray-200 rounded w-4/5"></div>
              <div className="h-3 sm:h-4 bg-gray-200 rounded w-3/5"></div>
              <div className="flex items-center justify-between mt-2 sm:mt-3">
                <div className="h-3 sm:h-4 bg-gray-200 rounded w-1/4"></div>
                <div className="h-3 sm:h-4 bg-gray-200 rounded w-1/3"></div>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <div className="h-3 bg-gray-200 rounded w-1/5"></div>
                <div className="h-3 bg-gray-200 rounded w-1/4"></div>
                <div className="h-3 bg-gray-200 rounded w-1/3"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Section Skeleton */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="bg-white rounded-lg overflow-hidden shadow-sm"
          >
            <div className="w-full h-24 sm:h-32 bg-gray-200"></div>
          </div>
        ))}
      </div>
    </div>
  );

  // ✅ PROBLEM 3 SOLVED: No Results Component - Fully Responsive
  const NoResults = () => (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-4 sm:p-6 lg:p-8">
      <div className="max-w-md w-full text-center">
        {/* Icon Container with Animation */}
        <div className="mb-6 flex justify-center">
          <div className="relative animate-bounce">
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center shadow-lg">
              <Package className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-gray-400" />
            </div>
            <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-red-100 rounded-full flex items-center justify-center shadow-md">
              <Search className="w-3 h-3 sm:w-4 sm:h-4 text-red-500" />
            </div>
          </div>
        </div>

        {/* Main Message */}
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2 sm:mb-3">
          No Products Found
        </h2>
        <p className="text-sm sm:text-base text-gray-600 mb-1 sm:mb-2">
          We couldn't find any products matching
        </p>
        <p className="text-base sm:text-lg font-semibold text-blue-600 mb-4 sm:mb-6 break-words px-2">
          "{searchQuery}"
        </p>

        {/* Suggestions Box */}
        {/* <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 sm:p-5 md:p-6 text-left shadow-sm">
          <h3 className="font-semibold text-gray-800 mb-3 text-sm sm:text-base flex items-center gap-2">
            <span className="text-lg">💡</span>
            Try these suggestions:
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm md:text-base text-gray-600">
            <li className="flex items-start gap-2 sm:gap-3">
              <span className="text-blue-500 font-bold mt-1">•</span>
              <span>Check your spelling</span>
            </li>
            <li className="flex items-start gap-2 sm:gap-3">
              <span className="text-blue-500 font-bold mt-1">•</span>
              <span>Try more general keywords</span>
            </li>
            <li className="flex items-start gap-2 sm:gap-3">
              <span className="text-blue-500 font-bold mt-1">•</span>
              <span>Try different keywords</span>
            </li>
            <li className="flex items-start gap-2 sm:gap-3">
              <span className="text-blue-500 font-bold mt-1">•</span>
              <span>Browse our categories instead</span>
            </li>
          </ul>
        </div> */}

        {/* Action Button */}
        <button
          onClick={() => (window.location.href = "/")}
          className="mt-4 sm:mt-6 w-full sm:w-auto px-6 py-2.5 sm:py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-sm sm:text-base font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );

  return (
    <div className="w-full">
      {loading ? (
        <ModernLoader />
      ) : searchResults.length > 0 ? (
        <div className="px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6">
          {/* <ul>
                         {suggestions.map((suggestion, idx) => (
                           <li
                             key={idx}
                             className="p-3 hover:bg-gray-100 cursor-pointer border-b last:border-b-0 text-sm"
                             onClick={() =>{ handleSuggestionClick(suggestion);console.log("button")}}
                           >
                             <div className="flex items-center gap-2">
                               <Search className="w-4 h-4 text-gray-400" />
                               <span>{suggestion}</span>
                             </div>
                           </li>
                         ))}
                       </ul> */}
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
            Search Results for "{searchQuery}"
          </h1>
          <CategorySection title="Search Results" products={searchResults} />
        </div>
      ) : (
        <NoResults />
      )}
    </div>
  );
};

export default SearchPage;
