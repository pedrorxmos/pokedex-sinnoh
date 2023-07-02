import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { MenuButton } from '../../src/components';

describe('Testing of MenuButton component', () => {
	test('should change from open to close', () => {
		const setIsOpen = jest.fn();

		render(
			<MemoryRouter>
				<MenuButton isOpen={true} setIsOpen={setIsOpen} />
			</MemoryRouter>
		);

		const btn = screen.getByRole('menu-toggle');
		fireEvent.click(btn);
		expect(setIsOpen).toBeCalledWith(false);
	});

	test('should change from close to open', () => {
		const setIsOpen = jest.fn();

		render(
			<MemoryRouter>
				<MenuButton isOpen={false} setIsOpen={setIsOpen} />
			</MemoryRouter>
		);

		const btn = screen.getByRole('menu-toggle');
		fireEvent.click(btn);
		expect(setIsOpen).toBeCalledWith(true);
	});
});
