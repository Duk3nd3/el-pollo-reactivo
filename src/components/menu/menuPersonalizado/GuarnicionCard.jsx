import { useMenu } from "../../../context/menuContext";
import Plato from "../Plato";

const GuarnicionCard = ({ guarnicion, handleGuarnicion }) => {
  const {
    guarnicionSeleccionada,
    handleGuarnicionSeleccionada,
    tipoDeComidaSeleccionada,
  } = useMenu();

  const handleClick = (guarnicion) => {
    if (tipoDeComidaSeleccionada === "menu personalizado") {
      handleGuarnicion(guarnicion);
    } else {
      handleGuarnicionSeleccionada(guarnicion);
    }
  };

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
          onClick={() => handleClick(guarnicion)}
        />
      </div>
      <h3 className="font-semibold">{guarnicion.nombre}</h3>
    </li>
  );
};

export default GuarnicionCard;
