"use client";
import Image from "next/image";
import { ProductType } from "@/app/types";
import useProduct from "@/app/hooks/useProduct";
import { AiOutlineShoppingCart, AiFillHeart } from "react-icons/ai";

export default function Product(product: ProductType) {
  const { title, description, oldPrice, price, image, category } = product;
  const { handle_Add_to_cart, handle_Add_to_favorite } = useProduct(product);

  return (
    <>
      <div className="px-3 py-5 bg-white rounded-lg group">
        <div className="relative h-[250px] flex items-center justify-center overflow-hidden">
          <Image
            src={image}
            alt={"img"}
            width={300}
            height={250}
            className="m-auto object-cover h-[250px]"
          />
          <div className="absolute top-0 right-0 animate-bounce text-xs font-medium">
            !save {(oldPrice - price).toFixed(2)}
          </div>
          <div className="absolute top-1/2 right-0 -translate-y-0.5 translate-x-60 group-hover:translate-x-0 transition duration-300">
            <AiOutlineShoppingCart
              size={40}
              onClick={handle_Add_to_cart}
              className="border p-2 border-black rounded-t cursor-pointer hover:bg-amazon_yellow transition duration-300"
            />
            <AiFillHeart
              size={40}
              onClick={handle_Add_to_favorite}
              className="border p-2 border-black rounded-b border-t-0 cursor-pointer hover:bg-amazon_yellow transition duration-300"
            />
          </div>
        </div>
        <div className="border-t">
          <div className="text-gray-600 text-xs mt-2">{category}</div>
          <div className="font-semibold my-2">{title}</div>
          <div className="flex gap-3">
            <span className="line-through">${oldPrice}</span>
            <span className="font-semibold">${price}</span>
          </div>
          <div className="text-xs text-gray-600 my-2">
            {description.slice(0, 150)}
          </div>
          <button
            onClick={handle_Add_to_cart}
            className="p-2 w-full bg-black mt-2 text-white rounded-md transition duration-300 border-2 border-transparent font-semibold hover:bg-amazon_yellow hover:border-black hover:text-black"
          >
            add to cart
          </button>
        </div>
      </div>
    </>
  );
}
