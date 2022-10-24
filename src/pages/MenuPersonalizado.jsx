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

  const handleTipoMenu = (tipo) => {
    setTipoMenuSeleccionado(tipo);
    setPreparacionSeleccionada("");
    setGuarnicionSeleccionada("");
    handleRef("preparacion");
  };

  const handlePreparacion = (preparacion) => {
    setPreparacionSeleccionada(preparacion);
    setGuarnicionSeleccionada("");
    handleRef("guarnicion", preparacion.nombre);
  };

  const handleGuarnicion = (guarnicion) => {
    setGuarnicionSeleccionada(guarnicion);
    handleRef("menu");
  };

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
    <div className="h-screen bg-fondo ">
      <h2 className="uppercase font-bold text-red-600 text-xl sm:text-2xl xl:text-4xl pt-[240px] text-center tracking-widest">
        Armá tu Menú como quieras
      </h2>
      <div id="tipo" className="mt-10">
        <TipoMenu
          tipoMenuSeleccionado={tipoMenuSeleccionado}
          handleTipoMenu={handleTipoMenu}
          handleRef={handleRef}
        />
      </div>
      {tipoMenuSeleccionado && (
        <div
          ref={preparacionRef}
          id="preparacion"
          className="max-w-[95%] xl:max-w-[80%] m-auto flex flex-col justify-start items-center mt-16"
        >
          <h3 className="font-semibold text-zinc-800 text-xl sm:text-2xl xl:text-3xl pb-6 pt-3 text-center tracking-widest">
            {`Como quieres que preparemos tu `}
            <span className="font-bold text-red-600 capitalize">
              {tipoMenuSeleccionado}
            </span>
          </h3>
          <ul className="flex justify-center flex-wrap gap-2 sm:gap-3 lg:gap-4 xl:gap-5 pb-10">
            {preparaciones
              ?.filter((item) => item.categoria == tipoMenuSeleccionado)
              ?.map((preparacion, i) => (
                <PreparacionesCard
                  preparacion={preparacion}
                  preparacionSeleccionada={preparacionSeleccionada}
                  handlePreparacion={handlePreparacion}
                  key={preparacion.id}
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
            className="max-w-[95%] xl:max-w-[80%] m-auto flex flex-col justify-start items-center mt-16"
          >
            <h3 className="font-semibold text-zinc-800 text-xl sm:text-2xl xl:text-3xl pb-6 tracking-widest">
              Elige una guarnicion
            </h3>
            <ul className="flex justify-center flex-wrap gap-2 sm:gap-3 lg:gap-4 xl:gap-5 pb-10">
              {guarniciones?.map((guarnicion, i) => (
                <Guarniciones
                  guarnicion={guarnicion}
                  guarnicionSeleccionada={guarnicionSeleccionada}
                  handleGuarnicion={handleGuarnicion}
                  key={guarnicion.id}
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
            className="w-full max-w-[95%] m-auto flex flex-col justify-start items-center mt-10"
          >
            <MenuPersonalizadoCard
              preparacionSeleccionada={preparacionSeleccionada}
              guarnicionSeleccionada={guarnicionSeleccionada}
            />
            <button className="px-5 py-3 bg-red-700 rounded-md mb-10 text-white shadow-md shadow-gray-600">
              Agregar al carrito
            </button>
          </div>
        )}
    </div>
    // </div>
  );
};

export default MenuPersonalizado;
