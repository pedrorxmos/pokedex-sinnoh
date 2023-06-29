import './PokemonType.scss';

interface PokemonTypeProps {
	value: string;
}

export const PokemonType = ({ value }: PokemonTypeProps) => {
	return <span className={`pokemon-type bg-${value}`}>{value}</span>;
};
