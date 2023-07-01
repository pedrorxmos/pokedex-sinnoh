import { render, screen } from '@testing-library/react';
import { EntryType } from '../../src/interfaces';
import { Pokedex } from '../../src/pages/Pokedex/Pokedex';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

describe('Testing of Pokedex page', () => {
	const title = 'Pokedex title';
	const entries: EntryType[] = [
		{
			entry_number: 1,
			pokemon_species: {
				name: 'turtwig',
				url: 'https://pokeapi.co/api/v2/pokemon-species/387/',
			},
		},
	];
	const toggleFavorite = (value: EntryType) => {
		value;
	};

	test('should show the page title', () => {
		render(
			<MemoryRouter>
				<Pokedex title={title} pokedex={entries} favorites={entries} toggleFavorite={toggleFavorite} isLoading={false} />
			</MemoryRouter>
		);
		expect(screen.getByText(title)).toBeTruthy();
	});

	test('should show a pokemon card', () => {
		render(
			<MemoryRouter>
				<Pokedex title={title} pokedex={entries} favorites={entries} toggleFavorite={toggleFavorite} isLoading={false} />
			</MemoryRouter>
		);
		expect(screen.getByText(entries[0].pokemon_species.name)).toBeTruthy();
	});
});
