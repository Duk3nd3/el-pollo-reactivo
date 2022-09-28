<<<<<<< HEAD
import './index.css';

function App() {
	return (
		<>
			<h1>HOLA DESDE APP</h1>
		</>
	);
=======
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
>>>>>>> 5d235ebb658a0cdcf80adae672bd9317455472ce
}

export default App;
