import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { LayoutSwitcher } from '../../src/components';

describe('Testing of LayoutSwitcher component', () => {
	test('should show current layout', () => {
		render(
			<MemoryRouter>
				<LayoutSwitcher layout="grid" setLayout={jest.fn()} />
			</MemoryRouter>
		);

		const dropdown = screen.getByRole('layout-dropdown');
		expect(dropdown.querySelector('span')?.textContent).toBe('grid');
	});

	test('should call setLayout with grid', () => {
		const setLayout = jest.fn();
		render(
			<MemoryRouter>
				<LayoutSwitcher layout="grid" setLayout={setLayout} />
			</MemoryRouter>
		);

		const btn = screen.getByRole('layout-grid-btn');
		fireEvent.click(btn);
		expect(setLayout).toBeCalledWith('grid');
	});

	test('should call setLayout with list', () => {
		const setLayout = jest.fn();
		render(
			<MemoryRouter>
				<LayoutSwitcher layout="grid" setLayout={setLayout} />
			</MemoryRouter>
		);

		const btn = screen.getByRole('layout-list-btn');
		fireEvent.click(btn);
		expect(setLayout).toBeCalledWith('list');
	});
});
