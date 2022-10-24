import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="h-[120px] flex justify-center items-center">
        <div className="hidden sm:block px-1">
          <Link to="/">
            <img
              src="/img/pollo-comilon-header.png"
              alt="El Pollo Comilon"
              width={750}
              className=""
            />
          </Link>
        </div>
        <div className="flex justify-center items-center gap-5 cursor-pointer px-2">
          <div className="sm:hidden">
            <img src="/img/polloADer.png" alt="logo El Pollo Comilon" />
          </div>
          <div className="sm:hidden ">
            <img src="/img/el pollo comilon.png" alt="El Pollo Comilon" />
          </div>
          <div className="sm:hidden">
            <img src="/img/polloAIzq.png" alt="logo El Pollo Comilon" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
