import { addToCart } from "../store/cartSlice";
import { addToFavotite } from "../store/favoriteSlice";
import { useAppDispatch } from "../store/hooks";
import { ProductType } from "../types";

export default function useProduct(product: ProductType) {
  const dispatch = useAppDispatch();

  const handle_Add_to_cart = () => {
    dispatch(addToCart(product));
  };

  const handle_Add_to_favorite = () => {
    dispatch(addToFavotite(product));
  };

  return {
    handle_Add_to_cart,
    handle_Add_to_favorite,
  };
}
