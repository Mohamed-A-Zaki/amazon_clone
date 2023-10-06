import { clearCart } from "@/app/store/cartSlice";
import { useAppDispatch } from "@/app/store/hooks";

export default function ResetCartButton() {
  const dispatch = useAppDispatch();

  const handle_clear_cart = () => {
    const confirm = window.confirm("Are You Sure To Reset The Cart?");
    if (confirm) {
      dispatch(clearCart());
    }
  };

  return (
    <div className="bg-gray-200 font-medium mt-3 ml-auto w-fit rounded-md transition duration-300 hover:bg-red-800 hover:text-white">
      <button type="button" className="p-2" onClick={handle_clear_cart}>
        reset cart
      </button>
    </div>
  );
}
