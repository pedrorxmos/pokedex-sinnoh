import { SetURLSearchParams } from 'react-router-dom';
import './Pagination.scss';

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
					{Array.from({ length: maxPages }, (_, i) => i + 1).map((x: number) => (
						<button onClick={() => onClickPage(x)}>{x}</button>
					))}
				</div>
			</div>
		</>
	);
};
