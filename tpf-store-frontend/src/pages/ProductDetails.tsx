import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import { Product } from "../types/Product";
import { ArrowLeftIcon } from "@heroicons/react/solid";
import { currency } from "../utils/currency";
import { child, get, getDatabase, onValue, ref } from "firebase/database";
import { useProducts } from "../hooks/useProducts";

export const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product>();
  useEffect(() => {
    useProducts().then((x) => x && setProduct(x[0]));
  }, [id]);

  return (
    <div className="container mx-auto p-8">
      <a
        href="/tpf-store/"
        className="flex items-center gap-2 hover:text-green-700 hover:underline"
      >
        <ArrowLeftIcon className="h-5 w-5 inline " /> Back to gallery
      </a>

      <h1 className="text-6xl mt-4 mb-8">{product?.name}</h1>

      <div className="flex max-w gap-16">
        <img className="" src="https://picsum.photos/200/300"></img>
        <div>
          <h2 className="text-2xl">{currency(product?.price)}</h2>

          <div className="min-w-max">
            <label className="block">
              Colour:
              <select>
                <option>Select</option>
              </select>
            </label>
            <button className="my-3 px-5 py-4 bg-gray-800 text-white text-xs font-bold uppercase rounded">
              Add to Cart
            </button>
            <div>Quantity: {product?.stock}</div>
          </div>
        </div>
        <div>{product?.description}</div>
      </div>
    </div>
  );
};
