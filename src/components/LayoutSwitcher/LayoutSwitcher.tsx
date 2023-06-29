import { Icon } from '..';
import './LayoutSwitcher.scss';

export const LayoutSwitcher = () => {
	const onToggleDropdown = () => {
		document.querySelector('.layout-filter')?.classList.toggle('open');
	};

	const onCloseDropdown = () => {
		document.querySelector('.layout-filter')?.classList.remove('open');
	};

	const onChangeLayout = (value: string) => {
		onCloseDropdown();
	};

	return (
		<>
			<div className="layout-filter">
				<div className="layout-filter__overlay" onClick={onCloseDropdown}></div>
				<span>View:</span>
				<button className="layout-filter__dropdown" onClick={onToggleDropdown}>
					<div className="layout-filter__dropdown__selection">
						<Icon name="grid" title="grid" size="sm" />
						<span>grid</span>
					</div>

					<Icon name="chevron-down" title="layout-chevron" size="sm" />
				</button>
				<div className="layout-filter__selection">
					<button className="layout-filter__selection-option" onClick={() => onChangeLayout('grid')}>
						<Icon name="grid" title="grid" size="sm" />
						<span>Grid</span>
					</button>

					<button className="layout-filter__selection-option" onClick={() => onChangeLayout('list')}>
						<Icon name="list" title="list" size="sm" />
						<span>List</span>
					</button>
				</div>
			</div>
		</>
	);
};
