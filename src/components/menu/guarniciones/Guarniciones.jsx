import { useEffect, useState, useRef } from "react";
import { useMenu } from "../../../context/menuContext";
import { useDispatch, useSelector } from "react-redux";
import { addCantidad } from "../../../features/menu/menuSlice";
import Cantidad from "../Cantidad";
import ListaGuarniciones from "../ListaGuarniciones";

const Guarniciones = () => {
  const cantidadRef = useRef();
  const dispatch = useDispatch();

  const menu = useSelector((state) => state.menu);
  const { moveIntoView, SeleccionarGuarnicion } = useMenu();
  const [contador, setContador] = useState(0);

  useEffect(() => {
    dispatch(addCantidad(contador));
  }, [contador]);

  const handleGuarnicionSeleccionada = (guarnicion) => {
    SeleccionarGuarnicion(guarnicion);
    moveIntoView(cantidadRef);
  };

  const handleClick = (e) => {
    if (e.target.innerHTML === "+") {
      setContador(contador + 1);
    } else if (contador > 0) {
      setContador(contador - 1);
    }
  };

  return (
    <div className="max-w-[95%] xl:max-w-[80%] mx-auto flex flex-col items-center gap-5">
      <ListaGuarniciones
        handleGuarnicionSeleccionada={handleGuarnicionSeleccionada}
      />
      {menu.guarnicion ? (
        <div id="cantidad" ref={cantidadRef}>
          <p className="text-red-600">Selecciona una cantidad</p>
          <Cantidad contador={contador} handleClick={handleClick} />
        </div>
      ) : (
        <p className="text-red-600 animate-pulse">Selecciona una guarnición</p>
      )}
    </div>
  );
};

export default Guarniciones;
