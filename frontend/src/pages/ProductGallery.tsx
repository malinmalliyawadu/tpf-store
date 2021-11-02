import { ref, getDatabase, get, child } from "@firebase/database";
import { ShoppingBagIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import { Heading } from "../components/Heading";
import { ProductItem } from "../components/ProductItem";
import { useProducts } from "../hooks/useProducts";
import { Product } from "../types/Product";

export const ProductGallery = () => {
  const [products, setProducts] = useState<Partial<Product>[]>([{}, {}]);

  useEffect(() => {
    useProducts().then((x) => x && setProducts(x));
  }, []);

  return (
    <div className="container mx-auto p-4 md:p-8 mb-20">
      <Heading>The Tiny Plastic Factory Shop</Heading>

      <div className="grid gap-4 items-center md:grid-cols-3">
        {products?.map((x) => (
          <ProductItem key={x.id} {...x} />
        ))}
      </div>
    </div>
  );
};