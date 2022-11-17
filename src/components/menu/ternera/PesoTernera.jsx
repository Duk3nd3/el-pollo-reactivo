import { useDispatch } from "react-redux";
import { addCantidad } from "../../../features/menu/menuSlice";

const PesoTernera = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(addCantidad(parseFloat(e.target.value)));
  };

  return (
    <form className="flex flex-wrap gap-2">
      <fieldset className="border border-zinc-500 px-3 text-center">
        <legend className="px-1 font-semibold">Cantidad (gramos):</legend>

        <div className="py-1">
          <input
            onChange={handleChange}
            type="radio"
            id="gramos"
            name="peso"
            value={0.5}
          />
          <label htmlFor="gramos" className="ml-1 font-semibold">
            500 <span className="text-red-500">grs</span>
          </label>
        </div>

        <div className="py-1">
          <input
            onChange={handleChange}
            type="radio"
            id="gramos"
            name="peso"
            value={1}
          />
          <label htmlFor="gramos" className="ml-1 font-semibold">
            1000 <span className="text-red-500">grs</span>
          </label>
        </div>

        <div className="py-1">
          <input
            onChange={handleChange}
            type="radio"
            id="gramos"
            name="peso"
            value={1.5}
          />
          <label htmlFor="gramos" className="ml-1 font-semibold">
            1500 <span className="text-red-500">grs</span>
          </label>
        </div>
        <div className="py-1">
          <input
            onChange={handleChange}
            type="radio"
            id="gramos"
            name="peso"
            value={2}
          />
          <label htmlFor="gramos" className="ml-1 font-semibold">
            2000 <span className="text-red-500">grs</span>
          </label>
        </div>
      </fieldset>
    </form>
  );
};

export default PesoTernera;
