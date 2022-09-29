import React from "react";

const MenuCard = ({ item }) => {
  return (
    <li className="w-[420px] h-[240px] bg-yellow-100 overflow-hidden border-zinc-700 shadow-md shadow-zinc-600 relative flex items-center hover:ring-4 hover:ring-orange-400 hover:cursor-pointer">
      <div
        className={`w-[300px] h-[300px] border-8 rounded-full border-white absolute -left-[85px] -top-8  overflow-hidden`}
      >
        <img
          className="hover:scale-110 origin-bottom-left ease-in duration-200"
          src={item.imagen}
          alt={item.titulo}
        />
      </div>
      <div className="absolute left-1/2 flex flex-col justify-center w-1/2 h-full my-auto border-zinc-400 text-center hover:scale-95 ease-in duration-200">
        <p className="font-bold text-xl capitalize">{item.titulo}</p>
        <p className="text-sm">
          ({item.ingredientes.map((ingrediente) => ingrediente).join(", ")})
        </p>
      </div>
    </li>
  );
};

export default MenuCard;
