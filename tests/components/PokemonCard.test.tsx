import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { PokemonCard } from '../../src/components';
import { EntryType, PokemonTypes } from '../../src/interfaces';

describe('Testing of PokemonType component', () => {
	const entry: EntryType = {
		entry_number: 9,
		pokemon_species: {
			name: 'empoleon',
			url: 'https://pokeapi.co/api/v2/pokemon-species/395/',
		},
	};

	test('should render pokemon name and id', () => {
		render(
			<MemoryRouter>
				<PokemonCard name={entry.pokemon_species.name} url={entry.pokemon_species.url} entry={entry} className="" onClickPokemon={jest.fn()} />
			</MemoryRouter>
		);
		expect(screen.getByText(entry.pokemon_species.name)).toBeTruthy();
		expect(screen.getByText('#395')).toBeTruthy();
	});

	test('should call onClickPokemon when clicked', () => {
		const onClickPokemon = jest.fn();

		render(
			<MemoryRouter>
				<PokemonCard name={entry.pokemon_species.name} url={entry.pokemon_species.url} entry={entry} className="" onClickPokemon={onClickPokemon} />
			</MemoryRouter>
		);
		const card = screen.getByRole('pokemon-card');
		fireEvent.click(card);
		expect(onClickPokemon).toBeCalled();
	});
});
