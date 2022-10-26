import Plato from "./Plato";

const MenuPersonalizadoCard = ({
  preparacionSeleccionada,
  guarnicionSeleccionada = "",
}) => {
  return (
    <>
      <h3 className="font-semibold text-zinc-800 text-center text-xl sm:text-2xl xl:text-3xl py-6 tracking-widest">
        El menú seleccionado es:{" "}
        <span className="font-bold text-red-600 capitalize">
          {preparacionSeleccionada.nombre}
        </span>
        {guarnicionSeleccionada !== "" && (
          <span className="font-bold text-red-600 capitalize">
            {" "}
            con {guarnicionSeleccionada.nombre}
          </span>
        )}
      </h3>

      <div className="flex justify-center items-center gap-5 mb-10">
        <div className="text-center">
          <Plato
            imagen={
              <img
                src={`/img/${preparacionSeleccionada.nombre}.jpg`}
                alt={preparacionSeleccionada.monbre}
              />
            }
          />
          <h3 className="font-semibold pt-2">
            {preparacionSeleccionada.nombre}
          </h3>
        </div>

        {guarnicionSeleccionada !== "" && (
          <div className="text-center">
            <Plato
              imagen={
                <img
                  src={`/img/${guarnicionSeleccionada.nombre}.jpg`}
                  alt={guarnicionSeleccionada.monbre}
                />
              }
            />
            <h3 className="font-semibold pt-2">
              {guarnicionSeleccionada.nombre}
            </h3>
          </div>
        )}
      </div>
    </>
  );
};

export default MenuPersonalizadoCard;
