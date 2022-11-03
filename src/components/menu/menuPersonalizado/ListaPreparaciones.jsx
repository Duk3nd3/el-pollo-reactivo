import React from "react";
import { useMenu } from "../../../context/menuContext";
import PreparacionesCard from "./PreparacionesCard";

const ListaPreparaciones = ({ handlePreparacion }) => {
  const { preparaciones, tipoMenuSeleccionado } = useMenu();
  return (
    <>
      <h3 className="font-bold text-red-600 text-xl sm:text-2xl xl:text-4xl pb-20 xl:pt-5 tracking-widest text-center">
        {`Como quieres que preparemos tu `}
        <span className="font-bold text-red-600 capitalize">
          {tipoMenuSeleccionado}
        </span>
      </h3>
      <ul className="flex justify-center flex-wrap gap-2 sm:gap-3 lg:gap-4 xl:gap-5 pb-10">
        {preparaciones
          ?.filter((item) => item.categoria == tipoMenuSeleccionado)
          ?.map((preparacion) => (
            <PreparacionesCard
              preparacion={preparacion}
              handlePreparacion={handlePreparacion}
              key={preparacion.id}
            />
          ))}
      </ul>
    </>
  );
};

export default ListaPreparaciones;
