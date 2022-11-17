import { useSelector } from "react-redux";
import Plato from "../Plato";

const PreparacionesCard = ({ preparacion, handlePreparacionSeleccionada }) => {
  const menu = useSelector((state) => state.menu);

  return (
    <li className="flex flex-col items-center">
      <div>
        <Plato
          imagen={
            <img
              src={`/img/${preparacion.nombre}.jpg`}
              alt={preparacion.monbre}
            />
          }
          seleccion={menu.ingredientePrincipal}
          nombre={preparacion.nombre}
          onClick={() => handlePreparacionSeleccionada(preparacion)}
        />
      </div>
      <h3 className="font-semibold pt-2">{preparacion.nombre}</h3>
    </li>
  );
};

export default PreparacionesCard;
