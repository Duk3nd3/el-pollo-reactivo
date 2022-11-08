import { useEffect } from "react";
import { useMenu } from "../../context/menuContext";

const CantidadEmpanadas = ({ sabor }) => {
  const { contadorEmpanadas, setContadorEmpanadas, menu, setMenu } = useMenu();

  useEffect(() => {
    setMenu({
      ...menu,
      guarnicion: { ...contadorEmpanadas },
      cantidad: Object.values(contadorEmpanadas).reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        0
      ),
    });
  }, [contadorEmpanadas]);

  const handleClick = (e) => {
    if (e.target.innerHTML === "+") {
      setContadorEmpanadas({
        ...contadorEmpanadas,
        [`${sabor === "jamon y queso" ? "jamon" : sabor}`]:
          contadorEmpanadas[`${sabor === "jamon y queso" ? "jamon" : sabor}`] +
          1,
      });
    } else if (
      contadorEmpanadas[`${sabor === "jamon y queso" ? "jamon" : sabor}`] > 0
    ) {
      setContadorEmpanadas({
        ...contadorEmpanadas,
        [`${sabor === "jamon y queso" ? "jamon" : sabor}`]:
          contadorEmpanadas[`${sabor === "jamon y queso" ? "jamon" : sabor}`] -
          1,
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
          value={
            contadorEmpanadas[`${sabor === "jamon y queso" ? "jamon" : sabor}`]
          }
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

export default CantidadEmpanadas;
