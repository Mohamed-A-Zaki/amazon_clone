import { CiMenuBurger } from "react-icons/ci";

export default function BottomHeader() {
  return (
    <div className="bg-amazon_light text-white flex item-center gap-2 px-4 py-1">
      <div className="flex items-center gap-2 header-item p-1">
        <CiMenuBurger className="text-xl" />
        <div>All</div>
      </div>
      <div className="hidden lg:block header-item p-1">
        <div>Todays Deals</div>
      </div>
      <div className="hidden lg:block header-item p-1">
        <div>Customer Service</div>
      </div>
      <div className="hidden lg:block header-item p-1">
        <div>Registry</div>
      </div>
      <div className="hidden lg:block header-item p-1">
        <div>Gift Cards</div>
      </div>
      <div className="hidden lg:block header-item p-1">
        <div>Sell</div>
      </div>
    </div>
  );
}
