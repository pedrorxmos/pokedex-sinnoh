import { Link } from 'react-router-dom';

import './Topbar.scss';
import { Icon } from '../Icon/Icon';

export const Topbar = () => {
	const toggleMenu = () => {
		document.querySelector('.nav')?.classList.toggle('open');
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
							<Link to="/" className="nav__link">
								Pokedex
								<Icon name="arrow-right" title="go to pokedex" />
							</Link>
						</li>
						<li className="nav__item">
							<Link to="/favorites" className="nav__link">
								<span>Favorites</span>
								<Icon name="arrow-right" title="go to favorites" />
							</Link>
						</li>
					</ul>

					<button className="btn nav-action menu-toggle" onClick={toggleMenu}>
						<Icon name="x" title="open/close menu" />
					</button>
				</nav>
			</header>
		</>
	);
};
