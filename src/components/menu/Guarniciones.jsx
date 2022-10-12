const Guarniciones = ({
  guarnicion,
  guarnicionSeleccionada,
  handleGuarnicion,
}) => {
  return (
    <li className="flex flex-col items-center">
      <div
        onClick={() => handleGuarnicion(guarnicion)}
        className={`w-36 h-36 xl:w-44 xl:h-44 rounded-full border-2 border-orange-400 flex justify-center items-center my-2 shadow-md shadow-gray-500 hover:ring ring-red-700 hover:cursor-pointer bg-white ${
          guarnicionSeleccionada.nombre === guarnicion.nombre ? "ring" : ""
        }`}
      >
        <div className="w-32 h-32 xl:w-40 xl:h-40 rounded-full border-2 border-orange-300 flex justify-center items-center overflow-hidden">
          <img src={`/img/${guarnicion.nombre}.jpg`} alt={guarnicion.monbre} />
        </div>
      </div>
      <h3 className="font-semibold">{guarnicion.nombre}</h3>
    </li>
  );
};

export default Guarniciones;
