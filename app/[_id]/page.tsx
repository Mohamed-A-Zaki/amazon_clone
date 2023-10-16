"use client";

import Image from "next/image";
import useProductDetails from "../hooks/useProductDetails";
import { AiOutlineShoppingCart, AiFillHeart } from "react-icons/ai";

type ProductDetaisProps = {
  params: {
    _id: string;
  };
};

export default function PorductDetails({ params }: ProductDetaisProps) {
  const { handle_Add_to_cart, handle_Add_to_favorite, product } =
    useProductDetails(+params._id);

  return (
    <div className="container">
      <div className="flex flex-col md:flex-row my-12 rounded-lg overflow-hidden">
        {/* start image */}
        <div className="group relative flex items-center justify-center overflow-hidden bg-gray-200">
          <Image src={product.image} alt={"img"} width={700} height={600} />

          <div className="absolute top-2/3 right-4  translate-x-60 group-hover:translate-x-0 transition duration-300">
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
        {/* end image */}

        {/* start content */}
        <div className="flex-grow p-5 bg-white flex items-center justify-center">
          <div className="max-w-full">
            <div className="font-medium">Headphones_Techno</div>
            <h2 className="m-0 text-2xl font-bold">Gaming Headphone</h2>
            <p className="my-2 text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
              non magni facili blanditiis molestias soluta eveniet illum
              accusantium eius mollitia eligendi, ex iste doloribus magnam
            </p>
            <div>
              price: <span className="font-bold">${product.price}</span>
              <span className="line-through mx-2">${product.oldPrice}</span>
            </div>
            <div className="text-sm">
              You saved: ${product.oldPrice - product.price}
            </div>
            <button
              onClick={handle_Add_to_cart}
              className="p-3 w-80 max-w-full bg-black mt-4 text-white rounded-md transition duration-300 font-semibold hover:bg-amazon_yellow hover:border-black hover:text-black"
            >
              add to cart
            </button>
          </div>
        </div>
        {/* end content */}
      </div>
    </div>
  );
}
