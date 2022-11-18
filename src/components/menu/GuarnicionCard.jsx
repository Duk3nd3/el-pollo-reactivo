import { useSelector } from "react-redux";
import Plato from "./Plato";

const GuarnicionCard = ({ guarnicion, handleGuarnicionSeleccionada }) => {
  const menu = useSelector((state) => state.menu);

  return (
    <li className="flex flex-col items-center">
      <div>
        <Plato
          imagen={
            <img
              src={`/img/${guarnicion.nombre}.jpg`}
              alt={guarnicion.nombre}
            />
          }
          seleccion={menu.guarnicion}
          nombre={guarnicion.nombre}
          onClick={() => handleGuarnicionSeleccionada(guarnicion)}
        />
      </div>
      <h3 className="font-semibold">{guarnicion.nombre}</h3>
    </li>
  );
};

export default GuarnicionCard;
