import { Link } from 'react-router-dom';
import { Icon, MenuButton } from '../';
import './Topbar.scss';

export const Topbar = () => {
	const onToggleMenu = () => {
		document.querySelector('.nav')?.classList.toggle('open');
	};

	const onCloseMenu = () => {
		document.querySelector('.nav')?.classList.remove('open');
	};

	return (
		<>
			<header className="topbar">
				<Link className="h3 logo" to="/">
					Pokedex
				</Link>

				<nav className="nav">
					<button className="btn nav-action theme-toggle" title="switch theme">
						<Icon name="sun" title="switch to dark theme" className="theme-light" />
						<Icon name="moon" title="switch to light theme" className="theme-dark" />
					</button>
					<ul className="nav-list">
						<li className="nav__item">
							<Link to="/" className="nav__link" onClick={onCloseMenu}>
								Pokedex
								<Icon name="arrow-right" title="go to pokedex" />
							</Link>
						</li>
						<li className="nav__item">
							<Link to="/favorites" className="nav__link" onClick={onCloseMenu}>
								<span>Favorites</span>
								<Icon name="arrow-right" title="go to favorites" />
							</Link>
						</li>
					</ul>

					<MenuButton onToggleMenu={onToggleMenu} />
				</nav>
			</header>
		</>
	);
};
