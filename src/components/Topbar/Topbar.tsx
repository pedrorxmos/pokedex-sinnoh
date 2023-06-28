import { Link } from 'react-router-dom';
import { Icon, MenuButton } from '../';
import './Topbar.scss';
import { useEffect, useState } from 'react';
import { useGetItem, useSetItem } from '../../hooks/useLocalStorage';

export const Topbar = () => {
	const [theme, setTheme] = useState<string>(useGetItem('theme', 'light'));
	useSetItem('theme', theme);
	const root = document.querySelector(':root');

	const onToggleMenu = () => {
		document.querySelector('.nav')?.classList.toggle('open');
	};

	const onCloseMenu = () => {
		document.querySelector('.nav')?.classList.remove('open');
	};

	const onThemeSwitch = () => {
		theme === 'dark' ? setTheme('light') : setTheme('dark');

		document.querySelector('.theme-dark')?.classList.add('animation');
		document.querySelector('.theme-light')?.classList.add('animation');
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

				<nav className="nav">
					<button className={`btn nav-action theme-toggle ${theme}`} title="switch theme" onClick={onThemeSwitch}>
						<Icon name="sun" title="switch to dark theme" className="theme-light" size="md" />
						<Icon name="moon" title="switch to light theme" className="theme-dark" size="md" />
					</button>
					<ul className="nav-list">
						<li className="nav__item">
							<Link to="/" className="nav__link" onClick={onCloseMenu}>
								Pokedex
								<Icon name="arrow-right" title="go to pokedex" size="md" />
							</Link>
						</li>
						<li className="nav__item">
							<Link to="/favorites" className="nav__link" onClick={onCloseMenu}>
								<span>Favorites</span>
								<Icon name="arrow-right" title="go to favorites" size="md" />
							</Link>
						</li>
					</ul>

					<MenuButton onToggleMenu={onToggleMenu} />
				</nav>
			</header>
		</>
	);
};
