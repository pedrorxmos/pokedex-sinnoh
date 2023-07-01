import { MemoryRouter } from 'react-router-dom';
import { EntryType, PokemonTypes } from '../../src/interfaces';
import React, { useState } from 'react';
import { render, screen } from '@testing-library/react';
import { DetailView } from '../../src/views';

describe('Testing of DetailView view', () => {
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

	const funct = jest.fn();

	test('should render pokemon name', () => {
		render(
			<MemoryRouter>
				<DetailView pokemon={currentPokemon} favorites={entries} toggleFavorite={funct} isOpen={true} setOpen={funct} />
			</MemoryRouter>
		);
		expect(screen.getByText(currentPokemon.name)).toBeTruthy();
	});

	test('should render pokemon id', () => {
		render(
			<MemoryRouter>
				<DetailView pokemon={currentPokemon} favorites={entries} toggleFavorite={funct} isOpen={true} setOpen={funct} />
			</MemoryRouter>
		);
		expect(screen.getByText('#' + currentPokemon.id)).toBeTruthy();
	});

	test('should render all pokemon stats', () => {
		render(
			<MemoryRouter>
				<DetailView pokemon={currentPokemon} favorites={entries} toggleFavorite={funct} isOpen={true} setOpen={funct} />
			</MemoryRouter>
		);

		currentPokemon.stats.forEach((stat) => {
			expect(screen.getByText(stat.stat.name.replace('-', ' '))).toBeTruthy();
			expect(screen.getByText(stat.base_stat)).toBeTruthy();
		});
	});

	test('should render all pokemon types', () => {
		render(
			<MemoryRouter>
				<DetailView pokemon={currentPokemon} favorites={entries} toggleFavorite={funct} isOpen={true} setOpen={funct} />
			</MemoryRouter>
		);

		currentPokemon.types.forEach((type) => {
			expect(screen.getByText(type.type.name)).toBeTruthy();
		});
	});

	test('should render pokemon img', () => {
		render(
			<MemoryRouter>
				<DetailView pokemon={currentPokemon} favorites={entries} toggleFavorite={funct} isOpen={true} setOpen={funct} />
			</MemoryRouter>
		);
		const img = screen.getByRole('pokedex-detail__content__img') as HTMLImageElement;
		expect(img.src).toBe(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/395.png`);
	});
});
