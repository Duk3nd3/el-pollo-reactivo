import React from "react";

const MenuCard = () => {
  return (
    <li className="w-[420px] h-[240px] bg-yellow-100 overflow-hidden border-zinc-700 shadow-md shadow-zinc-600 relative flex items-center">
      <div className="w-[300px] h-[300px] order-double border-8 rounded-full border-white bg-[url('/img/canelones.jpg')] bg-cover ounded-full hadow-lg shadow-gray-700 absolute -left-[85px] -top-8 hover:scale-110 origin-left ease-in duration-200"></div>
      <div className="absolute left-1/2 flex flex-col justify-center w-1/2 h-2/3 my-auto border-zinc-400 text-center">
        <p className="font-bold text-2xl">Canelones</p>
        <p className="">( Ingredientes )</p>
      </div>
    </li>
  );
};

export default MenuCard;
