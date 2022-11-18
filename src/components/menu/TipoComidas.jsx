import { useMenu } from "../../context/menuContext";
import Plato from "./Plato";

const TipoComidas = ({ handleSeleccionDeComida, tipo }) => {
  const { tipoDeComidaSeleccionada } = useMenu();

  return (
    <li className="flex flex-col items-center">
      <div>
        <Plato
          imagen={<img src={`/img/${tipo.nombre}.jpg`} alt={tipo.nombre} />}
          seleccion={tipoDeComidaSeleccionada}
          nombre={tipo.nombre}
          onClick={() => handleSeleccionDeComida(tipo.nombre)}
        />
        <h3 className="font-semibold pt-2 text-center">{tipo.nombre}</h3>
      </div>
    </li>
  );
};

export default TipoComidas;
