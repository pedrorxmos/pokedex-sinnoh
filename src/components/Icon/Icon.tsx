import { getSvgContent } from './svgContent';

interface IconTypes {
	name: string;
	title: string;
	size?: string;
	className?: string;
}

export const Icon = ({ name, title, size, className }: IconTypes) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={24}
			height={24}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			className={`svg${size ? ` svg-${size}` : ''}${className ? ` ${className}` : ''} feather hero ${name}`}
		>
			<title>{title}</title>
			{getSvgContent(name)}
		</svg>
	);
};
