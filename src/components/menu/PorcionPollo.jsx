import { useState } from "react";
import Cantidad from "./Cantidad";

const PorcionPollo = () => {
  const [porcion, setPorcion] = useState(0);

  const handleChange = (e) => {
    setPorcion(parseFloat(e.target.value));
  };

  return (
    <div className="flex flex-col">
      <fieldset className="border border-zinc-500 px-3 text-center mb-2">
        <legend className="px-1 font-semibold text-sm">
          Seleccione una porcion
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
      <p className="text-sm text-red-500">Cantidad de porciones</p>
      {porcion > 0 && <Cantidad porcion={porcion} />}
    </div>
  );
};

export default PorcionPollo;
