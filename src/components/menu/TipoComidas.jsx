import { useMenu } from "../../context/menuContext";
import Plato from "./Plato";

const TipoComidas = ({ handleComidas, comida }) => {
  const { tipoDeComidaSeleccionada } = useMenu();

  return (
    <li className="flex flex-col items-center">
      <div>
        <Plato
          imagen={<img src={`/img/${comida.nombre}.jpg`} alt={comida.nombre} />}
          seleccion={tipoDeComidaSeleccionada}
          nombre={comida.nombre}
          onClick={() => handleComidas(comida.nombre)}
        />
        <h3 className="font-semibold pt-2 text-center">{comida.nombre}</h3>
      </div>
    </li>
  );
};

export default TipoComidas;
