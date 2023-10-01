import { CiMenuBurger } from "react-icons/ci";

export default function BottomHeader() {
  return (
    <div className="bg-amazon_light text-white flex item-center gap-2 px-4 py-1">
      <div className="flex items-center gap-2 border border-transparent p-1 rounded hover:border-white transition duration-300 cursor-pointer">
        <CiMenuBurger className="text-xl" />
        <div>All</div>
      </div>
      <div className="hidden lg:block border border-transparent p-1 rounded hover:border-white transition duration-300 cursor-pointer">
        <div>Todays Deals</div>
      </div>
      <div className="hidden lg:block border border-transparent p-1 rounded hover:border-white transition duration-300 cursor-pointer">
        <div>Customer Service</div>
      </div>
      <div className="hidden lg:block border border-transparent p-1 rounded hover:border-white transition duration-300 cursor-pointer">
        <div>Registry</div>
      </div>
      <div className="hidden lg:block border border-transparent p-1 rounded hover:border-white transition duration-300 cursor-pointer">
        <div>Gift Cards</div>
      </div>
      <div className="hidden lg:block border border-transparent p-1 rounded hover:border-white transition duration-300 cursor-pointer">
        <div>Sell</div>
      </div>
    </div>
  );
}
