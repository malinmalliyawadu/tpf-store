import { ref, getDatabase, get, child } from "@firebase/database";
import { ProductRecord } from "../types/ProductRecord";

export const useProductRecords = async () => {
  const dbRef = ref(getDatabase());
  try {
    const snapshot = await get(child(dbRef, `productRecords`));
    if (snapshot.exists()) {
      return (snapshot.val() as ProductRecord[]).map((x, idx) => ({
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
