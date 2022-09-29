import React from "react";
import Bar from "./Bar";
import Header from "./Header";

const Navbar = () => {
  return (
    <div className="fixed w-full h-[124px] z-[900] bg-gradient-to-t from-orange-300 ia-yellow-500 to-yellow-200 py-1">
      <Header />
      <Bar />
    </div>
  );
};

export default Navbar;
