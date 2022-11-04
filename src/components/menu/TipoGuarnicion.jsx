import React from "react";
import { useMenu } from "../../context/menuContext";
import Cantidad from "./Cantidad";
import ListaGuarniciones from "./menuPersonalizado/ListaGuarniciones";
import SubmitCarritoButton from "./SubmitCarritoButton";

const Guarniciones = () => {
  const { menu, handleSubmit } = useMenu();

  return (
    <div className="h-screen max-w-[95%] xl:max-w-[80%] mx-auto flex flex-col items-center gap-5">
      <ListaGuarniciones />
      {menu.guarnicion ? (
        <div>
          {menu.cantidad < 1 && (
            <p className="text-red-600 animate-pulse">
              Selecciona una cantidad
            </p>
          )}

          <Cantidad />
        </div>
      ) : (
        <p className="text-red-600 animate-pulse">Selecciona una guarnición</p>
      )}

      <SubmitCarritoButton
        handleSubmit={handleSubmit}
        disabled={menu.cantidad > 0 ? false : true}
      />
    </div>
  );
};

export default Guarniciones;
