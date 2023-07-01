import { render, screen } from '@testing-library/react';
import { EntryType, PokemonTypes } from '../../src/interfaces';
import { MemoryRouter } from 'react-router-dom';
import { ListView } from '../../src/views';
import React from 'react';

describe('Testing of ListView view', () => {
	// For these tests the current pokemon will be the only one on the entries
	const entries: EntryType[] = [
		{
			entry_number: 9,
			pokemon_species: {
				name: 'empoleon',
				url: 'https://pokeapi.co/api/v2/pokemon-species/395/',
			},
		},
	];

	const onClickPokemon = (value: PokemonTypes) => {
		value;
	};

	const currentPokemon: PokemonTypes = {
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

	test('should render a pokemon card', () => {
		render(
			<MemoryRouter>
				<ListView
					pokedex={entries}
					layout={'grid'}
					onClickPokemon={onClickPokemon}
					currentPokemon={currentPokemon}
					isDetailOpen={true}
					isLoading={false}
				/>
			</MemoryRouter>
		);
		expect(screen.getByText(entries[0].pokemon_species.name)).toBeTruthy();
	});

	test('should render -no pokemon- text when pokedex is empty', () => {
		render(
			<MemoryRouter>
				<ListView
					pokedex={[]}
					layout={'grid'}
					onClickPokemon={onClickPokemon}
					currentPokemon={currentPokemon}
					isDetailOpen={true}
					isLoading={false}
				/>
			</MemoryRouter>
		);
		expect(screen.getByText('There is no Pokemon in this list')).toBeTruthy();
	});
});
