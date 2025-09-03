/* eslint-disable react/prop-types */
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCart } from "../../Context/CartContext";
function CategorySection({ title, products, onSeeAll }) {
  const scrollRef = useRef(null);
//  const { addToCart } = useCart();
 const { cart, addToCart, increment, decrement } = useCart();


//   const scroll = (direction) => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({
//         left: direction === "left" ? -300 : 300,
//         behavior: "smooth",
//       });
//     }
//   };

const scroll = (direction) => {
  if (scrollRef.current) {
    // Take the first child width (card width + margin)
    const itemWidth = scrollRef.current.firstChild?.offsetWidth ;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -itemWidth : itemWidth,
      behavior: "smooth",
    });
  }
};


return (
  <div className="w-full px-4 md:px-6 mb-8 ">
    {/* Header */}
    <div className="flex justify-between items-center mb-3">
      <h2 className="text-lg md:text-xl font-bold">{title}</h2>
      {/* <button onClick={onSeeAll} className="text-green-600 font-medium text-sm">
        See all
      </button> */}
      {/* // Inside CategorySection */}
      <button
        onClick={() => onSeeAll(title)} // pass the category title
        className="text-green-600 font-medium text-sm"
      >
        See all
      </button>
    </div>

    {/* Scrollable container */}
    <div className="relative ">
      {/* Left scroll button */}
      <button
        onClick={() => scroll("left")}
        aria-label="scroll left"
        className="absolute -left-2 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10"
      >
        <ChevronLeft />
      </button>

      {/* Products */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto hide-scrollbar scroll-smooth py-3 px-6 scrollbar-hide "
      >
        {products.map((item) => {
          const cartItem = cart.items.find((ci) => ci.id === item.id);
          return (
            <div
              key={item.id}
              className="min-w-[180px] md:min-w-[200px] bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-300 z-[1]"
            >
              {/* product image */}
              <div className="w-full flex justify-center items-center h-28 md:h-32 bg-white">
                <img
                  src={item.image}
                  alt={item.name}
                  className="max-h-full object-contain"
                />
              </div>

              {/* content */}
              <div className="p-3">
                {/* ETA badge */}
                <div className="flex items-center text-[11px] text-gray-600 mb-2">
                  <span className="mr-1">⏱</span>
                  <span className="font-medium">{item.time || "12 MINS"}</span>
                </div>

                {/* name & weight */}
                <h3 className="text-sm font-semibold text-gray-900 truncate">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-xs mt-1">{item.weight||"500g"}</p>

                {/* price & add button */}
                <div className="flex justify-between items-center mt-3">
                  <div>
                    <span className="font-semibold text-sm">₹{item.price||30}</span>
                    {item.oldPrice && (
                      <span className="ml-1 text-gray-300 line-through text-xs">
                        ₹{item.oldPrice || 50}
                      </span>
                    )}
                  </div>

                  {cartItem ? (
                    <div className="flex items-center border border-green-600 rounded-md text-white bg-green-600">
                      <button
                        className="px-2 py-1 "
                        onClick={() => decrement(cartItem.id)}
                      >
                        -
                      </button>
                      <span className="px-3 text-sm font-semibold">
                        {cartItem.qty}
                      </span>
                      <button
                        className="px-2 py-1 "
                        onClick={() => increment(cartItem.id)}
                      >
                        +
                      </button>
                    </div>
                  ) : (
                    <button
                      className="px-4 py-1.5 rounded-md text-sm font-medium border border-green-600 text-green-600 bg-white hover:bg-green-50"
                      onClick={() => {addToCart(item),console.log("item",item)}}
                    >
                      ADD
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}

        {/* No product placeholder */}
        {products.length === 0 && (
          <div className="min-w-[180px] flex items-center justify-center text-gray-400">
            No products
          </div>
        )}
      </div>

      {/* Right scroll button */}
      <button
        onClick={() => scroll("right")}
        aria-label="scroll right"
        className="absolute -right-2 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-[10]"
      >
        <ChevronRight />
      </button>
    </div>
  </div>
);

}

export default CategorySection;
