import React from "react";
import MenuCard from "../components/menu/MenuCard";
const Menu = () => {
  return (
    <div className="w-full h-screen bg-gray-200 pt-[200px]">
      <ul className="max-w-[85%] h-screen mx-auto flex justify-center flex-wrap  gap-5 ">
        <MenuCard />
      </ul>
    </div>
  );
};

export default Menu;
