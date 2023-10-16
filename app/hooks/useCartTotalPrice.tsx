import { useAppSelector } from "../store/hooks";

export default function useCartTotalPrice() {
  const { cart } = useAppSelector((state) => state.cart);

  const get_total_price = () => {
    let sum = 0;

    cart
      .map((ele) => {
        return ele.count * ele.price;
      })
      .forEach((ele) => {
        sum += ele;
      });

    return sum.toFixed(2);
  };

  return { get_total_price };
}
