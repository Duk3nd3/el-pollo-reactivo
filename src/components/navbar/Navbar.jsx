import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed w-full h-[116px] bg-gradient-to-t from-orange-300 ia-yellow-500 to-yellow-200">
      <Link href="/">
        <div className="flex justify-center">
          <img
            src="/img/pollo-comilon-header.png"
            alt="header El Pollo Comilon"
            width={750}
            className="hover:scale-105 ease-in duration-150 cursor-pointer"
          />
        </div>
      </Link>

      <div className="py-3 shadow-sm shadow-gray-800 bg-zinc-500 text-white">
        <ul className="text-2xl flex justify-evenly font-semibold max-w-[85%] mx-auto">
          <Link href="/">
            <li className="cursor-pointer hover:-rotate-3 hover:scale-105 ease-in duration-100">
              Inicio
            </li>
          </Link>
          <Link href="/">
            <li className="cursor-pointer hover:-rotate-3 hover:scale-105 ease-in duration-100">
              Menu
            </li>
          </Link>
          <Link href="/">
            <li className="cursor-pointer hover:-rotate-3 hover:scale-105 ease-in duration-100">
              Nosotros
            </li>
          </Link>
          <Link href="/">
            <li className="cursor-pointer hover:-rotate-3 hover:scale-105 ease-in duration-100">
              Contacto
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
