import { createContext, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import {
  addIngredientePrincipal,
  addGuarnicion,
  addCantidad,
  addPrecio,
  addId,
  resetMenu,
  addPreparacionSeleccionada,
  addIngredienteSeleccionado,
  addTipoDeMenuSeleccionado,
} from "../features/menu/menuSlice";
import { db } from "../firebase";
import { collection, query, onSnapshot } from "firebase/firestore";

export const menuContext = createContext();
export const useMenu = () => {
  const context = useContext(menuContext);
  return context;
};

export function MenuProvider({ children }) {
  const menu = useSelector((state) => state.menu);
  const dispatch = useDispatch();

  const [ingredientes, setIngredientes] = useState([]);
  const [preparaciones, setPreparaciones] = useState([]);
  const [guarniciones, setGuarniciones] = useState([]);
  const [tipoDeComidas, setTipoDeComidas] = useState([]);

  const [contadorEmpanadas, setContadorEmpanadas] = useState({
    carne: 0,
    jamon: 0,
    pollo: 0,
    verdura: 0,
    caprese: 0,
  });
  const [contadorTartas, setContadorTartas] = useState({
    jamonCompleta: 0,
    jamon: 0,
    pollo: 0,
    verdura: 0,
  });
  const [saboresDeEmpanadas, setSaboresDeEmpanadas] = useState([]);
  const [saboresDeTartas, setSaboresDeTartas] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "ingrediente principal"));
    const unsubcribe = onSnapshot(
      q,
      (db,
      (querySnapshot) => {
        let ingredientesArray = [];
        querySnapshot.forEach((doc) => {
          ingredientesArray.push({ ...doc.data(), id: doc.id });
        });
        setIngredientes(ingredientesArray);
      })
    );
    return () => unsubcribe();
  }, []);

  useEffect(() => {
    const q = query(collection(db, "preparaciones"));
    const unsubcribe = onSnapshot(
      q,
      (db,
      (querySnapshot) => {
        let preparacionesArray = [];
        querySnapshot.forEach((doc) => {
          preparacionesArray.push({ ...doc.data(), id: doc.id });
        });
        setPreparaciones(preparacionesArray);
      })
    );
    return () => unsubcribe();
  }, []);

  useEffect(() => {
    const q = query(collection(db, "tipo de comidas"));
    const unsubcribe = onSnapshot(
      q,
      (db,
      (querySnapshot) => {
        let comidasArray = [];
        querySnapshot.forEach((doc) => {
          comidasArray.push({ ...doc.data(), id: doc.id });
        });
        setTipoDeComidas(comidasArray);
      })
    );
    return () => unsubcribe();
  }, []);

  useEffect(() => {
    const q = query(collection(db, "guarniciones"));
    const unsubcribe = onSnapshot(
      q,
      (db,
      (querySnapshot) => {
        let guarnicionesArray = [];
        querySnapshot.forEach((doc) => {
          guarnicionesArray.push({ ...doc.data(), id: doc.id });
        });
        setGuarniciones(guarnicionesArray);
      })
    );
    return () => unsubcribe();
  }, []);

  const handleTipoDeComidas = (tipoComida) => {
    dispatch(addTipoDeMenuSeleccionado(tipoComida));
    if (tipoComida !== "menu personalizado") {
      const preparacionTipoComida = tipoDeComidas.filter(
        (comida) => comida.nombre === tipoComida
      );
      if (tipoComida === "empanadas") {
        setSaboresDeEmpanadas(preparacionTipoComida[0].sabores);
      }
      if (tipoComida === "tartas") {
        setSaboresDeTartas(preparacionTipoComida[0].sabor);
      }
      dispatch(addIngredientePrincipal(preparacionTipoComida[0].nombre));
      dispatch(addPrecio(preparacionTipoComida[0].precio));
      dispatch(addId(preparacionTipoComida[0].id));
    } else {
      dispatch(addIngredientePrincipal(""));
      dispatch(addPreparacionSeleccionada(""));
      dispatch(addGuarnicion(""));
      dispatch(addPrecio(""));
      dispatch(addCantidad(""));
    }
  };

  const seleccionarIngrediente = (ingrediente) => {
    dispatch(addIngredienteSeleccionado(ingrediente));
    dispatch(addPreparacionSeleccionada(""));
    dispatch(addGuarnicion(""));
  };

  const seleccionarPreparacion = (preparacion) => {
    dispatch(addPreparacionSeleccionada(preparacion));
    dispatch(addIngredientePrincipal(preparacion.nombre));
    dispatch(addGuarnicion(""));
    dispatch(addPrecio(preparacion.precio));
    dispatch(addId(preparacion.id));
  };

  const SeleccionarGuarnicion = (guarnicion) => {
    dispatch(addGuarnicion(guarnicion.nombre));
    dispatch(addId(menu.id + guarnicion.id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addToCart({ ...menu }));
    resetearTodoElMenu();
  };

  const moveIntoView = (ref) => {
    setTimeout(() => {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }, 150);
  };

  const resetearTodoElMenu = () => {
    dispatch(resetMenu());
    setContadorEmpanadas({
      carne: 0,
      jamon: 0,
      pollo: 0,
      verdura: 0,
      caprese: 0,
    });
    setContadorTartas({ jamonCompleta: 0, jamon: 0, pollo: 0, verdura: 0 });
  };

  return (
    <menuContext.Provider
      value={{
        handleSubmit,
        resetearTodoElMenu,
        moveIntoView,
        setContadorTartas,
        handleTipoDeComidas,
        setContadorEmpanadas,
        SeleccionarGuarnicion,
        seleccionarPreparacion,
        seleccionarIngrediente,
        ingredientes,
        guarniciones,
        preparaciones,
        tipoDeComidas,
        contadorTartas,
        saboresDeTartas,
        contadorEmpanadas,
        saboresDeEmpanadas,
      }}
    >
      {children}
    </menuContext.Provider>
  );
}
