import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Topbar } from './components';
import { useFetch } from './hooks/useFetch';
import { useGetItem, useSetItem } from './hooks/useLocalStorage';
import { EntryType, PokedexTypes } from './interfaces';
import { Pokedex } from './pages';

import './scss/global.scss';

function App() {
	const { data, isLoading, hasError } = useFetch<PokedexTypes>('https://pokeapi.co/api/v2/pokedex/6/');
	const { pokemon_entries } = data || [];

	const [favorites, setFavorites] = useState<EntryType[]>(JSON.parse(useGetItem('favPokemon', JSON.stringify([]))));
	useSetItem('favPokemon', JSON.stringify(favorites));

	const toggleFavorite = (value: EntryType) => {
		let newFav = [...favorites];

		if (newFav.find((fav) => fav.entry_number === value.entry_number) !== undefined)
			newFav = newFav.filter((fav) => fav.entry_number !== value.entry_number);
		else newFav = [...newFav, value];

		setFavorites(newFav.sort((a, b) => a.entry_number - b.entry_number));
	};

	useEffect(() => {
		if (hasError) console.error(hasError);
	});

	return (
		<>
			<Topbar />
			<Routes>
				<Route
					path="/"
					element={
						<Pokedex title="Sinnoh's Pokedex" pokedex={pokemon_entries} favorites={favorites} toggleFavorite={toggleFavorite} isLoading={isLoading} />
					}
				/>
				<Route
					path="favorites"
					element={
						<Pokedex title="Favorite Pokemons" pokedex={favorites} favorites={favorites} toggleFavorite={toggleFavorite} isLoading={isLoading} />
					}
				/>
			</Routes>
		</>
	);
}

export default App;
