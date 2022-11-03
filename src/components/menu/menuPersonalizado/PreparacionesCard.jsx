import { useMenu } from "../../../context/menuContext";
import Plato from "../Plato";

const PreparacionesCard = ({ preparacion, handlePreparacion }) => {
  const { preparacionSeleccionada } = useMenu();

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
          seleccion={preparacionSeleccionada.nombre}
          nombre={preparacion.nombre}
          onClick={() => handlePreparacion(preparacion)}
        />
      </div>
      <h3 className="font-semibold pt-2">{preparacion.nombre}</h3>
    </li>
  );
};

export default PreparacionesCard;
