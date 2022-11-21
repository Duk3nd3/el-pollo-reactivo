import { Link } from "react-router-dom";

const NavBarResponsive = () => {
  return (
    <ul className="mt-16 pl-10 flex flex-col gap-5 items-start font-semibold text-xl sm-2xl text-black tracking-wide ">
      <Link to="/">
        <li className="cursor-pointer rounded-md py-1 px-2 border-zinc-700 hover:border hover:bg-gradient-to-t from-orange-300 to-yellow-200 hover:shadow-sm hover:shadow-zinc-700 hover:-rotate-3 ease-in duration-100">
          Inicio
        </li>
      </Link>
      <Link to="/menu">
        <li className="cursor-pointer rounded-md py-1 px-2 border-zinc-700 hover:border hover:bg-gradient-to-t from-orange-300 to-yellow-200 hover:shadow-sm hover:shadow-zinc-700 hover:rotate-3 ease-in duration-100">
          Menu
        </li>
      </Link>
      <Link to="/nosotros">
        <li className="cursor-pointer rounded-md py-1 px-2 border-zinc-700 hover:border hover:bg-gradient-to-t from-orange-300 to-yellow-200 hover:shadow-sm hover:shadow-zinc-700 hover:-rotate-3 ease-in duration-100">
          Nosotros
        </li>
      </Link>
      <Link to="/contacto">
        <li className="cursor-pointer rounded-md py-1 px-2 border-zinc-700 hover:border hover:bg-gradient-to-t from-orange-300 to-yellow-200 hover:shadow-sm hover:shadow-zinc-700 hover:rotate-3 ease-in duration-100">
          Contacto
        </li>
      </Link>
    </ul>
  );
};

export default NavBarResponsive;
