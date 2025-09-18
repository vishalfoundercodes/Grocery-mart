import {useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import minutedelivery from "../../assets/Product/10_minute_delivery.avif";
import BestPricesOffers from "../../assets/Product/Best_Prices_Offers.avif";
import WideAssortment from "../../assets/Product/Wide_Assortment.avif";
import { useCart } from "../../Context/CartContext";
import { toast } from "react-toastify";

export default function ProductDetails() {
     const { cart, addToCart, increment, decrement } = useCart();
  const { id } = useParams();
  const location = useLocation();
  const product = location.state?.product;
 const userId = localStorage.getItem("userId");

  if (!product) return <p className="text-center mt-10">Loading...</p>;
   const [selectedImage, setSelectedImage] = useState(product.image);
  useEffect(() => {
    console.log("product details:", product);
    console.log("cart details:", cart);
  }, []);
  const [isExpanded, setIsExpanded] = useState(false);
const [showMore, setShowMore] = useState(false);
  // Limit text preview to first 120 characters (adjust as needed)
  const previewText = product.description?.slice(0, 0);
  // const cartItem = cart.items.find((ci) => ci.id === product.id);
 const cartItem = cart.items.find(
   (ci) => String(ci.product_id ?? ci.id) === String(product.id)
 );

  return (
    <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-6">
      {/* Left Side: Images */}
      <div>
        <img
          src={selectedImage}
          alt={product.name}
          className="w-full h-80 object-contain border rounded-lg mb-4 transition-transform duration-500 ease-in-out hover:scale-150 cursor-zoom-in"
        />

        {/* Thumbnail carousel */}
        <div className="flex gap-3 overflow-x-auto">
          {product.produt_image.map((img, idx) => (
            <img
              // key={idx}
              src={img}
              alt="thumb"
              onClick={() => setSelectedImage(img)}
              className="w-20 h-20 object-contain border rounded-lg cursor-pointer hover:border-green-500"
            />
          ))}
        </div>

        {/* Product Details */}
        <div className="mt-6 bg-gray-50 p-4 rounded-md">
          <h3 className="font-semibold text-lg mb-2">Product Details</h3>
          <p className="text-sm text-gray-700">{product.about_product}</p>
          {/* <p className="text-sm text-gray-700">
            {isExpanded ? product.description : previewText}
            {product.description?.length > 0 && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="ml-2 text-green-600 font-medium hover:underline"
              >
                {isExpanded ? "View less details" : "View more details"}
              </button>
            )}
          </p> */}
          {/* Short preview */}

          {/* Full details */}
          {showMore && (
            <div className="text-sm text-gray-700 space-y-3">
              <p>
                <strong>Unit</strong>
                <br />
                {product.unit}
              </p>
              <p>
                <strong>Description</strong>
                <br />
                {product.description}
              </p>
              {/* <p>
                <strong>Health Benefits</strong>
                <br />
                {product.health_benefits}
              </p> */}
              {/* <p>
                <strong>Shelf Life</strong>
                <br />
                {product.shelf_life}
              </p> */}
              <p>
                <strong>Return Policy</strong>
                <br />
                {product.return_policy}
              </p>
              {/* <p>
                <strong>Country of Origin</strong>
                <br />
                {product.country_of_origin}
              </p>
              <p>
                <strong>Customer Care</strong>
                <br />
                {product.customer_care}
              </p> */}
              {/* <p>
                <strong>Disclaimer</strong>
                <br />
                {product.disclaimer}
              </p> */}
              <p>
                <strong>Seller</strong>
                <br />
                {product.seller_name}
              </p>
              <p>
                <strong>Seller FSSAI</strong>
                <br />
                {product.seller_lisence_no}
              </p>
            </div>
          )}
          {/* Toggle Button */}
          <button
            onClick={() => setShowMore(!showMore)}
            className="mt-3 text-green-600 font-medium hover:underline flex items-center"
          >
            {showMore ? "View less details ▲" : "View more details ▼"}
          </button>
        </div>
      </div>

      {/* Right Side: Info */}
      <div>
        <h1 className="text-xl font-semibold text-gray-800 mb-2">
          {product.name}
        </h1>
        <div className="flex items-center gap-1 text-xs text-gray-500 mb-1">
          <span className="text-green-600">⏱</span>
          <span>{product.delivery_time} min</span>
        </div>
        {/* <p className="text-sm text-gray-600 mb-1">by {product.brand}</p> */}
        <p className="text-sm text-gray-600 mb-1">
          {product.unit} {product.grocery_type}
        </p>

        <p className="text-gray-700 font-medium mb-1">{product.pack}</p>
        <div className=" flex justify-between">
          <div className="flex flex-col">
            <div className="flex items-center xs:gap-2">
              {" "}
              <p className="text-2xl font-bold text-gray-800 mb-1">
                ₹{product.price}
              </p>
              <p className=" text-[9px] xs:text-xs  text-gray-500 mb-0 line-through">
                MRP ₹{product.mrp}
              </p>
              <div className="text-xs text-white bg-blue-600 uppercase px-2 rounded-[5px]">
                <p>{product.off}% off</p>
              </div>
            </div>
            <p className="text-xs text-gray-500 mb-6">
              (Inclusive of all taxes)
            </p>
          </div>

          {/* Add to cart button */}
          {userId && cartItem ? (
            // ✅ Only show -/+ UI if user logged in & item exists in cart
            <div className="flex items-center border border-green-600 rounded-md text-white bg-green-600 h-10">
              <button
                className="px-2 py-1 hover:bg-green-700 transition-colors"
                onClick={() => decrement(cartItem)}
              >
                -
              </button>
              <span className="px-3 text-sm font-semibold">
                {cartItem.qty || 1}
              </span>
              <button
                className="px-2 py-1 hover:bg-green-700 transition-colors"
                onClick={() => increment(cartItem)}
              >
                +
              </button>
            </div>
          ) : (
            <button
              className="px-4 py-1.5 rounded-md h-10 text-sm font-semibold border border-green-600 text-white bg-green-600 hover:bg-green-50 transition-colors"
              onClick={() => {
                const user_id = localStorage.getItem("userId");
                if (!user_id) {
                  toast.error("Please login to add items to cart"); // 👈 show toast
                  return;
                }
                else{
                  addToCart({ ...product, user_id, product_id: product.id }); // 👈 ensure product_id sent
                }
                
              }}
            >
              Add to cart
            </button>
          )}
        </div>

        {/* Why Shop Section */}
        <div className="mt-10 space-y-4">
          <h3 className="font-semibold text-lg">Why shop from us?</h3>
          <div className="flex items-start gap-3">
            <img src={minutedelivery} alt="fast" className="w-8 h-8" />
            <p className="text-sm">
              <span className="font-medium">Superfast Delivery</span> <br />
              Get your order delivered to your doorstep at the earliest.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <img src={BestPricesOffers} alt="price" className="w-8 h-8" />
            <p className="text-sm">
              <span className="font-medium">Best Prices & Offers</span> <br />
              Direct deals from the manufacturers.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <img src={WideAssortment} alt="wide" className="w-8 h-8" />
            <p className="text-sm">
              <span className="font-medium">Wide Assortment</span> <br />
              Choose from 5000+ products across all categories.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


