import './PokemonCard.scss';

interface PokemonCardProps {
	name: string;
	url: string;
}

export const PokemonCard = ({ name, url }: PokemonCardProps) => {
	return (
		<div>
			{name}
			{url}
		</div>
	);
};
