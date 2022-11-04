import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { AuthProvider } from "./context/authContext";
import { CartProvider } from "./context/cartContext";
import { MenuProvider } from "./context/menuContext";

import NavBarHeader from "./components/navbar/NavBarHeader";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import Menu from "./pages/Menu";
import RegistroLogin from "./pages/RegistroLogin";
import CarritoCompras from "./pages/CarritoCompras";

function App() {
  const [modoRegLog, setmodoRegLog] = useState("registro");

  const handleModoRegLog = (modo) => {
    if (modo === "login") {
      setmodoRegLog("login");
    } else {
      setmodoRegLog("registro");
    }
  };

  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <MenuProvider>
            <NavBarHeader handleModoRegLog={handleModoRegLog} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/nosotros" element={<Nosotros />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/carritoCompras" element={<CarritoCompras />} />
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
          </MenuProvider>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
