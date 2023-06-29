import './Pokedex.scss';

interface PokedexProps {
	title: string;
}

export const Pokedex = ({ title }: PokedexProps) => {
	return (
		<>
			<main className="pokedex">
				<h1>{title}</h1>
				<section className="pokedex-container">
					<article className="pokedex-list"></article>
					<article className="pokedex-detail"></article>
				</section>
			</main>
		</>
	);
};
