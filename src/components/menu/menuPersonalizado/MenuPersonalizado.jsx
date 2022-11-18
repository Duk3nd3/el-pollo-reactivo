import React, { useRef } from "react";
import { useMenu } from "../../../context/menuContext";
import { useSelector } from "react-redux";
import IngredientesPrincipales from "./IngredientesPrincipales";
import MenuPersonalizadoCard from "./MenuPersonalizadoCard";
import SubmitCarritoButton from "../SubmitCarritoButton";
import ListaPreparaciones from "./ListaPreparaciones";
import ListaGuarniciones from "../ListaGuarniciones";

const MenuPersonalizado = ({}) => {
  const preparacionRef = useRef();
  const guarnicionRef = useRef();
  const menuRef = useRef();

  const menu = useSelector((state) => state.menu);
  const {
    handleSubmit,
    seleccionarIngrediente,
    seleccionarPreparacion,
    SeleccionarGuarnicion,
    moveIntoView,
  } = useMenu();

  const handleIngredienteSeleccionado = (tipo) => {
    seleccionarIngrediente(tipo);
    handleRef("preparacion");
  };
  const handlePreparacionSeleccionada = (preparacion) => {
    seleccionarPreparacion(preparacion);
    handleRef("guarnicion", preparacion);
  };
  const handleGuarnicionSeleccionada = (guarnicion) => {
    SeleccionarGuarnicion(guarnicion);
    handleRef("menu");
  };
  const handleRef = (seccion, preparacion) => {
    if (seccion === "preparacion") {
      moveIntoView(preparacionRef);
    }
    if (seccion === "guarnicion") {
      if (preparacion.guarnicion) {
        moveIntoView(guarnicionRef);
      } else {
        moveIntoView(menuRef);
      }
    }
    if (seccion === "menu") {
      moveIntoView(menuRef);
    }
  };

  return (
    <div className="h-screen text-center">
      <div className="">
        <IngredientesPrincipales
          handleIngredienteSeleccionado={handleIngredienteSeleccionado}
        />
      </div>

      {menu.ingredienteSeleccionado && (
        <div
          ref={preparacionRef}
          className="max-w-[95%] xl:max-w-[80%] m-auto flex flex-col justify-start items-center mt-16"
        >
          <ListaPreparaciones
            handlePreparacionSeleccionada={handlePreparacionSeleccionada}
          />
        </div>
      )}

      {menu.preparacionSeleccionada.guarnicion && (
        <div
          ref={guarnicionRef}
          className="max-w-[95%] xl:max-w-[80%] m-auto flex flex-col justify-start items-center mt-16"
        >
          <ListaGuarniciones
            handleGuarnicionSeleccionada={handleGuarnicionSeleccionada}
          />
        </div>
      )}

      {(menu.guarnicion ||
        menu.preparacionSeleccionada.guarnicion === false) && (
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
