import { Link } from "react-router-dom";
import tpfLogo from "./../images/tpf-logo.png";
import { Facebook } from "./Facebook";
import { Instagram } from "./Instagram";

export const Header = () => {
  return (
    <header className="flex space bg-green-900 items-center p-2 shadow-2xl border-green-600 border-b-2">
      <a href="https://www.thetinyplasticfactory.co.nz/">
        <img src={tpfLogo} className="w-20" />
      </a>
      <ul className="hidden md:flex text-xl flex-grow gap-14 items-center justify-center text-green-100 font-medium">
        <li>
          <a
            className="transition pb-2 border-transparent border-b-4 hover:border-yellow-300"
            href="https://www.thetinyplasticfactory.co.nz/#about"
          >
            About
          </a>
        </li>
        <li>
          <a
            className="transition pb-2 border-transparent border-b-4 hover:border-yellow-300"
            href="https://www.thetinyplasticfactory.co.nz/#collection"
          >
            Collection
          </a>
        </li>
        <li>
          <a
            className="transition pb-2 border-transparent border-b-4 hover:border-yellow-300"
            href="https://www.thetinyplasticfactory.co.nz/#sales"
          >
            Sales
          </a>
        </li>
        <li>
          <a
            className="transition pb-2 border-transparent border-b-4 hover:border-yellow-300"
            href="https://www.thetinyplasticfactory.co.nz/#stewardship"
          >
            Stewardship
          </a>
        </li>
        <li>
          <a
            className="transition pb-2 border-transparent border-b-4 hover:border-yellow-300"
            href="https://www.thetinyplasticfactory.co.nz/#contact"
          >
            Contact
          </a>
        </li>
        <li>
          <a
            className="transition pb-2 border-transparent border-b-4 hover:border-yellow-300"
            href="https://www.thetinyplasticfactory.co.nz/#partners"
          >
            Partners
          </a>
        </li>
        <li>
          <a
            className="transition pb-2 border-b-4 border-yellow-300"
            href="https://tpf-store.web.app/"
          >
            Shop
          </a>
        </li>
      </ul>

      <div className="hidden md:flex gap-4 mr-5 text-2xl text-green-100 items-center">
        <a
          className="hover:text-green-500 h-12 w-12"
          href="https://www.facebook.com/thetinyplasticfactory/"
          target="_blank"
        >
          <Facebook />
        </a>
        <a
          className="hover:text-green-500 h-12 w-12"
          href="https://instagram.com/the.tiny.plastic.factory/"
          target="_blank"
        >
          <Instagram />
        </a>
      </div>
    </header>
  );
};