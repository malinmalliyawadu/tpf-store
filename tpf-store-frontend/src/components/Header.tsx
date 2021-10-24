import styled from "styled-components";

export const Header = () => {
  return (
    <header className="bg-green-900 items-center p-8 shadow-xl border-green-400 border-b-2">
      <ul className="flex items-center justify-center text-white">
        <li className="mr-6">
          <a
            className="transition pb-2 border-transparent border-b-4 hover:border-yellow-300"
            href="/#about"
          >
            About
          </a>
        </li>
        <li className="mr-6">
          <a
            className="transition pb-2 border-transparent border-b-4 hover:border-yellow-300"
            href="/#about"
          >
            Collection
          </a>
        </li>
        <li className="mr-6">
          <a
            className="transition pb-2 border-transparent border-b-4 hover:border-yellow-300"
            href="/#about"
          >
            Sales
          </a>
        </li>
        <li className="mr-6">
          <a
            className="transition pb-2 border-transparent border-b-4 hover:border-yellow-300"
            href="/#about"
          >
            Stewardship
          </a>
        </li>
        <li className="mr-6">
          <a
            className="transition pb-2 border-transparent border-b-4 hover:border-yellow-300"
            href="/#about"
          >
            Contact
          </a>
        </li>
        <li className="mr-6">
          <a
            className="transition pb-2 border-transparent border-b-4 hover:border-yellow-300"
            href="/#about"
          >
            Partners
          </a>
        </li>
      </ul>
    </header>
  );
};
