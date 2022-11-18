import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useMenu } from "../context/menuContext";
import TipoComidas from "../components/menu/TipoComidas";
import MenuPersonalizado from "../components/menu/menuPersonalizado/MenuPersonalizado";
import Pollo from "../components/menu/pollo/Pollo";
import Ternera from "../components/menu/ternera/Ternera";
import Guarniciones from "../components/menu/guarniciones/Guarniciones";
import SubmitCarritoButton from "../components/menu/SubmitCarritoButton";
import ListaEmpanadas from "../components/menu/empanadas/ListaEmpanadas";
import ListaTartas from "../components/menu/tartas/ListaTartas";

const Menu = () => {
  const menu = useSelector((state) => state.menu);

  const tipoMenuRef = useRef();
  const menuesRef = useRef();
  const {
    tipoDeComidas,
    handleTipoDeComidas,
    moveIntoView,
    resetearTodoElMenu,
    handleSubmit,
  } = useMenu();

  useEffect(() => {
    resetearTodoElMenu();
  }, []);

  const handleSeleccionDeComida = (comida) => {
    handleTipoDeComidas(comida);
    moveIntoView(tipoMenuRef);
  };

  return (
    <div className="h-screen">
      <h2
        ref={menuesRef}
        className="font-bold text-red-600 text-xl sm:text-2xl xl:text-4xl pt-[260px] b-10 text-center tracking-widest pb-20"
      >
        Que te gustaria comer hoy?
      </h2>
      <ul className="max-w-[95%] xl:max-w-[80%] mx-auto flex justify-center flex-wrap gap-2 sm:gap-3 lg:gap-4 xl:gap-5 pb-10">
        {tipoDeComidas.map((tipo) => (
          <TipoComidas
            handleSeleccionDeComida={handleSeleccionDeComida}
            tipo={tipo}
            key={tipo.id}
          />
        ))}
      </ul>

      <div ref={tipoMenuRef} className="pt-[220px]">
        {menu.tipoDeMenuSeleccionado === "menu personalizado" && (
          <MenuPersonalizado />
        )}
        {menu.tipoDeMenuSeleccionado === "carne a la parrilla" && <Ternera />}
        {menu.tipoDeMenuSeleccionado === "pollo a la parrilla" && <Pollo />}
        {menu.tipoDeMenuSeleccionado === "guarniciones" && <Guarniciones />}
        {menu.tipoDeMenuSeleccionado === "empanadas" && <ListaEmpanadas />}
        {menu.tipoDeMenuSeleccionado === "tartas" && <ListaTartas />}
      </div>

      <div className="text-center pt-4 pb-16">
        {menu.tipoDeMenuSeleccionado &&
        menu.tipoDeMenuSeleccionado !== "menu personalizado" ? (
          <SubmitCarritoButton
            handleSubmit={handleSubmit}
            disabled={menu.cantidad > 0 ? false : true}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Menu;
