import { ref, getDatabase } from "@firebase/database";
import { Product } from "../types/Product";
import { useList } from "react-firebase-hooks/database";
import { useEffect, useState } from "react";

export const useProducts = (): [
  Product[] | undefined,
  boolean,
  Error | undefined
] => {
  const [products, setProducts] = useState<Product[]>();
  const [snapshots, loading, error] = useList(ref(getDatabase(), "products"));

  useEffect(() => {
    if (snapshots) {
      setProducts(
        snapshots.map((x) => {
          const rawData = x.val();

          return {
            ...rawData,
            id: x.key,
          } as Product;
        })
      );
    }
  }, [snapshots]);

  return [products, loading, error];
};
