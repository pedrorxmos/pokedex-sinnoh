import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Pagination } from '../../src/components';

describe('Testing of Pagination Component', () => {
	const itemsPerPage = 30;
	const itemsLength = 210;
	const maxPages = Math.ceil(itemsLength / itemsPerPage);

	// To exclude scroll func errors
	window.scrollTo = jest.fn();

	test('should render first and last pages', () => {
		const page = 4;
		const [offset, limit] = [itemsPerPage * +page - itemsPerPage, itemsPerPage * +page];
		render(
			<MemoryRouter>
				<Pagination page={page} maxPages={maxPages} itemsLength={itemsLength} offset={offset} limit={limit} setSearchParams={jest.fn()} />
			</MemoryRouter>
		);

		expect(screen.getByText(1)).toBeTruthy();
		expect(screen.getByText(maxPages)).toBeTruthy();
	});

	test('should add active class to current page', () => {
		const page = 4;
		const [offset, limit] = [itemsPerPage * +page - itemsPerPage, itemsPerPage * +page];
		render(
			<MemoryRouter>
				<Pagination page={page} maxPages={maxPages} itemsLength={itemsLength} offset={offset} limit={limit} setSearchParams={jest.fn()} />
			</MemoryRouter>
		);

		const btns = screen.getAllByRole('page-button');
		btns.forEach((btn) => {
			if (page.toString() === btn.textContent) expect(btn.classList.contains('active')).toBeTruthy();
		});
	});

	test('should trigger setSearchParams with page', () => {
		const page = 4;
		const [offset, limit] = [itemsPerPage * +page - itemsPerPage, itemsPerPage * +page];

		const setSearchParams = jest.fn();
		render(
			<MemoryRouter>
				<Pagination page={page} maxPages={maxPages} itemsLength={itemsLength} offset={offset} limit={limit} setSearchParams={setSearchParams} />
			</MemoryRouter>
		);

		const btns = screen.getAllByRole('page-button');
		btns.forEach((btn) => {
			fireEvent.click(btn);
			expect(setSearchParams).toBeCalledWith({ page: btn.textContent });
		});
	});

	test('should trigger setSearchParams with previous page', () => {
		const page = 4;
		const [offset, limit] = [itemsPerPage * +page - itemsPerPage, itemsPerPage * +page];

		const setSearchParams = jest.fn();
		render(
			<MemoryRouter>
				<Pagination page={page} maxPages={maxPages} itemsLength={itemsLength} offset={offset} limit={limit} setSearchParams={setSearchParams} />
			</MemoryRouter>
		);

		const btn = screen.getByRole('page-previous-button');
		fireEvent.click(btn);
		expect(setSearchParams).toBeCalledWith({ page: (page - 1).toString() });
	});

	test('should render previous button if page is >1', () => {
		const page = 4;
		const [offset, limit] = [itemsPerPage * +page - itemsPerPage, itemsPerPage * +page];

		const setSearchParams = jest.fn();
		render(
			<MemoryRouter>
				<Pagination page={page} maxPages={maxPages} itemsLength={itemsLength} offset={offset} limit={limit} setSearchParams={setSearchParams} />
			</MemoryRouter>
		);

		const btn = screen.getByRole('page-previous-button');
		expect(btn).toBeTruthy();
	});

	test('should NOT render previous button if page is 1', () => {
		const page = 1;
		const [offset, limit] = [itemsPerPage * +page - itemsPerPage, itemsPerPage * +page];

		const setSearchParams = jest.fn();
		render(
			<MemoryRouter>
				<Pagination page={page} maxPages={maxPages} itemsLength={itemsLength} offset={offset} limit={limit} setSearchParams={setSearchParams} />
			</MemoryRouter>
		);
		expect(screen.queryAllByRole('page-previous-button').length).toBe(0);
	});

	test('should trigger setSearchParams with next page', () => {
		const page = 4;
		const [offset, limit] = [itemsPerPage * +page - itemsPerPage, itemsPerPage * +page];

		const setSearchParams = jest.fn();
		render(
			<MemoryRouter>
				<Pagination page={page} maxPages={maxPages} itemsLength={itemsLength} offset={offset} limit={limit} setSearchParams={setSearchParams} />
			</MemoryRouter>
		);

		const btn = screen.getByRole('page-next-button');
		fireEvent.click(btn);
		expect(setSearchParams).toBeCalledWith({ page: (page + 1).toString() });
	});

	test('should render next button if page is <maxPages', () => {
		const page = 4;
		const [offset, limit] = [itemsPerPage * +page - itemsPerPage, itemsPerPage * +page];

		const setSearchParams = jest.fn();
		render(
			<MemoryRouter>
				<Pagination page={page} maxPages={maxPages} itemsLength={itemsLength} offset={offset} limit={limit} setSearchParams={setSearchParams} />
			</MemoryRouter>
		);

		const btn = screen.getByRole('page-next-button');
		expect(btn).toBeTruthy();
	});

	test('should NOT render next button if page is 1', () => {
		const page = 7;
		const [offset, limit] = [itemsPerPage * +page - itemsPerPage, itemsPerPage * +page];

		const setSearchParams = jest.fn();
		render(
			<MemoryRouter>
				<Pagination page={page} maxPages={maxPages} itemsLength={itemsLength} offset={offset} limit={limit} setSearchParams={setSearchParams} />
			</MemoryRouter>
		);
		expect(screen.queryAllByRole('page-next-button').length).toBe(0);
	});

	test('should render first ... if page is >3', () => {
		const page = 5;
		const [offset, limit] = [itemsPerPage * +page - itemsPerPage, itemsPerPage * +page];

		const setSearchParams = jest.fn();
		render(
			<MemoryRouter>
				<Pagination page={page} maxPages={maxPages} itemsLength={itemsLength} offset={offset} limit={limit} setSearchParams={setSearchParams} />
			</MemoryRouter>
		);
		expect(screen.queryAllByRole('page-dots-min').length).toBe(1);
	});

	test('should NOT render first ... if page is >3', () => {
		const page = 2;
		const [offset, limit] = [itemsPerPage * +page - itemsPerPage, itemsPerPage * +page];

		const setSearchParams = jest.fn();
		render(
			<MemoryRouter>
				<Pagination page={page} maxPages={maxPages} itemsLength={itemsLength} offset={offset} limit={limit} setSearchParams={setSearchParams} />
			</MemoryRouter>
		);
		expect(screen.queryAllByRole('page-dots-min').length).toBe(0);
	});

	test('should render second ... if page is < maxPages - 2', () => {
		const page = 2;
		const [offset, limit] = [itemsPerPage * +page - itemsPerPage, itemsPerPage * +page];

		const setSearchParams = jest.fn();
		render(
			<MemoryRouter>
				<Pagination page={page} maxPages={maxPages} itemsLength={itemsLength} offset={offset} limit={limit} setSearchParams={setSearchParams} />
			</MemoryRouter>
		);
		expect(screen.queryAllByRole('page-dots-max').length).toBe(1);
	});

	test('should NOT render second ... if page is >= maxPages - 2', () => {
		const page = maxPages;
		const [offset, limit] = [itemsPerPage * +page - itemsPerPage, itemsPerPage * +page];

		const setSearchParams = jest.fn();
		render(
			<MemoryRouter>
				<Pagination page={page} maxPages={maxPages} itemsLength={itemsLength} offset={offset} limit={limit} setSearchParams={setSearchParams} />
			</MemoryRouter>
		);
		expect(screen.queryAllByRole('page-dots-max').length).toBe(0);
	});

	test('should render offset-limit / itemsLength', () => {
		const page = 1;
		const [offset, limit] = [itemsPerPage * +page - itemsPerPage, itemsPerPage * +page];

		const setSearchParams = jest.fn();
		render(
			<MemoryRouter>
				<Pagination page={page} maxPages={maxPages} itemsLength={itemsLength} offset={offset} limit={limit} setSearchParams={setSearchParams} />
			</MemoryRouter>
		);
		expect(screen.queryByText(`${offset + 1}-${limit} / ${itemsLength}`)).toBeTruthy();
	});
});
