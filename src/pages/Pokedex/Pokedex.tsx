import { useState } from 'react';
import { LayoutSwitcher } from '../../components';
import { EntryType, PokemonTypes } from '../../interfaces';
import './Pokedex.scss';
import { useGetItem, useSetItem } from '../../hooks/useLocalStorage';
import { ListView, DetailView } from '../../views';

interface PokedexProps {
	title: string;
	pokedex: EntryType[];
}

export const Pokedex = ({ title, pokedex }: PokedexProps) => {
	const [layout, setLayout] = useState(useGetItem('layoutStyle', 'grid'));
	useSetItem('layoutStyle', layout);

	const onClickPokemon = (pokemon: PokemonTypes): void => {
		console.log(pokemon);
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
					<DetailView pokemon={testPokemon} />
				</section>
			</main>
		</>
	);
};

const testPokemon = {
	id: '389',
	name: 'torterra',
	entry: {
		entry_number: 3,
		pokemon_species: {
			name: 'torterra',
			url: 'https://pokeapi.co/api/v2/pokemon-species/389/',
		},
	},
	types: [
		{
			slot: 1,
			type: {
				name: 'grass',
				url: 'https://pokeapi.co/api/v2/type/12/',
			},
		},
		{
			slot: 2,
			type: {
				name: 'ground',
				url: 'https://pokeapi.co/api/v2/type/5/',
			},
		},
	],
	stats: [
		{
			base_stat: 95,
			effort: 0,
			stat: {
				name: 'hp',
				url: 'https://pokeapi.co/api/v2/stat/1/',
			},
		},
		{
			base_stat: 109,
			effort: 2,
			stat: {
				name: 'attack',
				url: 'https://pokeapi.co/api/v2/stat/2/',
			},
		},
		{
			base_stat: 105,
			effort: 1,
			stat: {
				name: 'defense',
				url: 'https://pokeapi.co/api/v2/stat/3/',
			},
		},
		{
			base_stat: 75,
			effort: 0,
			stat: {
				name: 'special-attack',
				url: 'https://pokeapi.co/api/v2/stat/4/',
			},
		},
		{
			base_stat: 85,
			effort: 0,
			stat: {
				name: 'special-defense',
				url: 'https://pokeapi.co/api/v2/stat/5/',
			},
		},
		{
			base_stat: 56,
			effort: 0,
			stat: {
				name: 'speed',
				url: 'https://pokeapi.co/api/v2/stat/6/',
			},
		},
	],
};
