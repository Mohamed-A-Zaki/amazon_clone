import useResetCart from "@/app/hooks/useResetCart";

export default function ResetCartButton() {
  const { handle_clear_cart } = useResetCart();

  return (
    <div className="bg-gray-200 font-medium mt-3 ml-auto w-fit rounded-md transition duration-300 hover:bg-red-800 hover:text-white">
      <button type="button" className="p-2" onClick={handle_clear_cart}>
        reset cart
      </button>
    </div>
  );
}
