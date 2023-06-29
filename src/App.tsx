import { Topbar } from './components';
import './scss/global.scss';
import { Pokedex } from './pages';
import { Routes, Route } from 'react-router-dom';
import { useFetch } from './hooks/useFetch';

function App() {
	const { data } = useFetch('https://pokeapi.co/api/v2/pokedex/6/');
	const { pokemon_entries } = data || [];

	return (
		<>
			<Topbar />
			<Routes>
				<Route path="/" element={<Pokedex title="Sinnoh's Pokedex" pokedex={pokemon_entries} />} />
				<Route path="favorites" element={<Pokedex title="Favorite Pokemons" pokedex={pokemon_entries} />} />
			</Routes>
		</>
	);
}

export default App;
