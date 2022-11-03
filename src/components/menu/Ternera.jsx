import React from "react";
import { useMenu } from "../../context/menuContext";
import Plato from "./Plato";
import PesoTernera from "./PesoTernera";
import SubmitCarritoButton from "./SubmitCarritoButton";

const Ternera = () => {
  const { menu, setMenu, handleSubmit } = useMenu();

  return (
    <div className="h-screen max-w-[90%] xl:max-w-[80%] m-auto text-center">
      <h3 className="font-bold text-red-600 text-xl sm:text-2xl xl:text-4xl pb-10 tracking-widest text-center">
        Carne a la parrilla x Kg
      </h3>
      <div className="flex items-center justify-center gap-5 mb-10">
        <div className="flex flex-col items-center">
          <Plato
            imagen={
              <img
                src={"/img/carne a la parrilla.jpg"}
                alt={"carne a la parrilla"}
              />
            }
            nombre={"carne a la parrilla"}
          />
        </div>
        <PesoTernera setMenu={setMenu} menu={menu} />
      </div>
      {menu.cantidad > 0 ? (
        <SubmitCarritoButton handleSubmit={handleSubmit} disabled={false} />
      ) : (
        <SubmitCarritoButton handleSubmit={handleSubmit} disabled={true} />
      )}
    </div>
  );
};

export default Ternera;
