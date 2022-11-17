import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCantidad } from "../../../features/menu/menuSlice";
import Cantidad from "../Cantidad";
import Plato from "../Plato";

const MenuPersonalizadoCard = () => {
  const menu = useSelector((state) => state.menu);
  const dispatch = useDispatch();

  const [contador, setContador] = useState(0);

  useEffect(() => {
    dispatch(addCantidad(contador));
  }, [contador]);

  const handleClick = (e) => {
    if (e.target.innerHTML === "+") {
      setContador(contador + 1);
    } else if (contador > 0) {
      setContador(contador - 1);
    }
  };

  return (
    <div className="mb-5">
      <h3 className="font-semibold text-zinc-800 text-center text-xl sm:text-2xl xl:text-3xl py-6 tracking-widest pb-20">
        El menú seleccionado es:{" "}
        <span className="font-bold text-red-600 capitalize">
          {menu.ingredientePrincipal}
        </span>
        {menu.guarnicion !== "" && (
          <span className="font-bold text-red-600 capitalize">
            {" "}
            con {menu.guarnicion}
          </span>
        )}
      </h3>

      <div className="flex justify-center items-center gap-5 mb-4">
        <div className="text-center">
          <Plato
            imagen={
              <img
                src={`/img/${menu.ingredientePrincipal}.jpg`}
                alt={menu.ingredientePrincipal}
              />
            }
          />
          <h3 className="font-semibold pt-2">{menu.ingredientePrincipal}</h3>
        </div>

        {menu.guarnicion !== "" && (
          <div className="text-center">
            <Plato
              imagen={
                <img
                  src={`/img/${menu.guarnicion}.jpg`}
                  alt={menu.guarnicion.monbre}
                />
              }
            />
            <h3 className="font-semibold pt-2">{menu.guarnicion}</h3>
          </div>
        )}
      </div>
      <p className="text-red-600 font-semibold">Selecciona una cantidad</p>
      <Cantidad handleClick={handleClick} contador={contador} />
    </div>
  );
};

export default MenuPersonalizadoCard;
