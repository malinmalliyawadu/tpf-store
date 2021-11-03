import { ArrowLeftIcon, ExclamationCircleIcon } from "@heroicons/react/solid";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Heading } from "../components/Heading";
import { Main } from "../components/Main";

export const ErrorPage = () => {
  return (
    <Main>
      <div className="text-center my-16">
        <ExclamationCircleIcon className="h-24 w-24 text-red-500 inline-block" />
        <Heading>Oops! Something went wrong!</Heading>
        <p className="mb-16">
          We're not quite sure what happened, try clicking the link below to go
          back to the shop page
        </p>

        <Link
          to="/"
          className="flex items-center justify-center gap-2 hover:text-green-700 hover:underline"
        >
          <ArrowLeftIcon className="h-5 w-5 inline" /> Back to shop
        </Link>
      </div>
    </Main>
  );
};
