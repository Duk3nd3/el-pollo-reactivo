<<<<<<< HEAD
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import { Footer } from './components/footer/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';
import Error404 from './pages/Error404';

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/menu' element={<Menu />} />
				<Route path='/nosotros' element={<Nosotros />} />
				<Route path='/contacto' element={<Contacto />} />
				<Route Routes path='*' element={<Error404 />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
=======
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { AuthProvider } from "./context/authContext";
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
      </AuthProvider>
    </BrowserRouter>
  );
>>>>>>> ee5344505ed9d098657c3b5fa40e3bf8ac940af1
}

export default App;
