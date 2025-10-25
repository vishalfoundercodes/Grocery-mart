// import React, { useState, useEffect } from "react";
// import { Search } from "lucide-react";

// export default function SearchBar() {
//   const placeholders = [
//     'Search "milk"',
//     'Search "bread"',
//     'Search "cake"',
//     'Search "fruits"',
//   ];

//   const [index, setIndex] = useState(0);
//   const [animating, setAnimating] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setAnimating(true);
//       setTimeout(() => {
//         setIndex((prev) => (prev + 1) % placeholders.length);
//       }, 700); // wait for animation to complete
//       setTimeout(() => {
//         setAnimating(false);
//       }, 750); // slight delay to prevent snap back
//     }, 3000); // change every 3 seconds

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className=" bg-gradient-to-br from-green-50 to-yellow-50 flex items-center justify-center p-4">
//       <div className="w-full max-w-2xl">
//         <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
//           Perfect Rolling Placeholder Animation
//         </h2>

//         <div className="relative flex items-center w-full bg-white shadow-lg rounded-lg px-4 py-3">
//           <Search className="text-gray-500 w-5 h-5 mr-3 flex-shrink-0" />
//           <div className="flex-1 relative h-5 overflow-hidden">
//             <input
//               type="text"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full bg-transparent text-sm focus:outline-none absolute inset-0 z-10"
//               style={{ color: searchTerm ? "#000" : "transparent" }}
//             />

//             {/* Animated Placeholder Rolling Effect */}
//             {searchTerm === "" && (
//               <div
//                 className="absolute inset-0 text-gray-400 pointer-events-none transition-transform duration-700 ease-in-out"
//                 style={{
//                   transform: animating ? "translateY(-100%)" : "translateY(0%)",
//                 }}
//               >
//                 {/* Current placeholder */}
//                 <div className="h-5 flex items-center">
//                   {placeholders[index]}
//                 </div>

//                 {/* Next placeholder positioned below */}
//                 <div className="h-5 flex items-center">
//                   {placeholders[(index + 1) % placeholders.length]}
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>

//         <p className="text-center mt-6 text-gray-600 text-sm">
//           🎯 Rolling effect: Old text slides up → New text rolls in from below
//         </p>
//         <p className="text-center mt-2 text-gray-500 text-xs">
//           No overlap • Smooth rolling • One text exits, next enters seamlessly
//         </p>
//       </div>
//     </div>
//   );
// }

// -----------------------------------------------
// import React, { useState, useEffect } from "react";
// import { Search } from "lucide-react";

// export default function SearchBar() {
//   const placeholders = [
//     'Search "milk"',
//     'Search "bread"',
//     'Search "cake"',
//     'Search "fruits"',
//   ];

//   const [index, setIndex] = useState(0);
//   const [animating, setAnimating] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setAnimating(true);
//       setTimeout(() => {
//         setIndex((prev) => (prev + 1) % placeholders.length);
//       }, 1000); // wait for old placeholder animation to complete
//       setTimeout(() => {
//         setAnimating(false);
//       }, 1500); // time to let the new placeholder settle
//     }, 3000); // change every 3 seconds

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="bg-gradient-to-br from-green-50 to-yellow-50 flex items-center justify-center p-0">
//       <div className="w-full">
//         <div className="relative flex items-center w-full bg-gray-100 border border-lightGray rounded-lg px-3 py-2">
//           <Search className="text-gray-500 w-5 h-5 mr-3 flex-shrink-0" />
//           <div className="flex-1 relative h-5 overflow-hidden">
//             <input
//               type="text"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full bg-transparent text-sm focus:outline-none absolute inset-0 z-10"
//               style={{ color: searchTerm ? "#000" : "transparent" }}
//             />

//             {/* Animated Placeholder Transition */}
//             {searchTerm === "" && (
//               <div className="absolute inset-0 text-gray-400 pointer-events-none">
//                 {/* Current placeholder */}
//                 <div
//                   className={`h-5 flex items-center ${
//                     animating
//                       ? "opacity-0 translate-y-[-100%]"
//                       : "opacity-100 translate-y-0"
//                   }`}
//                   style={{
//                     transition: "transform 1000ms ease, opacity 500ms ease-out",
//                   }}
//                 >
//                   {placeholders[index]}
//                 </div>

//                 {/* New placeholder */}
//                 <div
//                   className={`h-5 flex items-center ${
//                     animating
//                       ? "opacity-100 translate-y-0"
//                       : "opacity-0 translate-y-[100%]"
//                   }`}
//                   style={{
//                     transition: "transform 1000ms ease, opacity 500ms ease-in",
//                   }}
//                 >
//                   {placeholders[(index + 1) % placeholders.length]}
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React, { useState, useEffect } from "react";
// import { Search } from "lucide-react";

// export default function SearchBar({ onSearchResults }) {
//   const placeholders = [
//     'Search "milk"',
//     'Search "bread"',
//     'Search "cake"',
//     'Search "fruits"',
//   ];

//   const [index, setIndex] = useState(0);
//   const [animating, setAnimating] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [placeholderVisible, setPlaceholderVisible] = useState(true);

//   useEffect(() => {
//     if (searchTerm === "") {
//       const interval = setInterval(() => {
//         setAnimating(true);
//         setTimeout(() => {
//           setIndex((prev) => (prev + 1) % placeholders.length);
//         }, 1000); // wait for old placeholder animation to complete
//         setTimeout(() => {
//           setAnimating(false);
//         }, 1500); // time to let the new placeholder settle
//       }, 3000); // change every 3 seconds

//       return () => clearInterval(interval);
//     } else {
//       setAnimating(false); // Reset animation if there's a search term
//     }
//   }, [searchTerm]);

//     useEffect(() => {
//       const fetchProducts = async () => {
//         if (!searchTerm.trim()) {
//           onSearchResults([]); // clear if empty
//           return;
//         }
//         try {
//           const res = await fetch(
//             `https://root.grocerya2z.com/api/products_search?name=${searchTerm}`
//           );
//           const data = await res.json();
  
//           if (data.success && Array.isArray(data.search)) {
//             const mapped = data.search.map((p) => ({ 
//               id: p.id,
//               title: p.name,
//               image: p.produt_image?.[0] || "",
//               price: p.price,
//               oldPrice: p.mrp,
//               weight: p.unit,
//               time: "12 MINS",
//             }));
//             onSearchResults(mapped, searchTerm);
//           } else {
//             onSearchResults([]);
//           }
//         } catch (err) {
//           console.error("Search error", err);
//           onSearchResults([]);
//         }
//       };
  
//       const delay = setTimeout(fetchProducts, 500);
//       return () => clearTimeout(delay);
//     }, [searchTerm, onSearchResults]);

//   return (
//     <div className="bg-gradient-to-br from-green-50 to-yellow-50 flex items-center justify-center p-0">
//       <div className="w-full">
//         <div className="relative flex items-center w-full bg-gray-100 border border-lightGray rounded-lg px-3 py-2">
//           <Search className="text-gray-500 w-5 h-5 mr-3 flex-shrink-0" />
//           <div className="flex-1 relative h-5 overflow-hidden">
//             <input
//               type="text"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               onFocus={() => setPlaceholderVisible(false)} // Hide placeholder when focused
//               onBlur={() => setPlaceholderVisible(searchTerm === "")} // Show placeholder when not focused
//               className="w-full bg-transparent text-sm focus:outline-none absolute inset-0 z-10"
//               style={{ color: placeholderVisible ? "" : "#000" }}
//             />

//             {/* Animated Placeholder Transition */}
//             {placeholderVisible && searchTerm === "" && (
//               <div className="absolute inset-0 text-gray-400 pointer-events-none">
//                 {/* Current placeholder */}
//                 <div
//                   className={`h-5 flex items-center absolute transition-all duration-1000 ease-out ${
//                     animating
//                       ? "opacity-0 translate-y-[-100%]"
//                       : "opacity-100 translate-y-0"
//                   }`}
//                   style={{
//                     transition: "transform 1000ms ease, opacity 500ms ease-out",
//                   }}
//                 >
//                   {placeholders[index]}
//                 </div>

//                 {/* New placeholder */}
//                 <div
//                   className={`h-5 flex items-center absolute transition-all duration-1000 ease-in ${
//                     animating
//                       ? "opacity-100 translate-y-0"
//                       : "opacity-0 translate-y-[100%]"
//                   }`}
//                   style={{
//                     transition: "transform 1000ms ease, opacity 500ms ease-in",
//                   }}
//                 >
//                   {placeholders[(index + 1) % placeholders.length]}
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React, { useState, useEffect } from "react";
// import { Search } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// export default function SearchBar({ onSearchResults }) {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [loading, setLoading] = useState(false); // For the loading spinner
//   const [suggestions, setSuggestions] = useState([]); // For the suggestions
//   const navigate=useNavigate()

//   // Placeholder text cycling effect (not needed for your use case)
//   const placeholders = [
//     'Search "milk"',
//     'Search "bread"',
//     'Search "cake"',
//     'Search "fruits"',
//   ];

//   const fetchProducts = async (term) => {
//     if (!term.trim()) {
//       setSuggestions([]); // Clear suggestions if empty
//       onSearchResults([]); // Clear previous search results
//       return;
//     }

//     setLoading(true); // Start the loader

//     try {
//       const response = await fetch(
//         `https://root.grocerya2z.com/api/products_search?name=${term}`
//       );
//       const data = await response.json();

//       // Handle success
//       if (data.success && Array.isArray(data.search)) {
//         const products = data.search.map((p) => ({
//           id: p.id,
//           title: p.name,
//           image: p.produt_image?.[0] || "",
//           price: p.price,
//           oldPrice: p.mrp,
//           weight: p.unit,
//         }));

//         // Show product results
//         onSearchResults(products, term);

//         // Suggest products or categories based on search term (optional)
//         setSuggestions(
//           data.search.map((item) => item.name) // Example, show product names as suggestions
//         );
//       } else {
//         onSearchResults([]); // No results
//         setSuggestions([]); // No suggestions
//       }
//     } catch (err) {
//       console.error("Search error", err);
//       setSuggestions([]); // Clear suggestions if there's an error
//       onSearchResults([]); // Clear results
//     }

//     setLoading(false); // Stop loading
//   };

//   // Handle input change and trigger API call with debounce
//   useEffect(() => {
//     if (searchTerm.trim()) {
//       const delay = setTimeout(() => {
//         fetchProducts(searchTerm); // Fetch products when typing stops
//       }, 500); // Delay for debounce effect

//       return () => clearTimeout(delay); // Cleanup the timeout if searchTerm changes quickly
//     } else {
//       setSuggestions([]); // Clear suggestions when searchTerm is empty
//       onSearchResults([]); // Clear results when empty
//     }
//   }, [searchTerm, onSearchResults]);

//   const handleFormSubmit = (e) => {
//     e.preventDefault(); // Prevent form submission that causes page reload
//   };

//   return (
//     <form onSubmit={handleFormSubmit}>
//       <div className="relative flex items-center w-full bg-gray-100 rounded-lg px-3 py-2">
//         <Search className="text-gray-500 w-5 h-5 mr-2" />

//         <input
//           type="text"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           // onClick={() => navigate("/search")}
//           onFocus={() => navigate("/search")}
//           className="w-full bg-transparent text-sm focus:outline-none"
//           placeholder="Search 'milk'"
//         />

//         {loading && searchTerm && (
//           <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">
//             <span>Loading...</span> {/* You can replace this with a spinner */}
//           </div>
//         )}

//         {/* Display Suggestions */}
//         {searchTerm && !loading && suggestions.length > 0 && (
//           <div className="absolute top-full left-0 right-0 bg-white shadow-md mt-2 rounded-lg">
//             <ul>
//               {suggestions.map((suggestion, idx) => (
//                 <li
//                   key={idx}
//                   className="p-2 hover:bg-gray-100 cursor-pointer"
//                   onClick={() => setSearchTerm(suggestion)} // Select suggestion
//                 >
//                   {suggestion}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//     </form>
//   );
// }

// import React, { useState, useEffect } from "react";
// import { Search } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// export default function SearchBar({ onSearchResults }) {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [suggestions, setSuggestions] = useState([]);
//   const navigate = useNavigate();

//   // Fetch products based on search term
//   const fetchProducts = async (term) => {
//     if (!term.trim()) {
//       setSuggestions([]);
//       onSearchResults([]);
//       return;
//     }

//     setLoading(true); // Start the loader

//     try {
//       const response = await fetch(
//         `https://root.grocerya2z.com/api/products_search?name=${term}`
//       );
//       const data = await response.json();

//       // Handle success
//       if (data.success && Array.isArray(data.search)) {
//         const products = data.search.map((p) => ({
//           id: p.id,
//           title: p.name,
//           image: p.produt_image?.[0] || "",
//           price: p.price,
//           oldPrice: p.mrp,
//           weight: p.unit,
//         }));

//         // Show product results
//         onSearchResults(products, term);

//         // Suggest products or categories based on search term (optional)
//         setSuggestions(
//           data.search.map((item) => item.name) // Example, show product names as suggestions
//         );
//       } else {
//         onSearchResults([]);
//         setSuggestions([]);
//       }
//     } catch (err) {
//       console.error("Search error", err);
//       setSuggestions([]);
//       onSearchResults([]);
//     }

//     setLoading(false);
//   };

//   // Debounce input changes
//   useEffect(() => {
//     if (searchTerm.trim()) {
//       const delay = setTimeout(() => {
//         fetchProducts(searchTerm);
//       }, 500); // Debounce the API call by 500ms

//       return () => clearTimeout(delay); // Cleanup timeout if searchTerm changes quickly
//     } else {
//       setSuggestions([]);
//       onSearchResults([]);
//     }
//   }, [searchTerm, onSearchResults]);

//   // Handle form submission and trigger navigation
//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     navigate(`/search?query=${searchTerm}`); // Navigate to the search page with the query in URL
//   };

//   return (
//     <form onSubmit={handleSearchSubmit}>
//       <div className="relative flex items-center w-full bg-gray-100 rounded-lg px-3 py-2">
//         <Search className="text-gray-500 w-5 h-5 mr-2" />
//         <input
//           type="text"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)} // Update search term on change
//           className="w-full bg-transparent text-sm focus:outline-none"
//           placeholder="Search 'milk'"
//         />

//         {loading && searchTerm && (
//           <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">
//             <span>Loading...</span> {/* You can replace this with a spinner */}
//           </div>
//         )}

//         {/* Display Suggestions */}
//         {searchTerm && !loading && suggestions.length > 0 && (
//           <div className="absolute top-full left-0 right-0 bg-white shadow-md mt-2 rounded-lg">
//             <ul>
//               {suggestions.map((suggestion, idx) => (
//                 <li
//                   key={idx}
//                   className="p-2 hover:bg-gray-100 cursor-pointer"
//                   onClick={() => setSearchTerm(suggestion)} // Select suggestion
//                 >
//                   {suggestion}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//     </form>
//   );
// }

// import React, { useState, useEffect } from "react";
// import { Search } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// export default function SearchBar({ onSearchResults }) {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [suggestions, setSuggestions] = useState([]);
//   const [focus, setFocus] = useState(false); // Track focus state for the input field
//   const navigate = useNavigate();

//   // Fetch products based on search term
//   const fetchProducts = async (term) => {
//     if (!term.trim()) {
//       setSuggestions([]);
//       onSearchResults([]);
//       return;
//     }

//     setLoading(true); // Start the loader

//     try {
//       const response = await fetch(
//         `https://root.grocerya2z.com/api/products_search?name=${term}`
//       );
//       const data = await response.json();

//       // Handle success
//       if (data.success && Array.isArray(data.search)) {
//         const products = data.search.map((p) => ({
//           id: p.id,
//           title: p.name,
//           image: p.produt_image?.[0] || "",
//           price: p.price,
//           oldPrice: p.mrp,
//           weight: p.unit,
//         }));

//         // Show product results
//         onSearchResults(products, term);

//         // Suggest products or categories based on search term
//         setSuggestions(data.search.map((item) => item.name)); // Example: show product names as suggestions
//       } else {
//         onSearchResults([]);
//         setSuggestions([]);
//       }
//     } catch (err) {
//       console.error("Search error", err);
//       setSuggestions([]);
//       onSearchResults([]);
//     }

//     setLoading(false); // Stop loading
//   };

//   // Debounce input changes to avoid sending requests on every keystroke
//   useEffect(() => {
//     if (searchTerm.trim()) {
//       const delay = setTimeout(() => {
//         fetchProducts(searchTerm); // Fetch products when typing stops
//       }, 500); // Debounce the API call by 500ms

//       return () => clearTimeout(delay); // Cleanup timeout if searchTerm changes quickly
//     } else {
//       setSuggestions([]); // Clear suggestions if searchTerm is empty
//       onSearchResults([]);
//     }
//   }, [searchTerm, onSearchResults]);

//   // Handle form submission and trigger navigation
// const handleSearchSubmit = (e) => {
//   e.preventDefault();
//   navigate(
//     {
//       pathname: "/search",
//       search: `?query=${searchTerm}`,
//     },
//     { replace: false }
//   ); // false means it adds to history
// };

//   return (
//     <form onSubmit={handleSearchSubmit}>
//       <div className="relative flex items-center w-full bg-gray-100 rounded-lg px-3 py-2">
//         <Search className="text-gray-500 w-5 h-5 mr-2" />
//         <input
//           type="text"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)} // Update search term on change
//           className="w-full bg-transparent text-sm focus:outline-none"
//           placeholder="Search 'milk'"
//           onFocus={() => setFocus(true)} // Set focus to true when the input is focused
//           onBlur={() => setFocus(false)} // Set focus to false when the input loses focus
//         />

//         {loading && searchTerm && (
//           <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">
//             <span>Loading...</span> {/* You can replace this with a spinner */}
//           </div>
//         )}

//         {/* Display Suggestions */}
//         {searchTerm && !loading && suggestions.length > 0 && focus && (
//           <div className="absolute top-full left-0 right-0 bg-white shadow-md mt-2 rounded-lg">
//             <ul>
//               {suggestions.map((suggestion, idx) => (
//                 <li
//                   key={idx}
//                   className="p-2 hover:bg-gray-100 cursor-pointer"
//                   onClick={() => setSearchTerm(suggestion)} // Select suggestion
//                 >
//                   {suggestion}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//     </form>
//   );
// }

// import React, { useState, useEffect, useRef } from "react";
// import { Search } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// export default function SearchBar({ onSearchResults }) {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [suggestions, setSuggestions] = useState([]);
//   const [focus, setFocus] = useState(false);
//   const navigate = useNavigate();
//   const debounceTimeout = useRef(null);

//   // Fetch products based on search term
//   const fetchProducts = async (term) => {
//     if (!term.trim()) {
//       setSuggestions([]);
//       onSearchResults([]);
//       return;
//     }

//     setLoading(true);

//     try {
//       const response = await fetch(
//         `https://root.grocerya2z.com/api/products_search?name=${term}`
//       );
//       const data = await response.json();

//       if (data.success && Array.isArray(data.search)) {
//         const products = data.search.map((p) => ({
//           id: p.id,
//           title: p.name,
//           image: p.produt_image?.[0] || "",
//           price: p.price,
//           oldPrice: p.mrp,
//           weight: p.unit,
//         }));

//         onSearchResults(products, term);
//         setSuggestions(data.search.slice(0, 5).map((item) => item.name));
//       } else {
//         onSearchResults([]);
//         setSuggestions([]);
//       }
//     } catch (err) {
//       console.error("Search error", err);
//       setSuggestions([]);
//       onSearchResults([]);
//     }

//     setLoading(false);
//   };

//   // Debounce input changes
//   useEffect(() => {
//     if (searchTerm.trim()) {
//       if (debounceTimeout.current) {
//         clearTimeout(debounceTimeout.current);
//       }

//       debounceTimeout.current = setTimeout(() => {
//         fetchProducts(searchTerm);
//         // Navigate to search page automatically
//         navigate(`/search?query=${searchTerm}`);
//       }, 500);
//     } else {
//       setSuggestions([]);
//       onSearchResults([]);
//     }

//     return () => {
//       if (debounceTimeout.current) {
//         clearTimeout(debounceTimeout.current);
//       }
//     };
//   }, [searchTerm]);

//   // Handle search icon click
//   const handleSearchClick = () => {
//     if (searchTerm.trim()) {
//       navigate(`/search?query=${searchTerm}`);
//     }
//   };

//   // Handle suggestion click
//   const handleSuggestionClick = (suggestion) => {
//     setSearchTerm(suggestion);
//     setFocus(false);
//     navigate(`/search?query=${suggestion}`);
//   };

//   return (
//     <div className="relative w-full">
//       <div className="relative flex items-center w-full bg-gray-100 rounded-lg px-3 py-2">
//         <Search
//           className="text-gray-500 w-5 h-5 mr-2 cursor-pointer"
//           onClick={handleSearchClick}
//         />
//         <input
//           type="text"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="w-full bg-transparent text-sm focus:outline-none"
//           placeholder="Search 'milk'"
//           onFocus={() => setFocus(true)}
//           onBlur={() => setTimeout(() => setFocus(false), 200)}
//         />

//         {loading && searchTerm && (
//           <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
//             <div className="w-4 h-4 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
//           </div>
//         )}
//       </div>

//       {/* Display Suggestions */}
//       {searchTerm && !loading && suggestions.length > 0 && focus && (
//         <div className="absolute top-full left-0 right-0 bg-white shadow-lg mt-1 rounded-lg z-50 max-h-60 overflow-y-auto">
//           <ul>
//             {suggestions.map((suggestion, idx) => (
//               <li
//                 key={idx}
//                 className="p-3 hover:bg-gray-100 cursor-pointer border-b last:border-b-0 text-sm"
//                 onClick={() => handleSuggestionClick(suggestion)}
//               >
//                 <div className="flex items-center gap-2">
//                   <Search className="w-4 h-4 text-gray-400" />
//                   <span>{suggestion}</span>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }

// import React, { useState, useEffect, useRef } from "react";
// import { Search } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// export default function SearchBar({ onSearchResults }) {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [suggestions, setSuggestions] = useState([]);
//   const [focus, setFocus] = useState(false);
//   const navigate = useNavigate();
//   const debounceTimeout = useRef(null);

//   // Fetch products based on search term
//   const fetchProducts = async (term) => {
//     if (!term.trim()) {
//       setSuggestions([]);
//       onSearchResults([]);
//       return;
//     }

//     setLoading(true);

//     try {
//       const response = await fetch(
//         `https://root.grocerya2z.com/api/products_search?name=${term}`
//       );
//       const data = await response.json();

//       if (data.success && Array.isArray(data.search)) {
//         const products = data.search.map((p) => ({
//           id: p.id,
//           title: p.name,
//           image: p.produt_image?.[0] || "",
//           price: p.price,
//           oldPrice: p.mrp,
//           weight: p.unit,
//         }));

//         onSearchResults(products, term);
//         setSuggestions(data.search.slice(0, 5).map((item) => item.name));
//       } else {
//         onSearchResults([]);
//         setSuggestions([]);
//       }
//     } catch (err) {
//       console.error("Search error", err);
//       setSuggestions([]);
//       onSearchResults([]);
//     }

//     setLoading(false);
//   };

//   // Debounce input changes and auto-navigate
//   useEffect(() => {
//     if (searchTerm.trim()) {
//       if (debounceTimeout.current) {
//         clearTimeout(debounceTimeout.current);
//       }

//       debounceTimeout.current = setTimeout(() => {
//         fetchProducts(searchTerm);
//         // ✅ PROBLEM 1 SOLVED: Auto-navigate to search page
//         navigate(`/search?query=${searchTerm}`, { replace: true });
//       }, 500);
//     } else {
//       setSuggestions([]);
//       onSearchResults([]);
//     }

//     return () => {
//       if (debounceTimeout.current) {
//         clearTimeout(debounceTimeout.current);
//       }
//     };
//   }, [searchTerm]);

//   // Handle search icon click - instant navigation
//   const handleSearchClick = () => {
//     if (searchTerm.trim()) {
//       navigate(`/search?query=${searchTerm}`);
//     }
//   };

//   // Handle suggestion click
//   const handleSuggestionClick = (suggestion) => {
//     setSearchTerm(suggestion);
//     setFocus(false);
//     navigate(`/search?query=${suggestion}`);
//   };

//   return (
//     <div className="relative w-full">
//       <div className="relative flex items-center w-full bg-gray-100 rounded-lg px-3 py-2">
//         <Search
//           className="text-gray-500 w-5 h-5 mr-2 cursor-pointer hover:text-gray-700"
//           onClick={handleSearchClick}
//         />
//         <input
//           type="text"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="w-full bg-transparent text-sm focus:outline-none"
//           placeholder="Search 'milk'"
//           onFocus={() => setFocus(true)}
//           onBlur={() => setTimeout(() => setFocus(false), 200)}
//         />

//         {loading && searchTerm && (
//           <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
//             <div className="w-4 h-4 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
//           </div>
//         )}
//       </div>

//       {/* ✅ Suggestions Dropdown */}
//       {searchTerm && !loading && suggestions.length > 0 && focus && (
//         <div className="absolute top-full left-0 right-0 bg-white shadow-lg mt-1 rounded-lg z-50 max-h-60 overflow-y-auto">
//           <ul>
//             {suggestions.map((suggestion, idx) => (
//               <li
//                 key={idx}
//                 className="p-3 hover:bg-gray-100 cursor-pointer border-b last:border-b-0 text-sm"
//                 onClick={() => handleSuggestionClick(suggestion)}
//               >
//                 <div className="flex items-center gap-2">
//                   <Search className="w-4 h-4 text-gray-400" />
//                   <span>{suggestion}</span>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }

import React, { useState, useEffect, useRef } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function SearchBar({ onSearchResults }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [focus, setFocus] = useState(false);
  const navigate = useNavigate();
  const debounceTimeout = useRef(null);

  // Fetch products based on search term
  const fetchProducts = async (term) => {
    if (!term.trim()) {
      setSuggestions([]);
      onSearchResults([]);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `https://root.grocerya2z.com/api/products_search?name=${term}`
      );
      const data = await response.json();

      if (data.success && Array.isArray(data.search)) {
        const products = data.search.map((p) => ({
          id: p.id,
          title: p.name,
          image: p.produt_image?.[0] || "",
          price: p.price,
          oldPrice: p.mrp,
          weight: p.unit,
        }));

        onSearchResults(products, term);
        setSuggestions(data.search.slice(0, 5).map((item) => item.name));
      } else {
        onSearchResults([]);
        setSuggestions([]);
      }
    } catch (err) {
      console.error("Search error", err);
      setSuggestions([]);
      onSearchResults([]);
    }

    setLoading(false);
  };

  // Debounce input changes and auto-navigate
  useEffect(() => {
    if (searchTerm.trim()) {
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }

      debounceTimeout.current = setTimeout(() => {
        fetchProducts(searchTerm);
        // ✅ PROBLEM 1 SOLVED: Auto-navigate to search page
        navigate(`/search?query=${searchTerm}`, { replace: true });
      }, 500);
    } else {
      setSuggestions([]);
      onSearchResults([]);
    }

    return () => {
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }
    };
  }, [searchTerm]);

  // Handle search icon click - instant navigation
  const handleSearchClick = () => {
    if (searchTerm.trim()) {
      navigate(`/search?query=${searchTerm}`);
    }
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setFocus(false);
    navigate(`/search?query=${suggestion}`);
  };

  return (
    <div className="relative w-full">
      <div className="relative flex items-center w-full bg-gray-100 rounded-lg px-3 py-2 border border-lightGray ">
        <Search
          className="text-gray-500 w-5 h-5 mr-2 cursor-pointer hover:text-gray-700"
          onClick={handleSearchClick}
        />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-transparent text-sm focus:outline-none"
          placeholder="Search 'milk'"
          onFocus={() => setFocus(true)}
          onBlur={() => setTimeout(() => setFocus(false), 200)}
        />

        {loading && searchTerm && (
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
            <div className="w-4 h-4 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
          </div>
        )}
      </div>

      {/* ✅ Suggestions Dropdown */}
      {searchTerm && !loading && suggestions.length > 0 && focus && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg mt-1 rounded-lg z-50 max-h-60 overflow-y-auto">
          <ul>
            {suggestions.map((suggestion, idx) => (
              <li
                key={idx}
                className="p-3 hover:bg-gray-100 cursor-pointer border-b last:border-b-0 text-sm"
                onClick={() => {
                  handleSuggestionClick(suggestion);
                  console.log("button");
                }}
              >
                <div className="flex items-center gap-2">
                  <Search className="w-4 h-4 text-gray-400" />
                  <span>{suggestion}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}


