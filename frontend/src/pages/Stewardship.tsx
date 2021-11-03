import { ref, getDatabase, get, child } from "@firebase/database";
import { EmojiSadIcon } from "@heroicons/react/outline";
import { useEffect, useRef, useState } from "react";
import { Heading } from "../components/Heading";
import { Main } from "../components/Main";
import stewardshipImage from "./../images/stewardship.jpg";
import { ProductRecord } from "../types/ProductRecord";

export const Stewardship = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [productRecord, setProductRecord] = useState<ProductRecord>();
  const [serialNumberQuery, setSerialNumberQuery] = useState<string>();
  const [notFound, setNotFound] = useState<boolean>(false);
  const resultTableRef = useRef<HTMLDivElement>(null);

  const doSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setProductRecord(undefined);
    setNotFound(false);
    setLoading(true);
    const dbRef = ref(getDatabase());
    try {
      const snapshot = await get(child(dbRef, `productRecords`));
      if (snapshot.exists()) {
        const productRecords = (snapshot.val() as ProductRecord[]).map(
          (x, idx) => ({
            ...x,
            id: idx,
          })
        );
        const matchedRecord = productRecords.find(
          (x) =>
            x.serialNumber.toLowerCase() === serialNumberQuery.toLowerCase()
        );
        if (matchedRecord) {
          setProductRecord(matchedRecord);
          resultTableRef.current?.scrollIntoView();
        } else {
          setNotFound(true);
        }
      } else {
        console.log("No data available");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Main>
      <div className="flex gap-32 mb-8 flex-row-reverse">
        <img src={stewardshipImage} className="hidden md:block h-96 mt-8" />
        <div>
          <Heading>Find out all about your plant pot!</Heading>
          <div className="">
            <img
              src={stewardshipImage}
              className="md:hidden h-40 float-right ml-10 mb-5 mt-2 mr-1"
            />
            <p className="mb-14">
              We take the stewardship of our products very seriously and aim to
              support users of our products throughout and at the end of their
              product life cycles. All of the products we sell come with an
              individual serial number (like shown in the picture on the left)
              which can be entered below to access the full manufacturing
              details and product specifications. In providing all the
              information about where your product came from, who made it, and
              when it was made, we hope to encourage users to form a special
              bond with their product: to care for and cherish it for a long
              time. We craft our products to last for many years, but if yours
              does ever meet an unfortunate end, simply package it up and we’ll
              pay to ship it back to us for recycling (again!) and even give you
              discount on a new one.
            </p>
          </div>

          <div ref={resultTableRef}>
            <h2 className="font-bold text-lg mb-2 tracking-tight">
              Enter your product serial number here, e.g. LB0053
            </h2>
            <form
              className="flex items-center mb-14"
              onSubmit={(e) => doSearch(e)}
            >
              <div className="flex rounded-md overflow-hidden shadow-md">
                <input
                  type="text"
                  className="px-4 py-2 w-80"
                  placeholder="Serial number e.g. LB0053"
                  onChange={(e) => setSerialNumberQuery(e.target.value)}
                />
                <button className="px-4 text-white bg-gray-600 border-l ">
                  {!loading ? (
                    "Search"
                  ) : (
                    <div>
                      <svg
                        className="animate-spin -ml-1 mr-1 h-5 w-5 text-gray-100 inline-block align-top"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>{" "}
                      Searching...
                    </div>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {notFound && (
        <div className="mb-14">
          <EmojiSadIcon className="h-12 w-12 text-red-500 inline-block mr-2" />
          Sorry, we couldn't find anything with that serial number
        </div>
      )}

      {productRecord && (
        <div className="mb-14">
          <table className="table-fixed text-left">
            <tbody>
              <tr className="border-b border-gray-300">
                <th className="w-1/2 py-2">Title</th>
                <td>{productRecord?.productName}</td>
              </tr>
              <tr className="border-b border-gray-300">
                <th className="py-2">Serial number</th>
                <td>{productRecord?.serialNumber}</td>
              </tr>
              <tr className="border-b border-gray-300">
                <th className="py-2">Date of assembly</th>
                <td>{productRecord?.dateCrafted}</td>
              </tr>
              <tr className="border-b border-gray-300">
                <th className="py-2">Crafted by</th>
                <td>{productRecord?.craftedBy}</td>
              </tr>
              <tr className="border-b border-gray-300">
                <th className="py-2">Weight</th>
                <td>{productRecord?.weight}</td>
              </tr>
              <tr className="border-b border-gray-300">
                <th className="py-2">Dimensions</th>
                <td>{productRecord?.dimensions}</td>
              </tr>
              <tr className="border-b border-gray-300">
                <th className="py-2">Materials</th>
                <td>{productRecord?.materials}</td>
              </tr>
              <tr>
                <th className="py-2">Source of recycled plastic</th>
                <td>{productRecord?.sourceOfRecycledPlastics}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </Main>
  );
};
