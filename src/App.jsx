import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  collection,
  // doc,
  query,
  onSnapshot,
  // getDocs,
} from "firebase/firestore";
import { db } from "./firebase";

import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
// import Menu from "./pages/Menu";
// import Menu2 from "./pages/Menu2";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import MenuPersonalizado from "./pages/MenuPersonalizado";

function App() {
  const [preparaciones, setPreparaciones] = useState([]);
  const [guarniciones, setGuarniciones] = useState([]);

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

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/menu"
          element={
            <MenuPersonalizado
              preparaciones={preparaciones}
              guarniciones={guarniciones}
            />
          }
        />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        {/* <Route
          path="/menuPersonalizado"
          element={
            <MenuPersonalizado
              preparaciones={preparaciones}
              guarniciones={guarniciones}
            />
          }
        /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
