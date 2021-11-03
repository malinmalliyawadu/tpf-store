import { ref, getDatabase, get, child } from "@firebase/database";
import { EmojiSadIcon } from "@heroicons/react/outline";
import { useEffect, useRef, useState } from "react";
import { Heading } from "../components/Heading";
import { Main } from "../components/Main";
import stewardshipImage from "./../images/stewardship.jpg";
import { ProductRecord } from "../types/ProductRecord";
import { CheckCircleIcon, CheckIcon } from "@heroicons/react/solid";
import { Spinner } from "../components/Spinner";

export const Stewardship = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [productRecord, setProductRecord] = useState<ProductRecord>();
  const [serialNumberQuery, setSerialNumberQuery] = useState<string>();
  const [notFound, setNotFound] = useState<boolean>(false);
  const resultTableRef = useRef<HTMLDivElement>(null);
  const searchBoxRef = useRef<HTMLDivElement>(null);

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
            x.serialNumber.toLowerCase() === serialNumberQuery?.toLowerCase()
        );
        if (matchedRecord) {
          setProductRecord(matchedRecord);
          resultTableRef.current?.scrollIntoView();
        } else {
          setNotFound(true);
          searchBoxRef.current?.scrollIntoView();
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
      <div className="flex gap-32 mb-2 flex-row-reverse">
        <img src={stewardshipImage} className="hidden md:block h-96 mt-8" />
        <div>
          <Heading>Find out all about your plant pot!</Heading>
          <div className="">
            <img
              src={stewardshipImage}
              className="md:hidden h-40 float-right ml-5 mb-5 mt-2 mr-1"
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

          <div ref={searchBoxRef}>
            <h2 className="font-bold text-lg mb-2 tracking-tight">
              Enter your product serial number here, e.g. LB0053
            </h2>
            <form
              className="flex items-center mb-14"
              onSubmit={(e) => doSearch(e)}
            >
              <div className="flex flex-grow md:flex-grow-0 rounded-md overflow-hidden shadow-md flex-col md:flex-row">
                <input
                  type="text"
                  className="px-4 py-2 md:w-80 w-"
                  placeholder="Serial number e.g. LB0053"
                  onChange={(e) => setSerialNumberQuery(e.target.value)}
                />
                <button className="px-4 py-3 md:py-0 text-white bg-gray-600">
                  {!loading ? (
                    "Search"
                  ) : (
                    <div>
                      <Spinner /> Searching...
                    </div>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {notFound && (
        <div className="mb-14 text-center md:text-left">
          <EmojiSadIcon className="h-12 w-12 text-red-500 inline-block mb-2" />
          <h2 className="text-2xl mb-4 tracking-tighter md:inline-block md:ml-3">
            Sorry, we couldn't find anything with that serial number
          </h2>
        </div>
      )}

      {productRecord && (
        <div ref={resultTableRef} className="mb-14">
          <h2 className="text-4xl mb-4 tracking-tighter">
            <span className="align-middle mr-2">Match found</span>
            <CheckCircleIcon className="h-12 w-12 text-green-500 inline-block mr-2 align-middle" />
          </h2>
          <table className="table-fixed text-left -ml-4">
            <tbody>
              <tr className="border-b border-gray-300 align-top">
                <th className="w-1/2 py-2 pl-4">Title</th>
                <td className="py-2 px-4">{productRecord?.productName}</td>
              </tr>
              <tr className="border-b border-gray-300 align-top">
                <th className="py-2 pl-4">Serial number</th>
                <td className="py-2 px-4">{productRecord?.serialNumber}</td>
              </tr>
              <tr className="border-b border-gray-300 align-top">
                <th className="py-2 pl-4">Date of assembly</th>
                <td className="py-2 px-4">{productRecord?.dateCrafted}</td>
              </tr>
              <tr className="border-b border-gray-300 align-top">
                <th className="py-2 pl-4">Crafted by</th>
                <td className="py-2 px-4">{productRecord?.craftedBy}</td>
              </tr>
              <tr className="border-b border-gray-300 align-top">
                <th className="py-2 pl-4">Weight</th>
                <td className="py-2 px-4">{productRecord?.weight}</td>
              </tr>
              <tr className="border-b border-gray-300 align-top">
                <th className="py-2 pl-4">Dimensions</th>
                <td className="py-2 px-4">{productRecord?.dimensions}</td>
              </tr>
              <tr className="border-b border-gray-300 align-top">
                <th className="py-2 pl-4">Materials</th>
                <td className="py-2 px-4">{productRecord?.materials}</td>
              </tr>
              <tr>
                <th className="py-2 pl-4 align-top">
                  Source of recycled plastic
                </th>
                <td className="py-2 px-4">
                  {productRecord?.sourceOfRecycledPlastics}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </Main>
  );
};
