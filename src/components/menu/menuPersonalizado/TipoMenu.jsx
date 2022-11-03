import { GiChickenOven, GiMeat, GiNoodles } from "react-icons/gi";
import { FaFish } from "react-icons/fa";
import Plato from "../Plato";
import { useMenu } from "../../../context/menuContext";

const TipoMenu = ({ handleTipoMenu }) => {
  const { tipoMenuSeleccionado } = useMenu();

  return (
    <div className="max-w-[90%] m-auto flex flex-col justify-center items-center t-[220px]">
      <h3 className="font-bold text-red-600 text-xl sm:text-2xl xl:text-4xl pb-20 xl:pt-10 tracking-widest text-center">
        Elije tu ingrediente principal
      </h3>

      <div className="flex justify-center flex-wrap gap-2 sm:gap-3 lg:gap-4 xl:gap-5 gap-y-3">
        <div>
          <Plato
            imagen={
              <GiChickenOven className="text-yellow-700 text-7xl sm:text-8xl xl:text-9xl" />
            }
            seleccion={tipoMenuSeleccionado}
            nombre={"pollo"}
            onClick={() => handleTipoMenu("pollo")}
          />
          <p className="text-center font-semibold capitalize">pollo</p>
        </div>

        <div>
          <Plato
            imagen={
              <GiMeat className="text-red-800 text-7xl sm:text-8xl xl:text-9xl" />
            }
            seleccion={tipoMenuSeleccionado}
            nombre={"ternera"}
            onClick={() => handleTipoMenu("ternera")}
          />
          <p className="text-center font-semibold capitalize">ternera</p>
        </div>

        <div>
          <Plato
            imagen={
              <FaFish className="text-blue-900 text-7xl sm:text-8xl xl:text-9xl" />
            }
            seleccion={tipoMenuSeleccionado}
            nombre={"pescado"}
            onClick={() => handleTipoMenu("pescado")}
          />
          <p className="text-center font-semibold capitalize">pescado</p>
        </div>

        <div>
          <Plato
            imagen={
              <GiNoodles className="text-orange-300 text-7xl sm:text-8xl xl:text-9xl" />
            }
            seleccion={tipoMenuSeleccionado}
            nombre={"pasta"}
            onClick={() => handleTipoMenu("pasta")}
          />
          <p className="text-center font-semibold capitalize">pasta</p>
        </div>
      </div>
    </div>
  );
};

export default TipoMenu;
