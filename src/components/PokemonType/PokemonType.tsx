import './PokemonType.scss';

interface PokemonTypeProps {
	value: string;
}

export const PokemonType = ({ value }: PokemonTypeProps) => {
	return <div>{value}</div>;
};
