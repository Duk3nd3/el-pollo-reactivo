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
}

export default App;
