import './Pokedex.scss';

interface PokedexProps {
	title: string;
}

export const Pokedex = ({ title }: PokedexProps) => {
	return <div>Pokedex - {title}</div>;
};
