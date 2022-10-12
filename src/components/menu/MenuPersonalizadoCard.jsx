const MenuPersonalizadoCard = ({
  preparacionSeleccionada,
  guarnicionSeleccionada = "",
}) => {
  return (
    <>
      <h3 className="font-semibold text-zinc-700 text-center text-xl sm:text-2xl xl:text-3xl py-6">
        El menú seleccionado es:{" "}
        <span className="font-bold capitalize">
          {preparacionSeleccionada.nombre}
        </span>
        {guarnicionSeleccionada !== "" && (
          <span className="font-bold capitalize">
            {" "}
            con {guarnicionSeleccionada.nombre}
          </span>
        )}
      </h3>
      <div className="flex justify-center items-center gap-5 mb-10">
        <div className="text-center">
          <div className="w-36 h-36 xl:w-52 xl:h-52 rounded-full border-2 border-orange-400 flex justify-center items-center shadow-md shadow-gray-500  bg-white">
            <div className="w-32 h-32 xl:w-48 xl:h-48 rounded-full border-2 border-orange-300 flex justify-center items-center overflow-hidden text-center">
              <img
                src={`/img/${preparacionSeleccionada.nombre}.jpg`}
                alt={preparacionSeleccionada.monbre}
              />
            </div>
          </div>
          <h3 className="font-semibold pt-2">
            {preparacionSeleccionada.nombre}
          </h3>
        </div>

        {guarnicionSeleccionada !== "" && (
          <>
            <div className="flex justify-center gap-5">
              <div className="text-center">
                <div className="w-36 h-36 xl:w-52 xl:h-52 rounded-full border-2 border-orange-400 flex justify-center items-center shadow-md shadow-gray-500  bg-white">
                  <div className="w-32 h-32 xl:w-48 xl:h-48 rounded-full border-2 border-orange-300 flex justify-center items-center overflow-hidden text-center">
                    <img
                      src={`/img/${guarnicionSeleccionada.nombre}.jpg`}
                      alt={guarnicionSeleccionada.monbre}
                    />
                  </div>
                </div>
                <h3 className="font-semibold pt-2">
                  {guarnicionSeleccionada.nombre}
                </h3>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default MenuPersonalizadoCard;
