import React from "react";

const MenuPersonalizadoCard = ({
  preparacionSeleccionada,
  guarnicionSeleccionada = "",
  tipoMenuSeleccionado,
}) => {
  return (
    <>
      <h3 className="font-semibold text-zinc-700 text-3xl py-6">
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
          <div className="w-52 h-52 rounded-full border-2 border-orange-400 flex justify-center items-center shadow-md shadow-gray-500  bg-white">
            <div className="w-48 h-48 rounded-full border-2 border-orange-300 flex justify-center items-center overflow-hidden text-center">
              <img
                src={`/img/${preparacionSeleccionada.nombre}.jpg`}
                alt={preparacionSeleccionada.monbre}
              />
            </div>
          </div>
          <h3 className="capitalize font-semibold pt-2">
            {preparacionSeleccionada.nombre}
          </h3>
        </div>

        {tipoMenuSeleccionado !== "pasta" &&
          preparacionSeleccionada.nombre !== "pastel de papa" &&
          preparacionSeleccionada.nombre !== "cazuela de pollo" &&
          preparacionSeleccionada.nombre !== "sandwich de milanesa" && (
            <>
              <p className="text-5xl text-zinc-700 font-bold">+</p>
              <div className="flex justify-center gap-5">
                <div className="text-center">
                  <div className="w-52 h-52 rounded-full border-2 border-orange-400 flex justify-center items-center shadow-md shadow-gray-500  bg-white">
                    <div className="w-48 h-48 rounded-full border-2 border-orange-300 flex justify-center items-center overflow-hidden text-center">
                      <img
                        src={`/img/${guarnicionSeleccionada.nombre}.jpg`}
                        alt={guarnicionSeleccionada.monbre}
                      />
                    </div>
                  </div>
                  <h3 className="capitalize font-semibold pt-2">
                    {guarnicionSeleccionada.nombre}
                  </h3>
                </div>
              </div>
            </>
          )}
      </div>
      <button className="px-5 py-3 bg-red-700 rounded-md mb-10 text-white shadow-md shadow-gray-600">
        Agregar al carrito
      </button>
    </>
  );
};

export default MenuPersonalizadoCard;
