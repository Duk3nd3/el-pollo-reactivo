import React, { useRef } from "react";

import TipoMenu from "./TipoMenu";
import MenuPersonalizadoCard from "./MenuPersonalizadoCard";
import SubmitCarritoButton from "../SubmitCarritoButton";
import { useMenu } from "../../../context/menuContext";
import ListaPreparaciones from "./ListaPreparaciones";
import ListaGuarniciones from "./ListaGuarniciones";

const MenuPersonalizado = ({}) => {
  const {
    menu,
    handleSubmit,
    handleTipoMenuSeleccionado,
    handlePreparacionSeleccionada,
    handleGuarnicionSeleccionada,
    tipoMenuSeleccionado,
    preparacionSeleccionada,
    guarnicionSeleccionada,
    moveIntoView,
  } = useMenu();

  const preparacionRef = useRef();
  const guarnicionRef = useRef();
  const menuRef = useRef();

  const handleTipoMenu = (tipo) => {
    handleTipoMenuSeleccionado(tipo);
    handleRef("preparacion");
  };

  const handlePreparacion = (preparacion) => {
    handlePreparacionSeleccionada(preparacion);
    handleRef("guarnicion", preparacion.nombre);
  };

  const handleGuarnicion = (guarnicion) => {
    handleGuarnicionSeleccionada(guarnicion);
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

  return (
    <div className="h-screen text-center">
      <div id="tipo" className="">
        <TipoMenu handleTipoMenu={handleTipoMenu} />
      </div>
      {tipoMenuSeleccionado && (
        <div
          ref={preparacionRef}
          id="preparacion"
          className="max-w-[95%] xl:max-w-[80%] m-auto flex flex-col justify-start items-center mt-16"
        >
          <ListaPreparaciones handlePreparacion={handlePreparacion} />
        </div>
      )}

      {preparacionSeleccionada.guarnicion && (
        <div
          ref={guarnicionRef}
          className="max-w-[95%] xl:max-w-[80%] m-auto flex flex-col justify-start items-center mt-16"
        >
          <ListaGuarniciones handleGuarnicion={handleGuarnicion} />
        </div>
      )}
      {preparacionSeleccionada &&
        (guarnicionSeleccionada || !preparacionSeleccionada.guarnicion) && (
          <div
            ref={menuRef}
            className="w-full max-w-[95%] m-auto flex flex-col justify-start items-center mt-10"
          >
            <MenuPersonalizadoCard />
            <SubmitCarritoButton
              handleSubmit={handleSubmit}
              disabled={menu.cantidad > 0 ? false : true}
            />
          </div>
        )}
    </div>
  );
};

export default MenuPersonalizado;
