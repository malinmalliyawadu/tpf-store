import { ref, getDatabase, get, child } from "@firebase/database";
import { useEffect, useState } from "react";
import { ProductItem } from "../components/ProductItem";
import { useProducts } from "../hooks/useProducts";
import { Product } from "../types/Product";

export const ProductGallery = () => {
  const [products, setProducts] = useState<Product[]>();

  useEffect(() => {
    useProducts().then((x) => x && setProducts(x));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-6xl mt-4 mb-8">Products</h1>

      <div className="grid grid-cols-3 gap-4 items-center">
        {products?.map((x) => (
          <ProductItem key={x.id} {...x} />
        ))}
      </div>
    </div>
  );
};
