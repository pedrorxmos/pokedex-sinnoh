import React, { useState } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Topbar } from '../../src/components';
import { MemoryRouter } from 'react-router-dom';

describe('Testing of Topbar component', () => {
	test('should show pokedex title', () => {
		render(
			<MemoryRouter>
				<Topbar />
			</MemoryRouter>
		);
		// It can be found in the logo and in navigation
		expect(screen.getAllByText('Pokedex').length).toBeGreaterThan(0);
	});

	test('should switch theme', () => {
		const setTheme = jest.fn();
		const useTheme: any = (useState: string) => [useState, setTheme];
		jest.spyOn(React, 'useState').mockImplementation(useTheme);

		render(
			<MemoryRouter>
				<Topbar />
			</MemoryRouter>
		);

		const themeToggle = screen.getByRole('theme-toggle');

		// The first call will be with dark as light is the theme by default
		fireEvent.click(themeToggle);
		expect(setTheme).toHaveBeenCalledWith('dark');
	});
});
