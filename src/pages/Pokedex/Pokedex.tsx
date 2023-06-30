import { useState } from 'react';
import { LayoutSwitcher } from '../../components';
import { EntryType, PokemonTypes } from '../../interfaces';
import './Pokedex.scss';
import { useGetItem, useSetItem } from '../../hooks/useLocalStorage';
import { ListView, DetailView } from '../../views';

interface PokedexProps {
	title: string;
	pokedex: EntryType[];
	favorites: EntryType[];
	toggleFavorite: (params: EntryType) => void;
}

export const Pokedex = ({ title, pokedex, favorites, toggleFavorite }: PokedexProps) => {
	const [layout, setLayout] = useState(useGetItem('layoutStyle', 'grid'));
	useSetItem('layoutStyle', layout);

	const [pokemon, setPokemon] = useState(initialPokemon);

	const onClickPokemon = (value: PokemonTypes): void => {
		if (pokemon.id === value.id && document.querySelector('.pokedex-detail')?.classList.contains('open')) return;

		document.querySelector('.pokedex-detail')?.classList.remove('open');
		setTimeout(() => {
			setPokemon(value);
		}, 210);
		setTimeout(() => {
			document.querySelector('.pokedex-detail')?.classList.add('open');
		}, 500);
	};

	return (
		<>
			<main className="pokedex">
				<div className="pokedex-header">
					<h1>{title}</h1>
					<div className="pokedex-header__filters">
						<LayoutSwitcher layout={layout} setLayout={setLayout} />
					</div>
				</div>
				<section className="pokedex-container">
					<ListView pokedex={pokedex} layout={layout} onClickPokemon={onClickPokemon} />
					<DetailView pokemon={pokemon} favorites={favorites} toggleFavorite={toggleFavorite} />
				</section>
			</main>
		</>
	);
};

const initialPokemon = {
	id: '395',
	name: 'empoleon',
	entry: {
		entry_number: 9,
		pokemon_species: {
			name: 'empoleon',
			url: 'https://pokeapi.co/api/v2/pokemon-species/395/',
		},
	},
	types: [
		{
			slot: 1,
			type: {
				name: 'water',
				url: 'https://pokeapi.co/api/v2/type/11/',
			},
		},
		{
			slot: 2,
			type: {
				name: 'steel',
				url: 'https://pokeapi.co/api/v2/type/9/',
			},
		},
	],
	stats: [
		{
			base_stat: 84,
			effort: 0,
			stat: {
				name: 'hp',
				url: 'https://pokeapi.co/api/v2/stat/1/',
			},
		},
		{
			base_stat: 86,
			effort: 0,
			stat: {
				name: 'attack',
				url: 'https://pokeapi.co/api/v2/stat/2/',
			},
		},
		{
			base_stat: 88,
			effort: 0,
			stat: {
				name: 'defense',
				url: 'https://pokeapi.co/api/v2/stat/3/',
			},
		},
		{
			base_stat: 111,
			effort: 3,
			stat: {
				name: 'special-attack',
				url: 'https://pokeapi.co/api/v2/stat/4/',
			},
		},
		{
			base_stat: 101,
			effort: 0,
			stat: {
				name: 'special-defense',
				url: 'https://pokeapi.co/api/v2/stat/5/',
			},
		},
		{
			base_stat: 60,
			effort: 0,
			stat: {
				name: 'speed',
				url: 'https://pokeapi.co/api/v2/stat/6/',
			},
		},
	],
};
