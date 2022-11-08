import React from "react";

const Plato = ({ seleccion, imagen, nombre, onClick }) => {
  return (
    <>
      <div
        onClick={onClick}
        className={`bg-white flex justify-center items-center mb-2 w-36 sm:w-44 lg:w-48 xl:w-52 h-36 sm:h-44 lg:h-48 xl:h-52 rounded-full border-2  border-orange-600 shadow-md shadow-gray-500  ease-in duration-200  ${
          !onClick ? "" : "cursor-pointer hover:border-4 hover:scale-105"
        } ${seleccion === nombre ? "border-4 scale-105" : ""}`}
      >
        <div className="flex justify-center items-center w-32 sm:w-40 lg:w-44 xl:w-48 h-32 sm:h-40 lg:h-44 xl:h-48 rounded-full border border-orange-300 overflow-hidden">
          {imagen}
        </div>
      </div>
    </>
  );
};

export default Plato;
