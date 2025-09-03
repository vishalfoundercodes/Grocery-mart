import React from 'react'

/* Footer.jsx */
export default function FooterLinks() {
  const usefulLinks = [
    "Blog",
    "Privacy",
    "Terms",
    "FAQs",
    "Security",
    "Contact",
    "Partner",
    "Franchise",
    "Seller",
    "Warehouse",
    "Deliver",
    "Resources",
  ];

  const categories = [
    "Recipes",
    "Bistro",
    "Vegetables & Fruits",
    "Cold Drinks & Juices",
    "Bakery & Biscuits",
    "Dry Fruits, Masala & Oil",
    "Paan Corner",
    "Pharma & Wellness",
    "Ice Creams & Frozen Desserts",
    "Beauty & Cosmetics",
    "Stationery Needs",
    "Print Store",
    "Dairy & Breakfast",
    "Instant & Frozen Food",
    "Sweet Tooth",
    "Sauces & Spreads",
    "Organic & Premium",
    "Cleaning Essentials",
    "Personal Care",
    "Fashion & Accessories",
    "Books",
    "E-Gift Cards",
    "Munchies",
    // "Tea, Coffee & Health Drinks",
    // "Atta, Rice & Dal",
    // "Chicken, Meat & Fish",
    // "Baby Care",
    // "Home & Office",
    // "Pet Care",
    // "Electronics & Electricals",
    // "Toys & Games",
    // "Rakhi Gifts",
  ];

  return (
    <footer className="bg-white text-gray-700 py-10 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Useful Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Useful Links</h3>
          <ul className="grid grid-rows-6 grid-flow-col gap-2 text-sm">
            {usefulLinks.map((link, i) => (
              <li key={i} className="whitespace-nowrap">
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        <div className="sm:col-span-2 lg:col-span-3">
          <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
            Categories{" "}
            <span className="text-green-600 text-sm cursor-pointer">
              see all
            </span>
          </h3>
          <ul className="grid grid-rows-12 grid-flow-col gap-2 text-xsm sm:text-sm">
            {categories.map((link, i) => (
              <li key={i} className="whitespace-nowrap">
                {link}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}



