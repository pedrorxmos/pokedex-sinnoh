import './Pokedex.scss';

interface PokedexProps {
	title: string;
}

export const Pokedex = ({ title }: PokedexProps) => {
	return (
		<>
			<main className="pokedex">
				<h1>{title}</h1>
			</main>
		</>
	);
};
