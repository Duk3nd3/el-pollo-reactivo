import { useEffect, useState } from "react";
import { useMenu } from "../../context/menuContext";

const Cantidad = ({ porcion = 1 }) => {
  const { menu, setMenu } = useMenu();
  const [contador, setContador] = useState(0);

  useEffect(() => {
    setMenu({ ...menu, cantidad: porcion * contador });
  }, [contador, porcion]);

  const handleClick = (e) => {
    if (e.target.innerHTML === "+") {
      setContador(contador + 1);
    } else if (menu.cantidad > 0) {
      setContador(contador - 1);
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
          value={contador}
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

export default Cantidad;
