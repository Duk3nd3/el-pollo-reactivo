import React, { useState } from "react";

import PreparacionesCard from "../components/menu/PreparacionesCard";
import Guarniciones from "../components/menu/Guarniciones";
import TipoMenu from "../components/menu/TipoMenu";
import MenuPersonalizadoCard from "../components/menu/MenuPersonalizadoCard";

const MenuPersonalizado = ({ preparaciones, guarniciones }) => {
  const [tipoMenuSeleccionado, setTipoMenuSeleccionado] = useState("");
  const [preparacionSeleccionada, setPreparacionSeleccionada] = useState("");
  const [guarnicionSeleccionada, setGuarnicionSeleccionada] = useState("");
  const [menuPersonalizadoCorrecto, setMenuPersonalizadoCorrecto] =
    useState(false);

  return (
    <div className="pt-[180px]">
      <h2 className="uppercase font-bold text-red-600 text-4xl pt-16 pb-14 text-center">
        Armá tu Menú como quieras
      </h2>
      <div
        id="tipo"
        className="w-full max-w-[85%] mx-auto flex flex-col items-center"
      >
        <TipoMenu
          setTipoMenuSeleccionado={setTipoMenuSeleccionado}
          tipoMenuSeleccionado={tipoMenuSeleccionado}
          setPreparacionSeleccionada={setPreparacionSeleccionada}
          setGuarnicionSeleccionada={setGuarnicionSeleccionada}
        />
        {tipoMenuSeleccionado && (
          <>
            <h3 className="font-semibold text-zinc-700 text-3xl pb-6 pt-3">
              {`Como quieres que preparemos tu ${tipoMenuSeleccionado}`}
            </h3>
            <ul className="max-w-[85%] mx-auto flex justify-center flex-wrap gap-5 pb-10">
              {preparaciones
                ?.filter((item) => item.categoria == tipoMenuSeleccionado)
                ?.map((preparacion, i) => (
                  <PreparacionesCard
                    preparacion={preparacion}
                    setPreparacionSeleccionada={setPreparacionSeleccionada}
                    preparacionSeleccionada={preparacionSeleccionada}
                    setMenuPersonalizadoCorrecto={setMenuPersonalizadoCorrecto}
                    guarnicionSeleccionada={guarnicionSeleccionada}
                    setGuarnicionSeleccionada={setGuarnicionSeleccionada}
                    key={i}
                  />
                ))}
            </ul>
          </>
        )}
        {preparacionSeleccionada !== "" &&
          preparacionSeleccionada.nombre !== "cazuela de pollo" &&
          preparacionSeleccionada.nombre !== "sandwich de milanesa" &&
          preparacionSeleccionada.nombre !== "pastel de papa" &&
          tipoMenuSeleccionado !== "" &&
          tipoMenuSeleccionado !== "pasta" && (
            <>
              <h3 className="font-semibold text-zinc-700 text-3xl py-6">
                Elige una guarnicion
              </h3>
              <ul className="max-w-[85%] mx-auto flex justify-center flex-wrap gap-5 pb-10">
                {guarniciones?.map((guarnicion, i) => (
                  <Guarniciones
                    guarnicion={guarnicion}
                    setGuarnicionSeleccionada={setGuarnicionSeleccionada}
                    guarnicionSeleccionada={guarnicionSeleccionada}
                    setMenuPersonalizadoCorrecto={setMenuPersonalizadoCorrecto}
                    key={i}
                  />
                ))}
              </ul>
            </>
          )}
        {menuPersonalizadoCorrecto && (
          <MenuPersonalizadoCard
            preparacionSeleccionada={preparacionSeleccionada}
            guarnicionSeleccionada={guarnicionSeleccionada}
            tipoMenuSeleccionado={tipoMenuSeleccionado}
          />
        )}
      </div>
    </div>
  );
};

export default MenuPersonalizado;
