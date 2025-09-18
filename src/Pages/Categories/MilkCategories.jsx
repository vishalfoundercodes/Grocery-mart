import OIP from "../../../src/assets/Categories/AllCategories/OIP.jpg";
import AmulButter from "../../../src/assets/Categories/Amul/AmulButter.avif";
import AmulMilk from "../../../src/assets/Categories/Amul/AmulMilk.avif";
import Cowmilk from "../../../src/assets/Categories/Amul/Cowmilk.avif";
import Dahi from "../../../src/assets/Categories/Amul/dahi.avif";
import milkMalaiBread from "../../../src/assets/Categories/Amul/milkMalaiBread.avif";
import mitiiDahi from "../../../src/assets/Categories/Amul/mitiiDahi.avif";
import TazaAmul from "../../../src/assets/Categories/Amul/TazaAmul.avif";
import whiteBread from "../../../src/assets/Categories/Amul/whiteBread.avif";
import CategorySection from "./Category";
import { useNavigate } from "react-router-dom";
import { useGetCategoriesQuery } from "../../store/api";



const dairyProducts = [
  {
    id: 1,
    name: "Amul Masti Cup Curd",
    weight: "200 g",
    price: 24,
    image: Dahi,
  },
  {
    id: 2,
    name: "BranO Plus Brown Bread",
    weight: "270 g",
    price: 35,
    image: OIP,
  },
  {
    id: 3,
    name: "English Oven Premium White Bread",
    weight: "350 g",
    price: 30,
    image: AmulButter,
  },
  {
    id: 4,
    name: "English Oven Premium White Bread",
    weight: "350 g",
    price: 30,
    image: Cowmilk,
  },
  {
    id: 5,
    name: "English Oven Premium White Bread",
    weight: "350 g",
    price: 30,
    image: AmulMilk,
  },
  {
    id: 6,
    name: "English Oven Premium White Bread",
    weight: "350 g",
    price: 30,
    image: milkMalaiBread,
  },
  {
    id: 7,
    name: "English Oven Premium White Bread",
    weight: "350 g",
    price: 30,
    image: mitiiDahi,
  },
  {
    id: 8,
    name: "English Oven Premium White Bread",
    weight: "350 g",
    price: 30,
    image: TazaAmul,
  },
];

const snacksProducts = [
  {
    id: 9,
    name: "Lays Chips Classic Salted",
    weight: "52 g",
    price: 20,
    image: OIP,
  },
  {
    id: 10,
    name: "Kurkure Masala Munch",
    weight: "60 g",
    price: 25,
    oldPrice: 30,
    image: whiteBread,
  },
  {
    id: 11,
    name: "Bingo Mad Angles",
    weight: "66 g",
    price: 28,
    image: mitiiDahi,
  },
  {
    id: 12,
    name: "Bingo Mad Angles",
    weight: "66 g",
    price: 28,
    image: TazaAmul,
  },
  {
    id: 13,
    name: "Bingo Mad Angles",
    weight: "66 g",
    price: 28,
    image: milkMalaiBread,
  },
  {
    id: 14,
    name: "Bingo Mad Angles",
    weight: "66 g",
    price: 28,
    image: Cowmilk,
  },
];

export default function MilkCategories() {
    const { data, isLoading, isError } = useGetCategoriesQuery();
  const navigate=useNavigate()
    if (isLoading) return <p className="text-center">Loading categories...</p>;
    if (isError)
      return (
        <p className="text-center text-red-500">Failed to load categories.</p>
      );
       const categories = data?.categories || [];
      //  console.log("category data:",categories)
  return (
    <div className="z-0">
      {/* <CategorySection
        title="Dairy, Bread & Eggs"
        products={dairyProducts}
        // onSeeAll={() => console.log("See all Dairy")}
        // onSeeAll={(title) => navigate(`/category/${encodeURIComponent(title)}`)}
        // onSeeAll={(title) => navigate(`/seeall`)}
        onSeeAll={(title) => navigate(`/seeall/${encodeURIComponent(title)}`)}
      />

      <CategorySection
        title="Snacks & Chips"
        products={snacksProducts}
        // onSeeAll={() => console.log("See all Snacks")}
        // onSeeAll={(title) => navigate(`/category/${encodeURIComponent(title)}`)}
        onSeeAll={(title) => navigate(`/seeall`)}
      /> */}

      {categories.map((cat) => (
        <CategorySection
          // key={cat.id}
          title={cat.title}
          products={cat.subcategory_first || []}
          onSeeAll={(title) => navigate(`/seeall/${encodeURIComponent(title)}`)}
        />
      ))}

      {/* Add more categories the same way */}
    </div>
  );
}
