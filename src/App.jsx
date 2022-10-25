import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "./firebase";
import { AuthProvider } from "./hooks/authContext";

import NavBarHeader from "./components/navbar/NavBarHeader";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import MenuPersonalizado from "./pages/MenuPersonalizado";
import RegistroLogin from "./pages/RegistroLogin";

function App() {
  const [modoRegLog, setmodoRegLog] = useState("registro");
  const [preparaciones, setPreparaciones] = useState([]);
  const [guarniciones, setGuarniciones] = useState([]);

  const handleModoRegLog = (modo) => {
    if (modo === "login") {
      setmodoRegLog("login");
    } else {
      setmodoRegLog("registro");
    }
  };

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
      <AuthProvider>
        <NavBarHeader handleModoRegLog={handleModoRegLog} />
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
          <Route
            path="/registroLogin"
            element={
              <RegistroLogin
                handleModoRegLog={handleModoRegLog}
                modoRegLog={modoRegLog}
              />
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
