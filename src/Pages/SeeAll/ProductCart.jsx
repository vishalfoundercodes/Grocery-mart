import { useState, useEffect } from "react";
import { useCart } from "../../Context/CartContext";
import { useGetCategoriesQuery } from "../../store/api";
import { useLocation } from "react-router-dom";
import { useGetCategoryWiseProductsQuery } from "../../store/api";
import { skipToken } from "@reduxjs/toolkit/query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

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
console.log("category wise ", useGetCategoryWiseProductsQuery());
  // Handle subcategory selection
  const handleSubcategoryClick = (subId) => {
    console.log("Selecting subcategory:", subId);
    setSelectedSub(subId);
    // Clear products immediately to show loading state
    setProducts([]);
  };

  useEffect(()=>{
    console.log("productData", productData)
  },[])
  return (
    <div className=" py-6 lg:px-2 lg2:px-4 2lg:px-8 max-w-screen-xl mx-auto h-[calc(100vh-80px)] font-okra">
      <div className="bg-white xsm:rounded-xl border border-gray-200 shadow-sm h-full flex flex-col overflow-hidden">
        {/* Header */}
        <h2 className="text-xsm font-semibold px-4 py-3 sticky top-0 z-10 bg-white border-b border-gray-200">
          Buy Products Online
        </h2>

        <div className="flex flex-1 overflow-hidden">
          {/* Subcategory list */}
          <div className="w-20 border-r border-gray-200 overflow-y-auto">
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
          <div className="flex-1 flex flex-col overflow-hidden bg-[#F5F5F8]">
            <div className="flex-1 overflow-y-auto px-1 py-2 ">
              {/* Loading state */}
              {isFetching ? (
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 lg2:grid-cols-5 gap-2">
                  {Array.from({ length: 10 }).map((_, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden animate-pulse"
                    >
                      {/* Image Skeleton */}
                      <div className="w-full h-28 md:h-32 bg-gray-200" />

                      {/* Content Skeleton */}
                      <div className="p-3 space-y-2">
                        <div className="h-3 w-1/2 bg-gray-300 rounded" />
                        <div className="h-4 w-3/4 bg-gray-300 rounded" />
                        <div className="h-3 w-1/4 bg-gray-300 rounded" />
                        <div className="flex justify-between items-center mt-3">
                          <div className="h-4 w-12 bg-gray-300 rounded" />
                          <div className="h-8 w-16 bg-gray-300 rounded" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : error ? (
                <div className="flex justify-center items-center h-32">
                  <div className="text-red-500">Failed to load products</div>
                </div>
              ) : (
                <div></div>
              )}{" "}
              {/* Error state */}
              {error && (
                <div className="flex justify-center items-center h-32">
                  <div className="text-red-500">Failed to load products</div>
                </div>
              )}
              {/* Products grid */}
              {!isFetching && !error && (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 3xl:grid-cols-8 gap-2">
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
                        className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow font-okra"
                      >
                        {/* Image */}
                        <div className="w-full flex justify-center items-center h-28 md:h-32 bg-white font-okra relative">
                          {/* SVG Discount Badge */}
                          {item.off && (
                            <svg
                              className="absolute top-0 left-3 w-[29px] h-[28px]"
                              viewBox="0 0 60 60"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M0 0 H60 V50 L45 42 L30 50 L15 42 L0 50 Z"
                                fill="#1976f2"
                              />
                              <text
                                x="50%"
                                y="20"
                                textAnchor="middle"
                                fill="white"
                                fontSize="19"
                                fontWeight="bold"
                              >
                                {item.off}%
                              </text>
                              <text
                                x="50%"
                                y="38"
                                textAnchor="middle"
                                fill="white"
                                fontSize="15"
                                fontWeight="bold"
                              >
                                OFF
                              </text>
                            </svg>
                          )}

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
                          <div className="flex items-center gap-1 text-ssm text-gray-500 mb-1">
                            <span className="text-green-600">⏱</span>
                            <span>{item.delivery_time} min</span>
                          </div>

                          <h3
                            className="text-xsm font-semibold text-gray-900 leading-tight truncate cursor-pointer"
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
                            <div className="flex flex-col">
                              <span className="text-[12px] font-semibold text-[#1F1F1F]">
                                ₹{item.price}
                              </span>
                              <p className="text-ssm text-gray-400 line-through">
                                ₹{item.mrp}
                              </p>
                            </div>

                            {user_id && cartItem ? (
                              <div
                                className={`flex items-center rounded-md text-white transition-colors ${
                                  isLoading
                                    ? "bg-gray-400 cursor-not-allowed"
                                    : "bg-green-600 hover:bg-green-700"
                                }`}
                              >
                                <button
                                  className="pl-2 py-1.5 text-sm font-semibold transition-colors  disabled:hover:bg-gray-400"
                                  onClick={() =>
                                    !isLoading && decrement(cartItem)
                                  }
                                  disabled={isLoading}
                                >
                                  {/* - */}
                                  <svg
                                    className="icon-minus tw-inline-flex tw-ml-2 tw-font-extrabold"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                  </svg>
                                </button>
                                <span className="px-1 py-1.5 text-sm font-semibold min-w-[32px] text-center">
                                  {isLoading ? (
                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto"></div>
                                  ) : (
                                    cartItem.qty || 1
                                  )}
                                </span>
                                <button
                                  className="pr-2 py-1.5 text-sm font-semibold transition-colors  disabled:hover:bg-gray-400"
                                  onClick={() => {
                                    if(item.quantity< cartItem.quantity){
                                      toast.warning("You are reaching the maximum limit.")
                                      return
                                    }else{
                                           !isLoading && increment(cartItem);
                                           console.log(
                                             "increment item",
                                             cartItem.quantity
                                           );
                                           console.log(
                                             "increment item",
                                             item.quantity
                                           );
                                    }
                                  }}
                                  disabled={isLoading}
                                >
                                  {/* + */}
                                  <svg
                                    className="icon-plus tw-inline-flex tw-ml-2 tw-font-extrabold"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                  </svg>
                                </button>
                              </div>
                            ) : (
                              <div className="relative inline-block">
                                <button
                                  className={`px-2 py-1 rounded-md text-xsm font-semibold border transition-colors min-w-[60px] ${
                                    isLoading
                                      ? "border-gray-300 text-gray-400 bg-gray-100 cursor-not-allowed"
                                      : "border-green-600 text-green-600 bg-white hover:bg-green-50"
                                  }`}
                                  onClick={() => {
                                    if (!isLoading) {
                                      const user_id =
                                        localStorage.getItem("userId");
                                      addToCart({ ...item, user_id });
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

                                {/* Positioned "2 options" text */}
                                {!isLoading && (
                                  <span className="absolute left-1/2 -translate-x-1/2 bottom-[-0.40rem] text-ssm text-oldsilver flex whitespace-nowrap bg-white px-1">
                                    2 options
                                  </span>
                                )}
                              </div>
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