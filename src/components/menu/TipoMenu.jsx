import { GiChickenOven, GiMeat, GiNoodles } from "react-icons/gi";
import { FaFish } from "react-icons/fa";

const TipoMenu = ({ tipoMenuSeleccionado, handleTipoMenu }) => {
  return (
    <div className="max-w-[90%] m-auto flex flex-col justify-center items-center">
      <h3 className="font-semibold text-zinc-700 text-xl sm:text-2xl xl:text-3xl pb-6 xl:pt-10 tracking-widest">
        Elije tu ingrediente principal
      </h3>

      <div className="flex justify-center flex-wrap gap-x-5 gap-y-3">
        <div>
          <div
            onClick={() => handleTipoMenu("pollo")}
            className={`mb-2 w-32 h-32 sm:w-36 sm:h-36 xl:w-44 xl:h-44 rounded-full border-2 border-orange-400 flex justify-center items-center shadow-md shadow-gray-500 hover:scale-105 ease-in duration-200 hover:border-double hover:border-8 hover:cursor-pointer bg-white ${
              tipoMenuSeleccionado === "pollo" ? "border-8 border-double" : ""
            }`}
          >
            <div className="w-28 h-28 sm:w-32 sm:h-32 xl:w-40 xl:h-40 rounded-full border-2 border-orange-300 flex justify-center items-center ">
              <GiChickenOven className="text-yellow-700 text-7xl xl:text-8xl" />
            </div>
          </div>
          <p className="text-center font-semibold capitalize">pollo</p>
        </div>

        <div>
          <div
            onClick={() => handleTipoMenu("ternera")}
            className={`mb-2 w-32 h-32 sm:w-36 sm:h-36 xl:w-44 xl:h-44 rounded-full border-2 border-orange-400 flex justify-center items-center shadow-md shadow-gray-500 hover:scale-105 ease-in duration-200 hover:border-double hover:border-8 hover:cursor-pointer bg-white ${
              tipoMenuSeleccionado === "ternera" ? "border-8 border-double" : ""
            }`}
          >
            <div className="w-28 h-28 sm:w-32 sm:h-32 xl:w-40 xl:h-40 rounded-full border-2 border-orange-300 flex justify-center items-center">
              <GiMeat className="text-red-800 text-7xl xl:text-8xl" />
            </div>
          </div>
          <p className="text-center font-semibold capitalize">ternera</p>
        </div>

        <div>
          <div
            onClick={() => handleTipoMenu("pescado")}
            className={`mb-2 w-32 h-32 sm:w-36 sm:h-36 xl:w-44 xl:h-44 rounded-full border-2 border-orange-400 flex justify-center items-center shadow-md shadow-gray-500 hover:scale-105 ease-in duration-150 hover:border-double hover:border-8 hover:cursor-pointer bg-white ${
              tipoMenuSeleccionado === "pescado" ? "border-8 border-double" : ""
            }`}
          >
            <div className="w-28 h-28 sm:w-32 sm:h-32 xl:w-40 xl:h-40 rounded-full border-2 border-orange-300 flex justify-center items-center">
              <FaFish className="text-blue-900 text-7xl xl:text-8xl" />
            </div>
          </div>
          <p className="text-center font-semibold capitalize">pescado</p>
        </div>

        <div>
          <div
            onClick={() => handleTipoMenu("pasta")}
            className={`mb-2 w-32 h-32 sm:w-36 sm:h-36 xl:w-44 xl:h-44 rounded-full border-2 border-orange-400 flex justify-center items-center shadow-md shadow-gray-500 hover:scale-105 ease-in duration-200 hover:border-double hover:border-8 hover:cursor-pointer bg-white ${
              tipoMenuSeleccionado === "pasta" ? "border-8 border-double" : ""
            }`}
          >
            <div className="w-28 h-28 sm:w-32 sm:h-32 xl:w-40 xl:h-40 rounded-full border-2 border-orange-300 flex justify-center items-center">
              <GiNoodles className="text-orange-300 text-7xl xl:text-8xl" />
            </div>
          </div>
          <p className="text-center font-semibold capitalize">pastas</p>
        </div>
      </div>
    </div>
  );
};

export default TipoMenu;
