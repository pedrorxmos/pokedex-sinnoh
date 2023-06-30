import { SetURLSearchParams } from 'react-router-dom';
import './Pagination.scss';
import { Icon } from '..';

interface PaginationProps {
	page: number;
	itemsPerPage: number;
	maxPages: number;
	itemsLength: number;
	offset: number;
	limit: number;
	setSearchParams: SetURLSearchParams;
}

export const Pagination = ({ page, itemsPerPage, maxPages, itemsLength, offset, limit, setSearchParams }: PaginationProps) => {
	const onClickPage = (value: number) => {
		setSearchParams({ page: value.toString() });
		window.scrollTo(0, 0);
	};

	return (
		<>
			<div className="pagination">
				<div className="pagination__list">
					{page > 1 && (
						<button onClick={() => onClickPage(page - 1)} className="btn pagination__item">
							<Icon name="chevron-left" title="previous page" size="sm" />
						</button>
					)}

					{Array.from({ length: maxPages }, (_, i) => i + 1).map((x: number) => (
						<button onClick={() => onClickPage(x)} className={`btn pagination__item${page === x ? ' active' : ''}`}>
							{x}
						</button>
					))}

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
