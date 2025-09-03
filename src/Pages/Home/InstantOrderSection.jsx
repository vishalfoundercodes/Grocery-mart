import React from "react";
import PetCareWEB from "../../assets/Home/Pet-Care_WEB.avif"; // Adjust the path as necessary
import babycareWEB from "../../assets/Home/babycare-WEB.avif"; // Adjust the path as necessary
import pharmacyWEB from "../../assets/Home/pharmacy-WEB.avif"; // Adjust the path as necessary
import { useNavigate } from "react-router-dom";
export default function InstantOrderSection() {
  const navigate = useNavigate()
const items = [
  {
    img: PetCareWEB,
    alt: "Pet Care supplies",
    category: "pet-care",
  },
  {
    img: babycareWEB,
    alt: "Baby care essentials",
    category: "baby-care",
  },
  {
    img: pharmacyWEB,
    alt: "Pharmacy at your doorstep",
    category: "pharmacy",
  },
];


  return (
    <section className="w-full py-6">
      <div className="mx-auto max-w-7xl px-1 sm:px-1 lg:px-6">
        <div className="grid gap-4 grid-cols-2 lg:grid-cols-3">
          {items.map((card, idx) => (
            <div key={idx} className="rounded-xl overflow-hidden shadow">
              <img
                src={card.img}
                alt={card.alt}
                className="w-full h-full object-cover"
                // onClick={() => navigate("/categoryProduct")}
                onClick={() =>
                  navigate(`/categoryProduct?category=${card.category}`)
                }
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

