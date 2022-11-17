import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addCantidad } from "../../../features/menu/menuSlice";
import Cantidad from "../Cantidad";

const PorcionPollo = () => {
  const dispatch = useDispatch();
  const [porcion, setPorcion] = useState(0);
  const [contador, setContador] = useState(0);

  useEffect(() => {
    dispatch(addCantidad(contador * porcion));
  }, [contador, porcion]);

  const handleClick = (e) => {
    if (e.target.innerHTML === "+") {
      setContador(contador + 1);
    } else if (contador > 0) {
      setContador(contador - 1);
    }
  };

  const handleChange = (e) => {
    setPorcion(parseFloat(e.target.value));
  };

  return (
    <div className="flex flex-col">
      <fieldset className="border border-zinc-500 px-3 text-center mb-2">
        <legend className="px-1 font-semibold text-sm">
          Seleccione un corte
        </legend>

        <div className="py-1">
          <input
            onChange={handleChange}
            type="radio"
            name="pollo"
            value={0.25}
          />
          <label htmlFor="gramos" className="ml-1 font-semibold">
            1/4 Pollo
          </label>
        </div>

        <div className="py-1">
          <input
            onChange={handleChange}
            type="radio"
            name="pollo"
            value={0.5}
          />
          <label htmlFor="gramos" className="ml-1 font-semibold">
            1/2 Pollo
          </label>
        </div>

        <div className="py-1">
          <input onChange={handleChange} type="radio" name="pollo" value={1} />
          <label htmlFor="gramos" className="ml-1 font-semibold">
            1 Pollo
          </label>
        </div>
      </fieldset>

      {porcion > 0 && (
        <>
          <p className="text-sm text-red-500">Cantidad de porciones</p>
          <Cantidad contador={contador} handleClick={handleClick} />
        </>
      )}
    </div>
  );
};

export default PorcionPollo;
