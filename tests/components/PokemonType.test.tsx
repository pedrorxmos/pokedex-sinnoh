import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { PokemonType } from '../../src/components';

describe('Testing of PokemonType component', () => {
	test('should render type value', () => {
		render(
			<MemoryRouter>
				<PokemonType value="fire" />
			</MemoryRouter>
		);
		expect(screen.getByText('fire')).toBeTruthy();
	});

	test('should render the bg-? class', () => {
		render(
			<MemoryRouter>
				<PokemonType value="fire" />
			</MemoryRouter>
		);

		const type = screen.getByRole('pokemon-type');
		expect(type.className).toContain('bg-fire');
	});
});
