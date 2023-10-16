import { useEffect, useState } from "react";
import { ProductType } from "../types";
import axios from "axios";
import useProduct from "./useProduct";


export default function useProductDetails(id : number) {
  const [product, setProduct] = useState({} as ProductType);

  useEffect(() => {
    axios
      .get<ProductType[]>("https://fakestoreapiserver.reactbd.com/tech")
      .then(({ data }) => {
        const prod = data.find((ele) => ele._id === id)!;
        setProduct(prod);
      });
  }, [id]);

  const { handle_Add_to_cart, handle_Add_to_favorite } = useProduct(product);

  return {
    handle_Add_to_cart,
    handle_Add_to_favorite,
    product
  }
}
