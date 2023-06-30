const svgContent: object = {
	'arrow-down': (
		<>
			<line x1="12" y1="5" x2="12" y2="19"></line>
			<polyline points="19 12 12 19 5 12"></polyline>
		</>
	),
	'arrow-left': (
		<>
			<line x1="19" y1="12" x2="5" y2="12"></line>
			<polyline points="12 19 5 12 12 5"></polyline>
		</>
	),
	'arrow-right': (
		<>
			<line x1="5" y1="12" x2="19" y2="12"></line>
			<polyline points="12 5 19 12 12 19"></polyline>
		</>
	),
	'arrow-up': (
		<>
			<line x1="12" y1="19" x2="12" y2="5"></line>
			<polyline points="5 12 12 5 19 12"></polyline>
		</>
	),
	'chevron-down': (
		<>
			<polyline points="6 9 12 15 18 9"></polyline>
		</>
	),
	'chevron-left': (
		<>
			<polyline points="15 18 9 12 15 6"></polyline>
		</>
	),
	'chevron-right': (
		<>
			<polyline points="9 18 15 12 9 6"></polyline>
		</>
	),
	'chevron-up': (
		<>
			<polyline points="18 15 12 9 6 15"></polyline>
		</>
	),
	grid: (
		<>
			<rect x="3" y="3" width="7" height="7"></rect>
			<rect x="14" y="3" width="7" height="7"></rect>
			<rect x="14" y="14" width="7" height="7"></rect>
			<rect x="3" y="14" width="7" height="7"></rect>
		</>
	),
	x: (
		<>
			<line x1="18" y1="6" x2="6" y2="18"></line>
			<line x1="6" y1="6" x2="18" y2="18"></line>
		</>
	),
	heart: (
		<>
			<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
		</>
	),
	list: (
		<>
			<line x1="8" y1="6" x2="21" y2="6"></line>
			<line x1="8" y1="12" x2="21" y2="12"></line>
			<line x1="8" y1="18" x2="21" y2="18"></line>
			<line x1="3" y1="6" x2="3.01" y2="6"></line>
			<line x1="3" y1="12" x2="3.01" y2="12"></line>
			<line x1="3" y1="18" x2="3.01" y2="18"></line>
		</>
	),
	moon: (
		<>
			<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
		</>
	),
	sun: (
		<>
			<circle cx="12" cy="12" r="5"></circle>
			<line x1="12" y1="1" x2="12" y2="3"></line>
			<line x1="12" y1="21" x2="12" y2="23"></line>
			<line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
			<line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
			<line x1="1" y1="12" x2="3" y2="12"></line>
			<line x1="21" y1="12" x2="23" y2="12"></line>
			<line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
			<line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
		</>
	),
};

export const getSvgContent = (name: string) => {
	return svgContent[name as keyof object];
};
