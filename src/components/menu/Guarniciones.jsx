import React from "react";

const Guarniciones = ({
  guarnicion,
  guarnicionSeleccionada,
  setGuarnicionSeleccionada,
}) => {
  return (
    <div className="text-center">
      <div
        onClick={() => setGuarnicionSeleccionada(guarnicion)}
        className={`w-44 h-44 rounded-full border-2 border-orange-400 flex justify-center items-center my-2 shadow-md shadow-gray-500 hover:ring ring-red-700 hover:cursor-pointer bg-white ${
          guarnicionSeleccionada.nombre === guarnicion.nombre ? "ring" : ""
        }`}
      >
        <div className="w-40 h-40 rounded-full border-2 border-orange-300 flex justify-center items-center overflow-hidden">
          <img src={`/img/${guarnicion.nombre}.jpg`} alt={guarnicion.monbre} />
        </div>
      </div>
      <h3 className="capitalize font-semibold">{guarnicion.nombre}</h3>
    </div>
  );
};

export default Guarniciones;
