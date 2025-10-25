// /* eslint-disable react/prop-types */
// import React from "react";

// import { useGetCategoriesQuery } from "../../store/api";
// import { useNavigate } from "react-router-dom";
// import CategorySection from "./Category";

// export default function AllCategories() {
//       const { data, isLoading, isError } = useGetCategoriesQuery();
//     const navigate=useNavigate()
//       if (isLoading) return <p className="text-center">Loading categories...</p>;
//       if (isError)
//         return (
//           <p className="text-center text-red-500">Failed to load categories.</p>
//         );
//          const categories1 = data?.categories || [];
//          const categories2 = categories1[0].subcategory_first || [];
//          const categories = categories2 || [];
//           const handleCategoryClick = (title, subcategoryFirst) => {
//                     console.log(
//                       "category title:",
//                       title,
//                       "Subcategory second data:",
//                       // subcategoryFirst.flatMap((sub) => sub.subcategory_second)
//                       subcategoryFirst
//                     );
//            navigate(`/seeall/${encodeURIComponent(title)}`, {
//              state: { subcategoryFirst: subcategoryFirst },
//            });
// ;
//           };

//   return (
//     <div className="xsm:px-16 xsm:py-6 ">
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-10 gap-4">
//         {categories.map((cat, index) => (
//           <div
//             // key={index}
//             className="flex flex-col items-center cursor-pointer"
//             onClick={() =>
//               handleCategoryClick(cat.title, cat.subcategory_second)
//             }
//             // onClick={() => {
//             //   console.log("cat", cat.subcategory_second);
//             // }}
//           >
//             <div className="w-full bg-white rounded-xl shadow hover:shadow-lg transition">
//               <img
//                 src={cat.image?.trim()} // Using .trim() in case of '\n' at the end
//                 alt={cat.name}
//                 // onClick={() => onSeeAll(cat.subcategory_second)}
//                 className="w-full h-36 sm:h-32 md:h-36 object-cover rounded-t-xl"
//               />
//             </div>
//             <p className="text-sm font-medium text-center mt-2">{cat.title}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

/* eslint-disable react/prop-types */
import React from "react";
import { useGetCategoriesHomeQuery,  } from "../../store/api";
import { useNavigate } from "react-router-dom";

export default function AllCategories() {
  const { data, isLoading, isError } = useGetCategoriesHomeQuery();
  const navigate = useNavigate();

  // const handleCategoryClick = (title, subcategoryFirst) => {
  //   navigate(`/seeall/${encodeURIComponent(title)}`, {
  //     state: { subcategoryFirst },
  //   });
  // };
const handleCategoryClick = (category) => {
  const { title, subcategory_first } = category;
  navigate(`/seeall/${encodeURIComponent(title)}`, {
    state: { subcategoryFirst: subcategory_first },
  });
};
  // Skeleton loader component
  const SkeletonCard = () => (
    <div className="flex flex-col items-center animate-pulse">
      <div className="w-full bg-gray-200 rounded-xl h-36 sm:h-32 md:h-36" />
      <div className="w-3/4 h-4 bg-gray-300 mt-2 rounded"></div>
    </div>
  );

  if (isLoading) {
    return (
      <div className="xsm:px-16 xsm:py-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-10 gap-4">
          {Array.from({ length: 10 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <p className="text-center text-red-500">Failed to load categories.</p>
    );
  }
  console.log("Allcategory data:", data?.categories_section);

  const categories1 = data?.categories_section || [];
  const categories2 = categories1.categories[0]?.subcategory_first || [];
  // Assuming data comes from the API and categories are nested under `categories_section`
  const categories = data?.categories_section?.categories || [];

  return (
    <div className="xsm:px-16 xsm:py-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-10 gap-4">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="flex flex-col items-center cursor-pointer"
            onClick={() =>
              handleCategoryClick(cat)
            }
          >
            <div className="w-full bg-white rounded-xl shadow hover:shadow-lg transition">
              <img
                src={cat.image?.trim()}
                alt={cat.name}
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
