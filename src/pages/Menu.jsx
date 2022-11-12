import React, { useEffect, useRef } from "react";

import TipoComidas from "../components/menu/TipoComidas";
import MenuPersonalizado from "../components/menu/menuPersonalizado/MenuPersonalizado";
import Pollo from "../components/menu/pollo/Pollo";
import Ternera from "../components/menu/ternera/Ternera";
import { useMenu } from "../context/menuContext";
import Guarniciones from "../components/menu/guarniciones/Guarniciones";
import Empanadas from "../components/menu/empanadas/Empanadas";
import Tartas from "../components/menu/tartas/Tartas";

const Menu = () => {
  const tipoMenuRef = useRef();
  const {
    comidas,
    tipoDeComidaSeleccionada,
    handleTipoDeComidas,
    moveIntoView,
    resetearMenu,
  } = useMenu();

  useEffect(() => {
    resetearMenu();
  }, []);

  //guarda la comida seleccionada y mueve la pantalla hacia la seccion correspondiente
  const handleSeleccionDeComida = (comida) => {
    handleTipoDeComidas(comida);
    moveIntoView(tipoMenuRef);
  };

  return (
    <div className="h-screen">
      <h2 className="font-bold text-red-600 text-xl sm:text-2xl xl:text-4xl pt-[260px] b-10 text-center tracking-widest pb-20">
        Que te gustaria comer hoy?
      </h2>
      <ul className="max-w-[95%] xl:max-w-[80%] mx-auto flex justify-center flex-wrap gap-2 sm:gap-3 lg:gap-4 xl:gap-5 pb-10">
        {comidas.map((comida) => (
          <TipoComidas
            handleComidas={handleSeleccionDeComida}
            comida={comida}
            key={comida.id}
          />
        ))}
      </ul>

      <div id="tipoComida" ref={tipoMenuRef} className="pt-[220px]">
        {tipoDeComidaSeleccionada === "menu personalizado" && (
          <MenuPersonalizado />
        )}
        {tipoDeComidaSeleccionada === "carne a la parrilla" && <Ternera />}
        {tipoDeComidaSeleccionada === "pollo a la parrilla" && <Pollo />}
        {tipoDeComidaSeleccionada === "guarniciones" && <Guarniciones />}
        {tipoDeComidaSeleccionada === "empanadas" && <Empanadas />}
        {tipoDeComidaSeleccionada === "tartas" && <Tartas />}
      </div>
    </div>
  );
};

export default Menu;
