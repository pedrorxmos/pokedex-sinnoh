import React from 'react';

import { Icon } from '..';

import './LayoutSwitcher.scss';

interface LayouSwitcherProps {
	layout: string;
	setLayout: React.Dispatch<React.SetStateAction<string>>;
}

export const LayoutSwitcher = ({ layout, setLayout }: LayouSwitcherProps) => {
	const onToggleDropdown = () => {
		document.querySelector('.layout-filter')?.classList.toggle('open');
	};

	const onCloseDropdown = () => {
		document.querySelector('.layout-filter')?.classList.remove('open');
	};

	const onChangeLayout = (value: string) => {
		onCloseDropdown();
		setLayout(value);
	};

	return (
		<>
			<div className="layout-filter">
				<div className="layout-filter__overlay" onClick={onCloseDropdown}></div>
				<span>View:</span>
				<button role="layout-dropdown" className="layout-filter__dropdown" onClick={onToggleDropdown}>
					<div className="layout-filter__dropdown__selection">
						<Icon name={layout} title={layout} size="sm" />
						<span>{layout}</span>
					</div>

					<Icon name="chevron-down" title="layout-chevron" size="sm" />
				</button>
				<div className="layout-filter__selection">
					<button role="layout-grid-btn" className="layout-filter__selection-option" onClick={() => onChangeLayout('grid')}>
						<Icon name="grid" title="grid" size="sm" />
						<span>Grid</span>
					</button>

					<button role="layout-list-btn" className="layout-filter__selection-option" onClick={() => onChangeLayout('list')}>
						<Icon name="list" title="list" size="sm" />
						<span>List</span>
					</button>
				</div>
			</div>
		</>
	);
};
