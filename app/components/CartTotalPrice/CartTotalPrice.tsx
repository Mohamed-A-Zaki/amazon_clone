import useCartTotalPrice from "@/app/hooks/useCartTotalPrice";

export default function CartTotalPrice() {
  const { get_total_price } = useCartTotalPrice();

  return (
    <>
      <div className="lg:col-span-1 bg-white p-5 rounded-lg">
        <p>
          Your order qualifies for FREE Shipping by Choosing this option at
          checkout. See details....
        </p>
        <div className="flex items-center justify-between my-5">
          <div className="font-medium">Total:</div>
          <div className="font-extrabold">${get_total_price()}</div>
        </div>
        <button className="w-full bg-gray-500 text-white rounded-lg p-2 text-center mb-2 cursor-not-allowed">
          Procced to Buy
        </button>

        <div className="text-red-700 animate-bounce text-sm text-center">
          please login to conyinue
        </div>
      </div>
    </>
  );
}
