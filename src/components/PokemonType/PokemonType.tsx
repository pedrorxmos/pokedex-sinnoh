import './PokemonType.scss';

interface PokemonTypeProps {
	value: string;
}

export const PokemonType = ({ value }: PokemonTypeProps) => {
	return (
		<div className={`pokemon-type bg-${value}`}>
			<span>{value}</span>
		</div>
	);
};
