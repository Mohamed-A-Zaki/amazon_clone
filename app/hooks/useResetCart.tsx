import { clearCart } from "../store/cartSlice";
import { useAppDispatch } from "../store/hooks";

export default function useResetCart() {
  const dispatch = useAppDispatch();

  const handle_clear_cart = () => {
    const confirm = window.confirm("Are You Sure To Reset The Cart?");
    if (confirm) {
      dispatch(clearCart());
    }
  };

  return { handle_clear_cart };
}
