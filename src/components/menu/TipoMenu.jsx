import { GiChickenOven, GiMeat, GiNoodles } from "react-icons/gi";
import { FaFish } from "react-icons/fa";

const TipoMenu = ({
  tipoMenuSeleccionado,
  setTipoMenuSeleccionado,
  setPreparacionSeleccionada,
  setGuarnicionSeleccionada,
  handleRef,
}) => {
  const handleTipoMenu = (tipo) => {
    setTipoMenuSeleccionado(tipo);
    setPreparacionSeleccionada("");
    setGuarnicionSeleccionada("");
    handleRef("preparacion");
  };

  return (
    <div className="max-w-[85%] m-auto flex flex-col justify-center items-center pb-20">
      <h3 className="font-semibold text-zinc-700 text-3xl pb-6 pt-10">
        Elije tu ingrediente principal
      </h3>
      {/* platos */}
      <div className="w-full flex justify-center flex-wrap gap-5">
        <div>
          <div
            onClick={() => handleTipoMenu("pollo")}
            className={`mb-2 w-44 h-44 rounded-full border-2 border-orange-400 flex justify-center items-center shadow-md shadow-gray-500 hover:scale-105 ease-in duration-200 hover:ring ring-red-700 hover:cursor-pointer bg-white ${
              tipoMenuSeleccionado === "pollo" ? "ring" : ""
            }`}
          >
            <div className="w-40 h-40 rounded-full border-2 border-orange-300 flex justify-center items-center">
              <GiChickenOven size={120} className="text-yellow-700" />
            </div>
          </div>
          <p className="text-center font-semibold capitalize">pollo</p>
        </div>

        <div>
          <div
            onClick={() => handleTipoMenu("ternera")}
            className={`mb-2 w-44 h-44 rounded-full border-2 border-orange-400 flex justify-center items-center shadow-md shadow-gray-500 hover:scale-105 ease-in duration-200 hover:ring ring-red-700 hover:cursor-pointer bg-white ${
              tipoMenuSeleccionado === "ternera" ? "ring" : ""
            }`}
          >
            <div className="w-40 h-40 rounded-full border-2 border-orange-300 flex justify-center items-center">
              <GiMeat size={120} className="text-red-800" />
            </div>
          </div>
          <p className="text-center font-semibold capitalize">ternera</p>
        </div>

        <div>
          <div
            onClick={() => handleTipoMenu("pescado")}
            className={`mb-2 w-44 h-44 rounded-full border-2 border-orange-400 flex justify-center items-center shadow-md shadow-gray-500 hover:scale-105 ease-in duration-200 hover:ring ring-red-700 hover:cursor-pointer bg-white ${
              tipoMenuSeleccionado === "pescado" ? "ring" : ""
            }`}
          >
            <div className="w-40 h-40 rounded-full border-2 border-orange-300 flex justify-center items-center">
              <FaFish size={120} className="text-blue-900" />
            </div>
          </div>
          <p className="text-center font-semibold capitalize">pescado</p>
        </div>

        <div>
          <div
            onClick={() => handleTipoMenu("pasta")}
            className={`mb-2 w-44 h-44 rounded-full border-2 border-orange-400 flex justify-center items-center shadow-md shadow-gray-500 hover:scale-105 ease-in duration-200 hover:ring ring-red-700 hover:cursor-pointer bg-white ${
              tipoMenuSeleccionado === "pasta" ? "ring" : ""
            }`}
          >
            <div className="w-40 h-40 rounded-full border-2 border-orange-300 flex justify-center items-center">
              <GiNoodles size={120} className="text-orange-300" />
            </div>
          </div>
          <p className="text-center font-semibold capitalize">pastas</p>
        </div>
      </div>
    </div>
  );
};

export default TipoMenu;
