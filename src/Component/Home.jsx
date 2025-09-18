import React,{useEffect} from 'react'
import AllCategories from '../Pages/Categories/AllCategories'
import MilkCategories from '../Pages/Categories/MilkCategories'
import InstantOrderSection from '../Pages/Home/InstantOrderSection';
import Hero from '../Pages/Home/Hero';
import { useCart } from '../Context/CartContext';

export default function Home() {
  const {fetchCart}=useCart();
  useEffect(()=>{
    const userId = localStorage.getItem("userId");
    if(userId){
  fetchCart(userId, true);
    }
  },[])
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
