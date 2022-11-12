import { useEffect, useState } from "react";
import { useMenu } from "../../../context/menuContext";
import Cantidad from "../Cantidad";

const PorcionPollo = () => {
  const { menu, setMenu } = useMenu();
  const [porcion, setPorcion] = useState(0);
  const [contador, setContador] = useState(0);

  useEffect(() => {
    setMenu({ ...menu, cantidad: contador * porcion });
  }, [contador, porcion]);

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
          <Cantidad contador={contador} setContador={setContador} />
        </>
      )}
    </div>
  );
};

export default PorcionPollo;
