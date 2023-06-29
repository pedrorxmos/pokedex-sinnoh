import { useFetch } from '../../hooks/useFetch';
import './PokemonCard.scss';

interface PokemonCardProps {
	name: string;
	url: string;
}

export const PokemonCard = ({ name, url }: PokemonCardProps) => {
	// URL exmple https://pokeapi.co/api/v2/pokemon-species/389/
	// So I separate the url by '/', and that leaves the id in the 7th spot of the array

	const id = url.split('/')[6];
	const { data } = useFetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
	const { types, stats } = data || {};

	return (
		<div className="pokemon-card">
			<img
				src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/${id}.png`}
				alt={`${name} sprite`}
			/>
		</div>
	);
};
