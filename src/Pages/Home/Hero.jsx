import React from "react";
 // Adjust the path as necessary
import babycareWEB from "../../assets/Home/babycare-WEB.avif"; // Adjust the path as necessary
import pharmacyWEB from "../../assets/Home/pharmacy-WEB.avif"; // Adjust the path as necessary
import Group from "../../assets/Home/Group-33704.jpg";
export default function InstantOrderSection() {
  const items = [
    {
      img: Group, // save your screenshot slice here
      alt: "Pharmacy at your doorstep",
    },
    // {
    //   img: babycareWEB, // save your screenshot slice here
    //   alt: "Pet Care supplies",
    // },
    // {
    //   img: pharmacyWEB, // save your screenshot slice here
    //   alt: "Baby care essentials",
    // },
  ];

  return (
    <section className="w-full xsm:py-6 ">
      <div className="mx-auto max-w-7xl px-1 sm:px-1 lg:px-6">
        <div className="grid gap-4 grid-cols-1 lg:grid-cols-1">
          {items.map((card, idx) => (
            <div key={idx} className="rounded-xl overflow-hidden shadow">
              <img
                src={card.img}
                alt={card.alt}
                className="w-full h-full object-cover "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

