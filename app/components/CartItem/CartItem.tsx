"use client";

import Image from "next/image";
import { BsTrash } from "react-icons/bs";
import { CartProductType } from "@/app/types";
import { useDispatch } from "react-redux";
import { removeFromCart } from "@/app/store/cartSlice";

export default function CartItem(product: CartProductType) {
  const dispatch = useDispatch();

  const handle_remove_from_cart = () => {
    const confirm = window.confirm("Are You Sure To Remove The Item?");
    if (confirm) {
      dispatch(removeFromCart(product._id));
    }
  };

  return (
    <div className="relative p-2 bg-gray-100 rounded-lg my-3 flex items-center justify-between">
      <div>
        <Image
          src={product.image}
          alt="product image"
          width={150}
          height={150}
        />
      </div>

      <div>
        <div className="font-bold text-xl">{product.title}</div>
        <p className="text-gray-500 text-sm my-2">{product.description}</p>
        <div className="text-sm">
          Unit price <span className="font-bold">${product.price}</span>
        </div>
        <div className="flex gap-3 border rounded-xl shadow-md items-center w-28 justify-evenly my-3">
          <span className="w-5 h-5 rounded-full flex justify-center items-center transition duration-300 cursor-pointer hover:bg-gray-500 ">
            +
          </span>
          <span>{product.count}</span>
          <span className="w-5 h-5 rounded-full flex justify-center items-center transition duration-300 cursor-pointer hover:bg-gray-500 ">
            -
          </span>
        </div>
      </div>

      <div className="font-medium text-xl">
        ${product.count * product.price}
      </div>

      <div
        onClick={handle_remove_from_cart}
        className="absolute top-3 right-3 cursor-pointer text-red-500 flex items-center gap-2 border rounded p-1 border-red-700"
      >
        <BsTrash /> Remove
      </div>
    </div>
  );
}
