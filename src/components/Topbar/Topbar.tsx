import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Icon, MenuButton } from '../';
import { useGetItem, useSetItem } from '../../hooks/useLocalStorage';

import './Topbar.scss';

export const Topbar = () => {
	const [theme, setTheme] = useState<string>(useGetItem('theme', 'light'));
	useSetItem('theme', theme);

	const [isOpen, setIsOpen] = useState<boolean>(false);

	const root = document.querySelector(':root');

	const onThemeSwitch = () => {
		theme === 'dark' ? setTheme('light') : setTheme('dark');

		// First add the animation class
		document.querySelector('.theme-dark')?.classList.add('animation');
		document.querySelector('.theme-light')?.classList.add('animation');

		// Then, when animation is done (0.3s) removes it so it is possible to replay the animation
		setTimeout(() => {
			document.querySelector('.theme-dark')?.classList.remove('animation');
			document.querySelector('.theme-light')?.classList.remove('animation');
		}, 300);
	};

	useEffect(() => {
		if (root) root.className = theme;
	}, [theme, root]);

	return (
		<>
			<header className="topbar">
				<Link className="h3 logo" to="/">
					Pokedex
				</Link>

				<nav className={`nav${isOpen ? ' open' : ''}`}>
					<button className={`btn nav-action theme-toggle ${theme}`} title="switch theme" onClick={onThemeSwitch}>
						<Icon name="sun" title="switch to dark theme" className="theme-light" size="md" />
						<Icon name="moon" title="switch to light theme" className="theme-dark" size="md" />
					</button>
					<ul className="nav-list">
						<li className="nav__item">
							<Link to="/" className="nav__link" onClick={() => setIsOpen(false)}>
								Pokedex
								<Icon name="arrow-right" title="go to pokedex" size="md" />
							</Link>
						</li>
						<li className="nav__item">
							<Link to="/favorites" className="nav__link" onClick={() => setIsOpen(false)}>
								<span>Favorites</span>
								<Icon name="arrow-right" title="go to favorites" size="md" />
							</Link>
						</li>
					</ul>

					<MenuButton setIsOpen={setIsOpen} isOpen={isOpen} />
				</nav>
			</header>
		</>
	);
};
