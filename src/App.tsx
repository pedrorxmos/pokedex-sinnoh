import { Topbar } from './components';
import './scss/global.scss';
import { Pokedex } from './pages';
import { Routes, Route } from 'react-router-dom';
import { useFetch } from './hooks/useFetch';
import { useState } from 'react';
import { useGetItem, useSetItem } from './hooks/useLocalStorage';
import { EntryType } from './interfaces';

function App() {
	const { data } = useFetch('https://pokeapi.co/api/v2/pokedex/6/');
	const { pokemon_entries } = data || [];
	const emptyFav: string = JSON.stringify([]);
	const [favorites, setFavorites] = useState<EntryType[]>(JSON.parse(useGetItem('favPokemon', emptyFav)));
	useSetItem('favPokemon', JSON.stringify(favorites));

	const toggleFavorite = (value: EntryType) => {
		let newFav = [...favorites];

		if (newFav.find((fav) => fav.entry_number === value.entry_number) !== undefined)
			newFav = newFav.filter((fav) => fav.entry_number !== value.entry_number);
		else newFav = [...newFav, value];

		setFavorites(newFav.sort((a, b) => a.entry_number - b.entry_number));
	};

	return (
		<>
			<Topbar />
			<Routes>
				<Route
					path="/"
					element={<Pokedex title="Sinnoh's Pokedex" pokedex={pokemon_entries} favorites={favorites} toggleFavorite={toggleFavorite} />}
				/>
				<Route
					path="favorites"
					element={<Pokedex title="Favorite Pokemons" pokedex={favorites} favorites={favorites} toggleFavorite={toggleFavorite} />}
				/>
			</Routes>
		</>
	);
}

export default App;
