import { useMenu } from "../../context/menuContext";
import Plato from "./Plato";

const GuarnicionCard = ({ guarnicion, handleGuarnicion }) => {
  const { guarnicionSeleccionada } = useMenu();

  return (
    <li className="flex flex-col items-center">
      <div>
        <Plato
          imagen={
            <img
              src={`/img/${guarnicion.nombre}.jpg`}
              alt={guarnicion.monbre}
            />
          }
          seleccion={guarnicionSeleccionada.nombre}
          nombre={guarnicion.nombre}
          onClick={() => handleGuarnicion(guarnicion)}
        />
      </div>
      <h3 className="font-semibold">{guarnicion.nombre}</h3>
    </li>
  );
};

export default GuarnicionCard;
