import React from "react";

const Menu = () => {
  return (
    <div className="w-full h-screen bg-gray-200 flex justify-center items-center gap-3">
      <div className="w-[450px] h-[250px] bg-yellow-100 overflow-hidden order-4 border-zinc-700 shadow-md shadow-zinc-600 relative flex items-center">
        <div className="w-[300px] h-[300px] order-double border-8 rounded-full border-white bg-[url('/img/canelones.jpg')] bg-cover g-center ounded-full hadow-lg shadow-gray-700 absolute -left-20 -top-8"></div>
        <div className="absolute left-[55%] flex flex-col justify-center w-[45%] h-2/3 my-auto border-l-2 border-zinc-400 text-center">
          <p className="font-bold text-2xl">Canelones</p>
          <p className="">( Ingredientes )</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
