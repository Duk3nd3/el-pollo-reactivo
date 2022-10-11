import React, { useState, useRef } from "react";

import PreparacionesCard from "../components/menu/PreparacionesCard";
import Guarniciones from "../components/menu/Guarniciones";
import TipoMenu from "../components/menu/TipoMenu";
import MenuPersonalizadoCard from "../components/menu/MenuPersonalizadoCard";

const MenuPersonalizado = ({ preparaciones, guarniciones }) => {
  const preparacionRef = useRef();
  const guarnicionRef = useRef();
  const menuRef = useRef();

  const [tipoMenuSeleccionado, setTipoMenuSeleccionado] = useState("");
  const [preparacionSeleccionada, setPreparacionSeleccionada] = useState("");
  const [guarnicionSeleccionada, setGuarnicionSeleccionada] = useState("");

  const handleRef = (seccion, tipoPreparacion = "") => {
    if (seccion === "preparacion") {
      moveIntoView(preparacionRef);
    }
    if (seccion === "guarnicion") {
      if (
        tipoMenuSeleccionado === "pasta" ||
        tipoPreparacion === "pastel de papa" ||
        tipoPreparacion === "cazuela de pollo" ||
        tipoPreparacion === "sandwich de milanesa"
      ) {
        moveIntoView(menuRef);
        return;
      }
      moveIntoView(guarnicionRef);
    }
    if (seccion === "menu") {
      moveIntoView(menuRef);
    }
  };

  const moveIntoView = (ref) => {
    setTimeout(() => {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }, 150);
  };

  return (
    <div className="h-screen">
      <h2 className="uppercase font-bold text-red-600 text-4xl pt-[220px] pb-14 text-center ">
        Armá tu Menú como quieras
      </h2>
      <div id="tipo">
        <TipoMenu
          setTipoMenuSeleccionado={setTipoMenuSeleccionado}
          tipoMenuSeleccionado={tipoMenuSeleccionado}
          setPreparacionSeleccionada={setPreparacionSeleccionada}
          setGuarnicionSeleccionada={setGuarnicionSeleccionada}
          handleRef={handleRef}
        />
      </div>
      {tipoMenuSeleccionado && (
        <div
          ref={preparacionRef}
          id="preparacion"
          className="w-full max-w-[85%] m-auto flex flex-col justify-start items-center"
        >
          <h3 className="font-semibold text-zinc-700 text-3xl pb-6 pt-3 text-center">
            {`Como quieres que preparemos tu `}
            <span className="font-bold capitalize">{tipoMenuSeleccionado}</span>
          </h3>
          <ul className="max-w-[85%] m-auto flex justify-center flex-wrap gap-5 pb-10">
            {preparaciones
              ?.filter((item) => item.categoria == tipoMenuSeleccionado)
              ?.map((preparacion, i) => (
                <PreparacionesCard
                  preparacion={preparacion}
                  preparacionSeleccionada={preparacionSeleccionada}
                  setPreparacionSeleccionada={setPreparacionSeleccionada}
                  setGuarnicionSeleccionada={setGuarnicionSeleccionada}
                  handleRef={handleRef}
                  key={i}
                />
              ))}
          </ul>
        </div>
      )}

      {preparacionSeleccionada !== "" &&
        tipoMenuSeleccionado !== "pasta" &&
        preparacionSeleccionada.nombre !== "pastel de papa" &&
        preparacionSeleccionada.nombre !== "cazuela de pollo" &&
        preparacionSeleccionada.nombre !== "sandwich de milanesa" && (
          <div
            ref={guarnicionRef}
            className="w-full max-w-[85%] m-auto flex flex-col justify-start items-center"
          >
            <h3 className="font-semibold text-zinc-700 text-3xl py-6">
              Elige una guarnicion
            </h3>
            <ul className="max-w-[85%] mx-auto flex justify-center flex-wrap gap-5 pb-10">
              {guarniciones?.map((guarnicion, i) => (
                <Guarniciones
                  guarnicion={guarnicion}
                  setGuarnicionSeleccionada={setGuarnicionSeleccionada}
                  guarnicionSeleccionada={guarnicionSeleccionada}
                  handleRef={handleRef}
                  key={i}
                />
              ))}
            </ul>
          </div>
        )}
      {preparacionSeleccionada !== "" &&
        (guarnicionSeleccionada !== "" ||
          preparacionSeleccionada.nombre === "pastel de papa" ||
          preparacionSeleccionada.nombre === "cazuela de pollo" ||
          preparacionSeleccionada.nombre === "sandwich de milanesa" ||
          preparacionSeleccionada.categoria === "pasta") && (
          <div
            ref={menuRef}
            className="w-full max-w-[85%] m-auto flex flex-col justify-start items-center"
          >
            <MenuPersonalizadoCard
              preparacionSeleccionada={preparacionSeleccionada}
              guarnicionSeleccionada={guarnicionSeleccionada}
            />
          </div>
        )}
    </div>
    // </div>
  );
};

export default MenuPersonalizado;
