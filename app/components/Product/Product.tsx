import { ProductType } from "@/app/types";
import Image from "next/image";

export default function Product({
  _id,
  title,
  description,
  oldPrice,
  price,
  brand,
  image,
  isNew,
  category,
}: ProductType) {
  console.log(image);
  return (
    <>
      <div className="px-3 py-5 bg-white rounded-lg">
        <div className="relative h-[250px] flex items-center justify-center">
          <Image
            src={image}
            alt={"img"}
            width={300}
            height={250}
            className="m-auto object-cover h-[250px]"
          />
          <div className="absolute top-0 right-0 animate-bounce text-xs font-medium">
            !save {Math.round(oldPrice - price)}
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
          <button className="p-2 w-full bg-black mt-2 text-white rounded-md transition duration-300 border-2 border-transparent font-semibold hover:bg-amazon_yellow hover:border-black hover:text-black">
            add to cart
          </button>
        </div>
      </div>
    </>
  );
}
