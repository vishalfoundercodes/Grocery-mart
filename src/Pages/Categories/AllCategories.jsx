/* eslint-disable react/prop-types */
import React from "react";
import OIP from "../../../src/assets/Categories/AllCategories/OIP.jpg"; // Adjust the path as necessary
import paancornerweb from "../../../src/assets/Categories/AllCategories/paan-corner_web.avif"; // Adjust the path as necessary
import Slice1 from "../../../src/assets/Categories/AllCategories/Slice-2_10.avif"; // Adjust the path as necessary
import Slice2 from "../../../src/assets/Categories/AllCategories/Slice-3_9.avif"; // Adjust the path as necessary
import Slice3 from "../../../src/assets/Categories/AllCategories/Slice-4_9.avif"; // Adjust the path as necessary
import Slice4 from "../../../src/assets/Categories/AllCategories/Slice-5_4.avif"; // Adjust the path as necessary
import Slice5 from "../../../src/assets/Categories/AllCategories/Slice-6_5.avif"; // Adjust the path as necessary
import Slice6 from "../../../src/assets/Categories/AllCategories/Slice-7_3.avif"; // Adjust the path as necessary
import Slice7 from "../../../src/assets/Categories/AllCategories/Slice-8_4.avif"; // Adjust the path as necessary
import Slice8 from "../../../src/assets/Categories/AllCategories/Slice-9_3.avif"; // Adjust the path as necessary
import Slice9 from "../../../src/assets/Categories/AllCategories/Slice-10.avif"; // Adjust the path as necessary
import { useGetCategoriesQuery } from "../../store/api";
import { useNavigate } from "react-router-dom";
import CategorySection from "./Category";
// const categories = [
//   { name: "Paan Corner", img: paancornerweb },
//   { name: "Dairy, Bread & Eggs", img: Slice1 },
//   { name: "Fruits & Vegetables", img: Slice2 },
//   { name: "Cold Drinks & Juices", img: Slice3 },
//   { name: "Snacks & Munchies", img: Slice4 },
//   {
//     name: "Breakfast & Instant Food",
//     img: Slice5,
//   },
//   { name: "Sweet Tooth", img: Slice6 },
//   { name: "Bakery & Biscuits", img: Slice7 },
//   {
//     name: "Tea, Coffee & Health Drink",
//     img: Slice8,
//   },
//   { name: "Atta, Rice & Dal", img: Slice9 },
//   { name: "Masala, Oil & More", img: Slice9 },
//   { name: "Sauces & Spreads", img: Slice8 },
//   { name: "Chicken, Meat & Fish", img: Slice7 },
//   {
//     name: "Organic & Healthy Living",
//     img: Slice6,
//   },
//   { name: "Baby Care", img: Slice5 },
//   { name: "Pharma & Wellness", img: Slice4 },
//   { name: "Cleaning Essentials", img: Slice3 },
//   { name: "Home & Office", img: Slice2 },
//   { name: "Personal Care", img: Slice1 },
//   { name: "Pet Care", img: paancornerweb },
// ];

export default function AllCategories() {
      const { data, isLoading, isError } = useGetCategoriesQuery();
    const navigate=useNavigate()
      if (isLoading) return <p className="text-center">Loading categories...</p>;
      if (isError)
        return (
          <p className="text-center text-red-500">Failed to load categories.</p>
        );
         const categories1 = data?.categories || [];
         const categories2 = categories1[0].subcategory_first || [];
         const categories = categories2 || [];
        //  console.log("category data:", categories2);
          // const handleCategoryClick = (title,subcategoryFirst) => {
            //  console.log("category title:",title,
            //    "Subcategory second data:",
            //    subcategoryFirst.flatMap((sub) => sub.subcategory_second)
            //  );
          //       <CategorySection
          //         // key={cat.id}
          //         title={title}
          //         // products={cat.subcategory_first || []}
          //         onSeeAll={(title) =>
          //           navigate(`/seeall/${encodeURIComponent(title)}`)
          //         }
          //       />;
          //    // Optionally navigate
          //    // navigate('/subcategory', { state: subcategoryFirst });
          //  };
          const handleCategoryClick = (title, subcategoryFirst) => {
                    console.log(
                      "category title:",
                      title,
                      "Subcategory second data:",
                      // subcategoryFirst.flatMap((sub) => sub.subcategory_second)
                      subcategoryFirst
                    );
           navigate(`/seeall/${encodeURIComponent(title)}`, {
             state: { subcategoryFirst: subcategoryFirst },
           });
;
          };

  return (
    <div className="xsm:px-16 xsm:py-6 ">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-10 gap-4">
        {categories.map((cat, index) => (
          <div
            // key={index}
            className="flex flex-col items-center cursor-pointer"
            onClick={() =>
              handleCategoryClick(cat.title, cat.subcategory_second)
            }
            // onClick={() => {
            //   console.log("cat", cat.subcategory_second);
            // }}
          >
            <div className="w-full bg-white rounded-xl shadow hover:shadow-lg transition">
              <img
                src={cat.image?.trim()} // Using .trim() in case of '\n' at the end
                alt={cat.name}
                // onClick={() => onSeeAll(cat.subcategory_second)}
                className="w-full h-36 sm:h-32 md:h-36 object-cover rounded-t-xl"
              />
            </div>
            <p className="text-sm font-medium text-center mt-2">{cat.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
