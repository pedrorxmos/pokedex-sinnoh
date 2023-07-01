import { SetURLSearchParams } from 'react-router-dom';

import { Icon } from '..';

import './Pagination.scss';

interface PaginationProps {
	page: number;
	maxPages: number;
	itemsLength: number;
	offset: number;
	limit: number;
	setSearchParams: SetURLSearchParams;
}

export const Pagination = ({ page, maxPages, itemsLength, offset, limit, setSearchParams }: PaginationProps) => {
	const onClickPage = (value: number) => {
		setSearchParams({ page: value.toString() });
		window.scrollTo(0, 0);
	};

	// Array.from({ length: maxPages - 1 }, (_, i) => i + 1)

	return (
		<>
			<div className="pagination">
				<div className="pagination__list">
					{page > 1 && (
						<button onClick={() => onClickPage(page - 1)} className="btn pagination__item">
							<Icon name="chevron-left" title="previous page" size="sm" />
						</button>
					)}

					<button onClick={() => onClickPage(1)} className={`btn pagination__item${page === 1 ? ' active' : ''}`}>
						1
					</button>

					{page > 3 && <button className="btn pagination__item pagination__item__no-action">...</button>}

					{Array.from({ length: (maxPages - 1 - 2) / 1 + 1 }, (_, i) => 2 + i * 1).map((x: number) => {
						if (x >= page + 2 || x <= page - 2) return;

						return (
							<button key={x} onClick={() => onClickPage(x)} className={`btn pagination__item${page === x ? ' active' : ''}`}>
								{x}
							</button>
						);
					})}

					{page < maxPages - 2 && <button className="btn pagination__item pagination__item__no-action">...</button>}

					<button onClick={() => onClickPage(maxPages)} className={`btn pagination__item${page === maxPages ? ' active' : ''}`}>
						{maxPages}
					</button>

					{page < maxPages && (
						<button onClick={() => onClickPage(page + 1)} className="btn pagination__item">
							<Icon name="chevron-right" title="previous page" size="sm" />
						</button>
					)}
				</div>

				<small className="pagination__counter">
					{offset + 1}-{limit} / {itemsLength}
				</small>
			</div>
		</>
	);
};
