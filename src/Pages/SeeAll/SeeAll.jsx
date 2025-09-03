// import React from 'react'

// export default function SeeAll() {
//   return (
//     <div>
//       Se AALL
//     </div>
//   )
// }

// import { useParams } from "react-router-dom";

// export default function SeeAll() {
//   const { categoryTitle } = useParams();
//   const decodedTitle = decodeURIComponent(categoryTitle);

//   return <h1>Showing products for: {decodedTitle}</h1>;
// };

import { useParams } from "react-router-dom";
import ProductCard from "./ProductCart"; 

function SeeAll() {
  const { categoryTitle } = useParams();
  const decodedCategoryName = decodeURIComponent(categoryTitle);

//   if (!category) return <div>Category not found.</div>;

  return (
    <ProductCard
      item={decodedCategoryName}
    />
  );
}

export default SeeAll;
