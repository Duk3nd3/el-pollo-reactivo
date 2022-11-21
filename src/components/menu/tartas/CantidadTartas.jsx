import { useEffect } from "react";
import { useMenu } from "../../../context/menuContext";

const CantidadTartas = ({ sabor }) => {
  const { contadorTartas, setContadorTartas, menu, setMenu } = useMenu();

  const cambiarNombreDeSabor = (sabor) => {
    return sabor === "jamon y queso"
      ? "jamon"
      : sabor === "jamon y queso completa"
      ? "jamonCompleta"
      : sabor;
  };

  useEffect(() => {
    setMenu({
      ...menu,
      guarnicion: { ...contadorTartas },
      cantidad: Object.values(contadorTartas).reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        0
      ),
    });
  }, [contadorTartas]);

  const handleClick = (e) => {
    if (e.target.innerHTML === "+") {
      setContadorTartas({
        ...contadorTartas,
        [`${cambiarNombreDeSabor(sabor)}`]:
          contadorTartas[`${cambiarNombreDeSabor(sabor)}`] + 1,
      });
    } else if (contadorTartas[`${cambiarNombreDeSabor(sabor)}`] > 0) {
      setContadorTartas({
        ...contadorTartas,
        [`${cambiarNombreDeSabor(sabor)}`]:
          contadorTartas[`${cambiarNombreDeSabor(sabor)}`] - 1,
      });
    }
  };

  return (
    <>
      <div className="bg-zinc-700 order border-zinc-500 shadow-md shadow-zinc-700 my-2 w-fit mx-auto text-xl">
        <button
          onClick={handleClick}
          className="bg-orange-300 font-bold w-8 py-1"
        >
          -
        </button>
        <input
          type="text"
          value={contadorTartas[`${cambiarNombreDeSabor(sabor)}`]}
          readOnly
          className="w-10 text-center bg-zinc-700 text-white"
        />
        <button
          onClick={handleClick}
          className="bg-orange-300 font-bold w-8 py-1"
        >
          +
        </button>
      </div>
    </>
  );
};

export default CantidadTartas;
