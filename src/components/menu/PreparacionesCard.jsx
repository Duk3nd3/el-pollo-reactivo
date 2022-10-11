const PreparacionesCard = ({
  preparacion,
  preparacionSeleccionada,
  setPreparacionSeleccionada,
  setGuarnicionSeleccionada,
  handleRef,
}) => {
  const handlePreparacion = (preparacion) => {
    setPreparacionSeleccionada(preparacion);
    setGuarnicionSeleccionada("");
    handleRef("guarnicion", preparacion.nombre);
  };

  return (
    <li className="flex flex-col items-center ">
      <div
        onClick={() => handlePreparacion(preparacion)}
        className={`w-48 h-48 rounded-full border-2 border-orange-400 flex justify-center items-center shadow-md shadow-gray-500 hover:ring  hover:cursor-pointer bg-white hover:scale-105 ease-in duration-200 ring-red-700 ${
          preparacionSeleccionada.nombre === preparacion.nombre ? "ring " : ""
        }`}
      >
        <div className="w-44 h-44 rounded-full border-2 border-orange-300 flex justify-center items-center overflow-hidden text-center">
          <img
            src={`/img/${preparacion.nombre}.jpg`}
            alt={preparacion.monbre}
          />
        </div>
      </div>
      <h3 className="capitalize font-semibold pt-2">{preparacion.nombre}</h3>
    </li>
  );
};

export default PreparacionesCard;
