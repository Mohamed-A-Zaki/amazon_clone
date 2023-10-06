"use client";

import Link from "next/link";
import Image from "next/image";

import logo from "@/app/images/logo.png";
import cart_image from "@/app/images/cartIcon.png";

import { CiLocationOn } from "react-icons/ci";
import { BiSearchAlt2 } from "react-icons/bi";
import { useAppSelector } from "@/app/store/hooks";

export default function Header() {
  const { cart } = useAppSelector((state) => state.cart);
  const { favorite } = useAppSelector((state) => state.favorite);

  return (
    <nav className="bg-black p-4 flex items-center justify-between gap-4 text-white">
      {/* start logo */}
      <Link href={"/"} className="w-28 header-item p-2">
        <Image src={logo} alt={"logo"} />
      </Link>
      {/* end logo */}

      {/* start deliver */}
      <div className="hidden lg:block header-item p-2">
        <div className="flex items-center gap-2">
          <CiLocationOn className="text-2xl" />
          <div className="text-xs">
            <div className="text-lightText">Deliver to</div>
            <div className="font-bold uppercase">usa</div>
          </div>
        </div>
      </div>
      {/* end deliver */}

      {/* strat search */}
      <div className="hidden lg:block flex-grow relative">
        <input
          type="search"
          className="p-2 text-black w-full rounded-md outline-none border-4 border-transparent focus:border-amazon_yellow placeholder:text-sm"
          placeholder="Search next_amazon products"
        />
        <span className="absolute top-0 right-0 h-full w-12 cursor-pointer rounded-r-md bg-amazon_yellow flex items-center justify-center">
          <BiSearchAlt2 size={25} color={"#000"} />
        </span>
      </div>
      {/* end search */}

      {/* strat signin */}
      <div className="text-xs header-item p-2">
        <div className="text-lightText">Hello, sign in</div>
        <div className="font-bold flex items-center gap-1">Account & Lists</div>
      </div>
      {/* end signin */}

      {/* strat favourite */}
      <div className="hidden lg:block text-xs header-item p-2">
        <div className="relative text-lightText">
          Marked
          <span className="absolute top-0 right-0 font-bold text-amazon_yellow">
            {favorite.length}
          </span>
        </div>
        <div className="font-bold flex items-center gap-1">& Favourite</div>
      </div>
      {/* end favourite */}

      {/* start cart */}
      <Link href={"/cart"} className="flex text-xs header-item p-2">
        <div className="relative">
          <Image src={cart_image} alt={"cart"} className="w-10" />
          <span className="absolute top-[-5px] right-[12px] font-bold text-amazon_yellow">
            {cart.length}
          </span>
        </div>
        <div className="font-bold flex items-center gap-1">Cart</div>
      </Link>
      {/* end cart */}
    </nav>
  );
}
