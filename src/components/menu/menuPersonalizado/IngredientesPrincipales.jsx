import { useSelector } from "react-redux";
import Plato from "../Plato";
import { GiChickenOven, GiMeat, GiNoodles } from "react-icons/gi";
import { FaFish } from "react-icons/fa";

const IngredientesPrincipales = ({ handleIngredienteSeleccionado }) => {
  const menu = useSelector((state) => state.menu);

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
            seleccion={menu.ingredienteSeleccionado}
            nombre={"pollo"}
            onClick={() => handleIngredienteSeleccionado("pollo")}
          />
          <p className="text-center font-semibold capitalize">pollo</p>
        </div>

        <div>
          <Plato
            imagen={
              <GiMeat className="text-red-800 text-7xl sm:text-8xl xl:text-9xl" />
            }
            seleccion={menu.ingredienteSeleccionado}
            nombre={"ternera"}
            onClick={() => handleIngredienteSeleccionado("ternera")}
          />
          <p className="text-center font-semibold capitalize">ternera</p>
        </div>

        <div>
          <Plato
            imagen={
              <FaFish className="text-blue-900 text-7xl sm:text-8xl xl:text-9xl" />
            }
            seleccion={menu.ingredienteSeleccionado}
            nombre={"pescado"}
            onClick={() => handleIngredienteSeleccionado("pescado")}
          />
          <p className="text-center font-semibold capitalize">pescado</p>
        </div>

        <div>
          <Plato
            imagen={
              <GiNoodles className="text-orange-300 text-7xl sm:text-8xl xl:text-9xl" />
            }
            seleccion={menu.ingredienteSeleccionado}
            nombre={"pasta"}
            onClick={() => handleIngredienteSeleccionado("pasta")}
          />
          <p className="text-center font-semibold capitalize">pasta</p>
        </div>
      </div>
    </div>
  );
};

export default IngredientesPrincipales;
