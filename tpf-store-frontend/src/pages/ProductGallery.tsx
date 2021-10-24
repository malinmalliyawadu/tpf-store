import { ref, getDatabase, get, child } from "@firebase/database";
import { ShoppingBagIcon } from "@heroicons/react/solid";
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
    <div className="container mx-auto p-4 md:p-8">
      <h1 className="flex items-center text-6xl mt-4 mb-4 md:mt-8 md:mb-8 font-serif text-gray-800">
        The Tiny Plastic Factory Shop
      </h1>
      <div className="mb-8 md:mb-12 text-gray-700">
        Donec ullamcorper ultricies fringilla. Vivamus neque risus, suscipit id
        convallis non, consectetur eget felis. Nulla hendrerit blandit metus at
        pellentesque. Nunc molestie felis ut sapien iaculis scelerisque.
        Suspendisse sapien mauris, tincidunt id dapibus quis, scelerisque sit
        amet turpis. Vestibulum interdum metus et felis hendrerit viverra.
        Integer eu magna mattis, volutpat nisl ac, euismod enim. Suspendisse
        potenti. Aenean finibus lobortis sem, vel convallis quam semper vitae.
        Suspendisse consectetur magna eget velit bibendum, in mattis arcu
        malesuada.
      </div>

      <div className="grid gap-4 items-center md:grid-cols-3">
        {products?.map((x) => (
          <ProductItem key={x.id} {...x} />
        ))}
      </div>
    </div>
  );
};
