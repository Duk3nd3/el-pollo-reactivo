import React from "react";
import { Link } from "react-router-dom";

const Bar = () => {
  return (
    <div className="py-2.5 shadow-sm hadow-gray-800 bg-zinc-600 text-white border-double border-y-4 border-orange-300">
      <ul className="text-2xl flex justify-evenly font-semibold max-w-[85%] mx-auto">
        <Link to="/">
          <li className="cursor-pointer hover:-rotate-3 hover:scale-105 ease-in duration-100">
            Inicio
          </li>
        </Link>
        <Link to="/menu">
          <li className="cursor-pointer hover:rotate-3 hover:scale-105 ease-in duration-100">
            Menu
          </li>
        </Link>
        <Link to="/nosotros">
          <li className="cursor-pointer hover:-rotate-3 hover:scale-105 ease-in duration-100">
            Nosotros
          </li>
        </Link>
        <Link to="/contacto">
          <li className="cursor-pointer hover:rotate-3 hover:scale-105 ease-in duration-100">
            Contacto
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Bar;
