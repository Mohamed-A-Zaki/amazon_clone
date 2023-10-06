"use client";

import CartItem from "../CartItem";
import { useAppSelector } from "@/app/store/hooks";

export default function CartItemList() {
  const { cart } = useAppSelector((state) => state.cart);
  return cart.map((ele) => <CartItem key={ele._id} {...ele} />);
}
