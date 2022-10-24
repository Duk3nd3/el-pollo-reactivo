import { Link } from "react-router-dom";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { useAuth } from "../../hooks/authContext";
import UserMenu from "./UserMenu";
import { useState } from "react";

const NavBar2 = ({ handleNav, handlemodoRegLog }) => {
  const { user } = useAuth();
  const [navUserMenu, setNavUserMenu] = useState(false);

  return (
    <div className="w-full py-2.5 shadow-sm bg-zinc-600 text-white border-double border-y-4 border-orange-300">
      <div className="max-w-[95%] mx-auto flex items-center justify-end m:max-w-[90%] sm:justify-between d:max-w-[85%] l:max-w-[80%] gap-5 ">
        <ul className="hidden w-full font-semibold sm:text-xl sm:flex sm:justify-evenly lg:text-2xl gap-5">
          <Link to="/">
            <li className="cursor-pointer over:-rotate-3 over:scale-110 hover:text-orange-200 ease-in duration-100">
              Inicio
            </li>
          </Link>
          <Link to="/menu">
            <li className="cursor-pointer over:rotate-3  over:scale-110 hover:text-orange-200 ease-in duration-100">
              Menu
            </li>
          </Link>
          <Link to="/nosotros">
            <li className="cursor-pointer over:-rotate-3 over:scale-110 hover:text-orange-200 ease-in duration-100">
              Nosotros
            </li>
          </Link>
          <Link to="/contacto">
            <li className="cursor-pointer over:rotate-3  over:scale-110 hover:text-orange-200 ease-in duration-100">
              Contacto
            </li>
          </Link>
        </ul>

        <div className="flex items-center gap-12">
          {/* Boton registro / login / logout */}
          {!user ? (
            <div className="flex gap-2 text-orange-200 underline">
              <button
                onClick={() => handlemodoRegLog("login")}
                className="hover:scale-105 ease-in duration-100"
              >
                Login
              </button>
              <p className="text-white">|</p>
              <button
                onClick={() => handlemodoRegLog("registro")}
                className="hover:scale-105 ease-in duration-100"
              >
                Registrarse
              </button>
            </div>
          ) : (
            <div className="relative">
              <div
                onClick={() => setNavUserMenu(!navUserMenu)}
                className="flex items-center gap-2 rounded-md cursor-pointer bg-gradient-to-t from-orange-300 to-yellow-200 px-2 py-0.5 shadow-sm shadow-black hover:ring-1 hover:ring-white ease-in duration-100"
              >
                <span className="text-lg font-semibold text-black capitalize">
                  {user?.nombre}
                </span>
                <FaUserAlt className="text-xl text-zinc-600" />
              </div>
              {navUserMenu && <UserMenu />}
            </div>
          )}

          {/* boton carrito */}
          <div className="flex gap-2">
            <Link to="/carrito">
              <MdOutlineLocalGroceryStore
                size="32px"
                className="text-orange-300 relative hover:rotate-3 hover:scale-110 ease-in duration-200"
              />
            </Link>

            {/* boton menu responsive */}
            <div
              onClick={handleNav}
              className="flex sm:hidden cursor-pointer ml-3"
            >
              <AiOutlineMenu size="30" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar2;
