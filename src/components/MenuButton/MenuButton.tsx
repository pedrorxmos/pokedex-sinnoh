import React from 'react';

interface MenuIconProps {
	className?: string;
	onToggleMenu: React.MouseEventHandler<HTMLButtonElement>;
}

export const MenuButton = ({ className, onToggleMenu }: MenuIconProps) => {
	const triggerAnimation = (type: string) => {
		document.querySelector<SVGAnimateTransformElement>(`#menu-icon_top-line--${type}`)?.beginElement();
		document.querySelector<SVGAnimateTransformElement>(`#menu-icon_bottom-line--${type}`)?.beginElement();
	};

	const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		onToggleMenu(e);

		// Timeout added for possible order changes
		setTimeout(() => {
			document.querySelector('.nav')?.classList.contains('open') ? triggerAnimation('open') : triggerAnimation('close');
		}, 1);
	};

	return (
		<>
			<button className="btn nav-action menu-toggle" onClick={onClick}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="1.25"
					strokeLinecap="round"
					strokeLinejoin="round"
					className={`svg menu-icon${className ? ' ' + className : ''}`}
				>
					<polyline points="0 7, 24 7" className="menu-icon__top-line">
						<animate
							id="menu-icon_top-line--open"
							attributeName="points"
							dur="0.3s"
							fill="freeze"
							begin="indefinite"
							values="0 7, 24 7; 6 6, 18 18"
						></animate>
						<animate
							id="menu-icon_top-line--close"
							attributeName="points"
							dur="0.3s"
							fill="freeze"
							begin="indefinite"
							values="6 6, 18 18; 0 7, 24 7"
						></animate>
					</polyline>
					<polyline points="18 15, 6 15" className="menu-icon__bottom-line">
						<animate
							id="menu-icon_bottom-line--open"
							attributeName="points"
							dur="0.3s"
							fill="freeze"
							begin="indefinite"
							values="18 15, 6 15; 18 6, 6 18"
						></animate>
						<animate
							id="menu-icon_bottom-line--close"
							attributeName="points"
							dur="0.3s"
							fill="freeze"
							begin="indefinite"
							values="18 6, 6 18; 18 15, 6 15"
						></animate>
					</polyline>
				</svg>
			</button>
		</>
	);
};
