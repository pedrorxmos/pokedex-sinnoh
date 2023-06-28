import { Link } from 'react-router-dom';

import './Topbar.scss';

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
						theme
					</button>
					<ul className="nav-list">
						<li className="nav__item">
							<Link to="/" className="nav__link">
								Pokedex
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									className="feather feather-arrow-right"
								>
									<line x1="5" y1="12" x2="19" y2="12"></line>
									<polyline points="12 5 19 12 12 19"></polyline>
								</svg>
							</Link>
						</li>
						<li className="nav__item">
							<Link to="/favorites" className="nav__link">
								Favorites
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									className="feather feather-arrow-right"
								>
									<line x1="5" y1="12" x2="19" y2="12"></line>
									<polyline points="12 5 19 12 12 19"></polyline>
								</svg>
							</Link>
						</li>
					</ul>

					<button className="btn nav-action menu-toggle" onClick={toggleMenu}>
						X
					</button>
				</nav>
			</header>
		</>
	);
};
