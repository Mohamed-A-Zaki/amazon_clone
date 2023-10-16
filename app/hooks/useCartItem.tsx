import { useDispatch } from "react-redux";
import {
  decreaseCount,
  increaseCount,
  removeFromCart,
} from "../store/cartSlice";

export default function useCartItem(id : number) {
  const dispatch = useDispatch();

  const handle_remove_from_cart = () => {
    const confirm = window.confirm("Are You Sure To Remove The Item?");
    if (confirm) {
      dispatch(removeFromCart(id));
    }
  };

  const handle_increae_count = () => {
    dispatch(increaseCount(id));
  };

  const handle_decreae_count = () => {
    dispatch(decreaseCount(id));
  };

  return {
    handle_remove_from_cart,
    handle_increae_count,
    handle_decreae_count,
  };
}
