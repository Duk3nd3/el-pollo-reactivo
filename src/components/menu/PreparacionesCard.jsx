const PreparacionesCard = ({
  preparacion,
  preparacionSeleccionada,
  handlePreparacion,
}) => {
  return (
    <li className="flex flex-col items-center">
      <div
        onClick={() => handlePreparacion(preparacion)}
        className={`w-36 h-36 xl:w-48 xl:h-48 rounded-full border-2 border-orange-400 flex justify-center items-center shadow-md shadow-gray-500 hover:cursor-pointer bg-white hover:scale-105 ease-in duration-150 hover:border-double hover:border-8 ${
          preparacionSeleccionada.nombre === preparacion.nombre
            ? "border-8 border-double"
            : ""
        }`}
      >
        <div className="w-32 h-32 xl:w-44 xl:h-44 rounded-full border-2 border-orange-300 flex justify-center items-center overflow-hidden text-center">
          <img
            src={`/img/${preparacion.nombre}.jpg`}
            alt={preparacion.monbre}
          />
        </div>
      </div>
      <h3 className="font-semibold pt-2">{preparacion.nombre}</h3>
    </li>
  );
};

export default PreparacionesCard;
