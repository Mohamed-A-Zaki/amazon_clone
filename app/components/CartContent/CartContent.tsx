import CartItemList from "../CartItemList";
import ResetCartButton from "../ResetCartButton";

export default function CartContent() {
  return (
    <>
      <div className="flex align-center justify-between font-bold border-b border-black pb-1">
        <div className="text-xl">Shopping Cart</div>
        <div>Subtotal</div>
      </div>
      <CartItemList />
      <ResetCartButton />
    </>
  );
}
