import { ArrowLeftIcon, BadgeCheckIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { Heading } from "../components/Heading";
import { Main } from "../components/Main";

export const OrderSuccess = () => {
  return (
    <Main>
      <div className="text-center">
        <BadgeCheckIcon className="h-24 w-24 text-green-500 inline-block" />
        <Heading>Order placed!</Heading>
        <p className="mb-20 max-w-md m-auto text-gray-700">
          Nice! Your payment was successful. An email receipt is on its way and
          we'll get your order out to you in no time!
        </p>

        <Link
          to="/tpf-store/"
          className="flex items-center justify-center gap-2 hover:text-green-700 hover:underline"
        >
          <ArrowLeftIcon className="h-5 w-5 inline" /> Back to shop
        </Link>
      </div>
    </Main>
  );
};
