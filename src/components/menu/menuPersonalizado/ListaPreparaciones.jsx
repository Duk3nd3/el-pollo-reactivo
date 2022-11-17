import { useMenu } from "../../../context/menuContext";
import { useSelector } from "react-redux";
import PreparacionesCard from "./PreparacionesCard";

const ListaPreparaciones = ({ handlePreparacionSeleccionada }) => {
  const menu = useSelector((state) => state.menu);
  const { preparaciones } = useMenu();

  return (
    <>
      <h3 className="font-bold text-red-600 text-xl sm:text-2xl xl:text-4xl pb-20 xl:pt-5 tracking-widest text-center">
        {`Como quieres que preparemos tu `}
        <span className="font-bold text-red-600 capitalize">
          {menu.ingredienteSeleccionado}
        </span>
      </h3>
      <ul className="flex justify-center flex-wrap gap-2 sm:gap-3 lg:gap-4 xl:gap-5 pb-10">
        {preparaciones
          ?.filter((item) => item.categoria == menu.ingredienteSeleccionado)
          ?.map((preparacion) => (
            <PreparacionesCard
              preparacion={preparacion}
              handlePreparacionSeleccionada={handlePreparacionSeleccionada}
              key={preparacion.id}
            />
          ))}
      </ul>
    </>
  );
};

export default ListaPreparaciones;
