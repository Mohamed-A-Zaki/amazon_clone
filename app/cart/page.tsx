"use client";

import { useAppSelector } from "../store/hooks";
import EmptyCart from "../components/EmptyCart";
import CartContent from "../components/CartContent";
import CartTotalPrice from "../components/CartTotalPrice/CartTotalPrice";

export default function Cart() {
  const { cart } = useAppSelector((state) => state.cart);

  return cart.length ? (
    <div className="grid lg:grid-cols-4 p-3 gap-5 place-items-start">
      <div className="lg:col-span-3 bg-white p-4 rounded-lg">
        <CartContent />
      </div>
      <CartTotalPrice />
    </div>
  ) : (
    <EmptyCart />
  );
}
