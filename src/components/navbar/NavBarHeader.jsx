import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import NavBar2 from "./NavBar2";
import Header from "./Header";
import Redes from "./Redes";
import NavBarResponsive from "./NavBarResponsive";
import HeaderResponsive from "./HeaderResponsive";

const NavBarHeader = ({ setmodoRegLog }) => {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();

  const handleNav = () => {
    setNav(!nav);
  };

  const handlemodoRegLog = (modo) => {
    if (modo === "registro") {
      setmodoRegLog("registro");
    } else {
      setmodoRegLog("login");
    }
    navigate("/RegistroLogin");
  };

  return (
    <div className="fixed w-full h-[124px] z-[900] bg-gradient-to-t from-orange-300 to-yellow-200 py-1">
      <Header />
      <NavBar2 handlemodoRegLog={handlemodoRegLog} handleNav={handleNav} />

      {/* NavBar/Header responsive */}
      <div
        className={
          nav ? "sm:hidden fixed top-0 left-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed top-0 left-0 h-screen w-4/5 max-w-[400px] bg-white ease-in duration-500"
              : "fixed left-[-120%] top-0 ease-in duration-500"
          }
        >
          <HeaderResponsive handleNav={handleNav} />

          <div className="w-full flex flex-col mt-5 justify-center items-center gap-3">
            <Link to="/">
              <button className="text-black lg:text-xs font-semibold tracking-widest hover:text-orange-300">
                Iniciar sesión
              </button>
            </Link>
            <Link to="/">
              <button className="bg-gradient-to-t from-orange-300 to-yellow-200 text-black font-semibold border border-zinc-700 shadow-sm shadow-zinc-500 py-1.5 px-4 tracking-widest rounded-lg lg:text-xs lg:mr-5 hover:text-zinc-600 hover:ring-zinc-900 hover:ring-1 ease-in duration-100">
                Registrarse
              </button>
            </Link>
          </div>

          <div className="relative">
            <NavBarResponsive />
            <Redes />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBarHeader;
