"use client";

import { useAppSelector } from "../store/hooks";
import EmptyCart from "../components/EmptyCart";
import CartContent from "../components/CartContent";

export default function Cart() {
  const { cart } = useAppSelector((state) => state.cart);

  return (
     cart.length ? (
    <div className="grid lg:grid-cols-4 p-3 gap-5">

       <div className="lg:col-span-3 bg-white p-4 rounded-lg">
         <CartContent />
      </div>
      
      <div className="lg:col-span-1 bg-white p-4 rounded-lg">

      </div>

     
    </div>) : <EmptyCart />
  );
}
