import React from 'react'
import AllCategories from '../Pages/Categories/AllCategories'
import MilkCategories from '../Pages/Categories/MilkCategories'
import InstantOrderSection from '../Pages/Home/InstantOrderSection';
import Hero from '../Pages/Home/Hero';

export default function Home() {
  return (
    <div className=" p-2 xsm:px-16 hide-scrollbar">
      {/* I am home Page */}
      <Hero />
      <InstantOrderSection />
      <AllCategories />
      <MilkCategories />
    </div>
  );
}
