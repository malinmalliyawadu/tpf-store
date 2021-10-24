import { ref, getDatabase, get, child } from "@firebase/database";
import { useEffect, useState } from "react";
import { ProductItem } from "../components/ProductItem";
import { useProducts } from "../hooks/useProducts";
import { Product } from "../types/Product";

export const ProductGallery = () => {
  const [products, setProducts] = useState<Partial<Product>[]>([
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ]);

  useEffect(() => {
    useProducts().then((x) => x && setProducts(x));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-6xl mt-4 mb-8 md:mt-8 md:mb-12 font-serif text-gray-800">
        Products
      </h1>

      <div className="grid gap-4 items-center md:grid-cols-3">
        {products?.map((x) => (
          <ProductItem key={x.id} {...x} />
        ))}
      </div>
    </div>
  );
};
