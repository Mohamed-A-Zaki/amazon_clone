import axios from "axios";
import { ProductType } from "@/app/types";
import Product from "../Product/Product";

export default async function ProductList() {
  const { data } = await axios.get<ProductType[]>(
    "https://fakestoreapiserver.reactbd.com/tech"
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 p-5 -mt-60 z-50 relative">
      {data.map((product) => (
        <Product key={product._id} {...product} />
      ))}
    </div>
  );
}
