import { createContext, useContext, useEffect, useState } from "react";
import { cartContext } from "./cartContext";
import { db } from "../firebase";
import { collection, query, onSnapshot } from "firebase/firestore";

export const menuContext = createContext();

export const useMenu = () => {
  const context = useContext(menuContext);
  return context;
};

export function MenuProvider({ children }) {
  const { addToCart } = useContext(cartContext);

  const [menu, setMenu] = useState({
    ingredientePrincipal: "",
    guarnicion: "",
    cantidad: 0,
    precio: 0,
    id: "",
  });

  const [contadorEmpanadas, setContadorEmpanadas] = useState({
    carne: 0,
    jamon: 0,
    pollo: 0,
    verdura: 0,
    caprese: 0,
  });

  const [preparaciones, setPreparaciones] = useState([]);
  const [guarniciones, setGuarniciones] = useState([]);
  const [tipoDeComidas, setTipoDeComidas] = useState([]);
  const [comidas, setComidas] = useState([]);
  const [saboresDeEmpanadas, setSaboresDeEmpanadas] = useState([]);

  const [tipoDeComidaSeleccionada, setTipoDeComidaSeleccionada] = useState("");
  const [tipoMenuSeleccionado, setTipoMenuSeleccionado] = useState("");
  const [preparacionSeleccionada, setPreparacionSeleccionada] = useState("");
  const [guarnicionSeleccionada, setGuarnicionSeleccionada] = useState("");

  // useEffect(() => {
  //   console.log(menu);
  //   // console.log(contadorEmpanadas);
  // }, [menu, contadorEmpanadas]);

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
        setComidas(comidasArray);
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

  const inicializarMenu = () => {
    setMenu({
      ingredientePrincipal: "",
      guarnicion: "",
      cantidad: 0,
      precio: 0,
      id: "",
    });
    setTipoDeComidaSeleccionada("");
    setTipoMenuSeleccionado("");
    setPreparacionSeleccionada("");
    setGuarnicionSeleccionada("");
  };

  const handleTipoDeComidas = (tipoComida) => {
    setTipoDeComidaSeleccionada(tipoComida);
    if (tipoComida !== "menu personalizado") {
      const preparacionTipoComida = comidas.filter(
        (comida) => comida.nombre === tipoComida
      );
      if (tipoComida === "empanadas") {
        setSaboresDeEmpanadas(preparacionTipoComida[0].sabores);
      }
      setMenu({
        ...menu,
        ingredientePrincipal: preparacionTipoComida[0].nombre,
        precio: preparacionTipoComida[0].precio,
        id: preparacionTipoComida[0]?.id,
      });
    }
  };

  const handleTipoMenuSeleccionado = (tipo) => {
    setTipoMenuSeleccionado(tipo);
    setPreparacionSeleccionada("");
    setGuarnicionSeleccionada("");
  };

  const handlePreparacionSeleccionada = (preparacion) => {
    setPreparacionSeleccionada(preparacion);
    setMenu({
      ...menu,
      ingredientePrincipal: preparacion.nombre,
      precio: preparacion.precio,
      id: preparacion.id,
    });
    setGuarnicionSeleccionada("");
  };

  const handleGuarnicionSeleccionada = (guarnicion) => {
    setGuarnicionSeleccionada(guarnicion);
    setMenu({
      ...menu,
      guarnicion: guarnicion.nombre,
      id: menu.id + guarnicion.id,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addToCart(menu);
    setMenu({
      ingredientePrincipal: "",
      guarnicion: "",
      cantidad: 0,
      precio: 0,
      id: "",
    });
    setContadorEmpanadas({
      carne: 0,
      jamon: 0,
      pollo: 0,
      verdura: 0,
      caprese: 0,
    });
    setTipoDeComidaSeleccionada("");
    setTipoMenuSeleccionado(" ");
    setPreparacionSeleccionada("");
    setGuarnicionSeleccionada("");
  };

  const moveIntoView = (ref) => {
    setTimeout(() => {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }, 150);
  };

  // const armarGuarnicionEmpanadas = () => {

  // };

  return (
    <menuContext.Provider
      value={{
        menu,
        inicializarMenu,
        setMenu,
        handleSubmit,
        handleTipoDeComidas,
        handleTipoMenuSeleccionado,
        handlePreparacionSeleccionada,
        handleGuarnicionSeleccionada,
        moveIntoView,
        setContadorEmpanadas,
        contadorEmpanadas,
        tipoDeComidas,
        tipoDeComidaSeleccionada,
        comidas,
        preparaciones,
        guarniciones,
        tipoMenuSeleccionado,
        preparacionSeleccionada,
        guarnicionSeleccionada,
        saboresDeEmpanadas,
      }}
    >
      {children}
    </menuContext.Provider>
  );
}
