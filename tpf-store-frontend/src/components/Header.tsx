import styled from "styled-components";

export const Header = () => {
  return (
    <header className="bg-green-900 items-center p-8">
      <ul className="flex items-center justify-center text-white">
        <li className="mr-6">
          <a className="p-4" href="/#about">
            About
          </a>
        </li>
        <li className="mr-6">
          <a href="/#about">Collection</a>
        </li>
        <li className="mr-6">
          <a href="/#about">Sales</a>
        </li>
        <li className="mr-6">
          <a href="/#about">Stewardship</a>
        </li>
        <li className="mr-6">
          <a href="/#about">Contact</a>
        </li>
        <li className="mr-6">
          <a href="/#about">Partners</a>
        </li>
      </ul>
    </header>
  );
};
