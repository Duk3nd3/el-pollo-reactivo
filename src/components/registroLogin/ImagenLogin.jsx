import React from "react";
import { Link } from "react-router-dom";

const ImagenLogin = ({ handleModoRegLog }) => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <img src="/img/polloAIzq.png" alt="logo El Pollo Comilon" width={60} />
      </div>
      <h2 className="text-3xl font-semibold tracking-wide my-6">Bienvenido!</h2>

      <p className="mb-7 mt-2 font-semibold text-zinc-800">
        Ingresa tus datos para ver todas nuestras promociones y descuentos
        exclusivos!!!
      </p>
      <p className="text-xs text-zinc-800 tracking-wide font-semibold my-2">
        No tienes cuenta? haz click aquí
      </p>
      <button
        onClick={() => handleModoRegLog("registro")}
        className="px-14 py-3 text-xs border-2 border-white rounded-full font-bold bg-white hover:text-white hover:bg-transparent ease-in duration-200 uppercase tracking-widest shadow-sm shadow-zinc-500"
      >
        Registrarse
      </button>
    </div>
  );
};

export default ImagenLogin;
