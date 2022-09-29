import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Link to="/">
      <header className="flex justify-center">
        <img
          src="/img/pollo-comilon-header.png"
          alt="header El Pollo Comilon"
          width={750}
          className="hover:scale-105 ease-in duration-150 cursor-pointer pb-1"
        />
      </header>
    </Link>
  );
};

export default Header;
