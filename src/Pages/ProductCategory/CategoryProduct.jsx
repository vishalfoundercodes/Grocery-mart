import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import CategorySection from "../Categories/Category";
import InstantOrderSection from "../Home/InstantOrderSection";
import categoriesBySection from "./CategoryList"; // updated structure

export default function CategoryWithProducts() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedCategory = queryParams.get("category") || "pharmacy"; // default

  const [activeCategory, setActiveCategory] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const sectionCategories = categoriesBySection[selectedCategory] || [];
    setCategories(sectionCategories);
    setActiveCategory(sectionCategories[0]); // default to first one
  }, [selectedCategory]);

  if (!activeCategory) return null; // or loading state

  return (
    <div className="flex max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-6">
      {/* Left Sidebar */}
      <div className="w-1/4 pr-4 border-r">
        <ul className="space-y-2">
          {categories.map((cat) => (
            <li
            //  key={cat.id}
            >
              <button
                className={`w-full text-left p-2 rounded-md text-xsm sm:text-sm font-medium ${
                  cat.id === activeCategory.id
                    ? "bg-green-100 text-green-700"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Product Section */}
      <div className="w-3/4 pl-4">
        <InstantOrderSection />

        <CategorySection
          title={activeCategory.name}
          products={activeCategory.products}
          onSeeAll={() => alert(`Viewing all in ${activeCategory.name}`)}
        />
      </div>
    </div>
  );
}
