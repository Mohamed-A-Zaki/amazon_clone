import Link from "next/link";

export default function EmptyCart() {
  return (
    <div className="bg-white p-4 rounded-lg h-96 m-3 flex items-center justify-center flex-col">
      <p>Your cart is empty</p>
      <Link
        href={"/"}
        className="bg-black text-white p-2 w-52 text-center rounded-md mt-3 transition duration-300 font-medium hover:bg-amazon_yellow hover:text-black"
      >
        go to shopping
      </Link>
    </div>
  );
}
