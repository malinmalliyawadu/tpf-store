import { ref, getDatabase } from "@firebase/database";
import { useList } from "react-firebase-hooks/database";
import { useEffect, useState } from "react";
import { ShippingOption } from "../types/ShippingOption";

export const useShippingOptions = (): [
  ShippingOption[] | undefined,
  boolean,
  Error | undefined
] => {
  const [shippingOptions, setShippingOptions] = useState<ShippingOption[]>();
  const [snapshots, loading, error] = useList(
    ref(getDatabase(), "shippingOptions")
  );

  useEffect(() => {
    if (snapshots) {
      setShippingOptions(
        snapshots.map((x) => {
          const rawData = x.val();

          return {
            ...rawData,
            id: x.key,
          } as ShippingOption;
        })
      );
    }
  }, [snapshots]);

  return [shippingOptions, loading, error];
};
