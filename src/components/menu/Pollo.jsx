import React from "react";
import { useMenu } from "../../context/menuContext";
import Cantidad from "./Cantidad";
import Plato from "./Plato";
import PorcionPollo from "./PorcionPollo";
import SubmitCarritoButton from "./SubmitCarritoButton";

const Pollo = () => {
  const { menu, handleSubmit } = useMenu();

  return (
    <div className="h-screen max-w-[90%] xl:max-w-[80%] m-auto text-center flex flex-col items-center">
      <h3 className="font-bold text-red-600 text-xl sm:text-2xl xl:text-4xl pb-10 tracking-widest text-center">
        Pollo a la parrilla
      </h3>
      <div className="flex items-center justify-center gap-5 mb-10">
        <Plato
          imagen={
            <img
              src={"/img/pollo a la parrilla.jpg"}
              alt={"pollo a la parrilla"}
            />
          }
          nombre={"pollo a la parrilla"}
        />
        <PorcionPollo />
      </div>

      {menu.cantidad > 0 ? (
        <SubmitCarritoButton handleSubmit={handleSubmit} disabled={false} />
      ) : (
        <SubmitCarritoButton handleSubmit={handleSubmit} disabled={true} />
      )}
    </div>
  );
};

export default Pollo;
