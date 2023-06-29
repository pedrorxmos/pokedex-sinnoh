import { Topbar } from './components';
import './scss/global.scss';
import { Pokedex } from './pages';
import { Routes, Route } from 'react-router-dom';

function App() {
	return (
		<>
			<Topbar />
			<Routes>
				<Route path="/" element={<Pokedex title="Sinnoh's Pokedex" />} />
				<Route path="favorites" element={<Pokedex title="Favorite Pokemons" />} />
			</Routes>
		</>
	);
}

export default App;
