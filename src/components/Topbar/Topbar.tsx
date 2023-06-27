import { Link } from 'react-router-dom';

import './Topbar.scss';

export const Topbar = () => {
	return (
		<>
			<header className="topbar">
				<Link className="h3 logo" to="/">
					Pokedex
				</Link>

				<nav className="nav">
					<input type="checkbox" name="theme-toggle" id="theme-toggle" className="theme-toggle" />
					<ul className="nav-list">
						<li className="nav__item">
							<Link to="/" className="nav__item">
								Pokedex
							</Link>
						</li>
						<li className="nav__item">
							<Link to="/favorites" className="nav__item">
								Favorites
							</Link>
						</li>
					</ul>

					<button className="btn menu-toggle">X</button>
				</nav>
			</header>
		</>
	);
};
