import { useMenu } from "../../context/menuContext";
import CantidadEmpanadas from "./CantidadEmpanadas";
import EmpanadaCard from "./EmpanadaCard";

const ListaEmpanadas = () => {
  const { saboresDeEmpanadas } = useMenu();

  return (
    <>
      <h3 className="font-bold text-red-600 text-xl sm:text-2xl xl:text-4xl pb-20 xl:pt-10 tracking-widest text-center">
        Elige un sabor
      </h3>
      <ul className="flex justify-center flex-wrap gap-2 sm:gap-3 lg:gap-4 xl:gap-5 pb-10">
        {saboresDeEmpanadas.map((sabor, i) => (
          <div key={i}>
            <EmpanadaCard sabor={sabor} />
            <CantidadEmpanadas sabor={sabor} />
          </div>
        ))}
      </ul>
    </>
  );
};

export default ListaEmpanadas;
