import { ref, getDatabase, get, child } from "@firebase/database";
import { Product } from "../types/Product";

export const useProducts = async () => {
  const dbRef = ref(getDatabase());
  try {
    const snapshot = await get(child(dbRef, `products`));
    if (snapshot.exists()) {
      return (snapshot.val() as Product[]).map((x, idx) => ({
        ...x,
        id: idx,
      }));
    } else {
      console.log("No data available");
    }
  } catch (error) {
    console.error(error);
  }
};
