import { Link } from "react-router-dom";

const ImagenRegistro = ({ handleModoRegLog }) => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <img src="/img/polloAIzq.png" alt="logo El Pollo Comilon" width={60} />
      </div>
      <h2 className="text-3xl font-semibold tracking-wide mt-6 mb-4">
        Bienvenido!
      </h2>
      <p className="mb-10 font-semibold text-zinc-800">
        Registrate y accede a todas nuestras promociones y descuentos
        exclusivos!!!
      </p>
      <p className="text-xs text-zinc-800 tracking-wide font-semibold my-2">
        Si ya tienes cuenta haz click aquí
      </p>
      <button
        onClick={() => handleModoRegLog("login")}
        className="px-14 py-3 text-xs border-2 border-white rounded-full font-bold bg-white hover:text-white hover:bg-transparent ease-in duration-200 uppercase tracking-widest shadow-sm shadow-zinc-500"
      >
        Iniciar Sesión
      </button>
    </div>
  );
};

export default ImagenRegistro;
