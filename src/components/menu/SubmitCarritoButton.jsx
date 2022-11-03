import React from "react";

const SubmitCarritoButton = ({ handleSubmit, disabled }) => {
  return (
    <button
      disabled={disabled}
      onClick={handleSubmit}
      className={`text-white hover:text-black text-sm sm:text-base font-semibold uppercase px-5 py-2 my-2 mb-10 bg-red-600 rounded-md shadow-md shadow-gray-600 ease-in duration-150 ${
        disabled && "opacity-40 hover:text-white"
      }`}
    >
      Agregar al carrito
    </button>
  );
};

export default SubmitCarritoButton;
