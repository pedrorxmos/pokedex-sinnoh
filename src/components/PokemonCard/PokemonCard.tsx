import { useFetch } from '../../hooks/useFetch';
import { PokemonTypes, TypeTypes } from '../../interfaces';
import './PokemonCard.scss';

export interface PokemonCardProps {
	name: string;
	url: string;
	onClickPokemon: (params: PokemonTypes) => void;
}

export const PokemonCard = ({ name, url, onClickPokemon }: PokemonCardProps) => {
	// URL exmple https://pokeapi.co/api/v2/pokemon-species/389/
	// So I separate the url by '/', and that leaves the id in the 7th spot of the array

	const id = url.split('/')[6];
	const { data } = useFetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
	const { types, stats } = data || {};

	const onClick = () => {
		const pokemon: PokemonTypes = {
			name: name,
			url: url,
			types: types,
			stats: stats,
		};

		onClickPokemon(pokemon);
	};

	return (
		<button className="pokemon-card" onClick={onClick}>
			<img
				src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/${id}.png`}
				alt={`${name} sprite`}
			/>
			<div className="pokemon-card__info">
				<div className="pokemon-card__info__header">
					<small className="info__id">{`#${id}`}</small>
					<h3 className="info__name">name</h3>
				</div>

				<div className="pokemon-card__info__types">
					{types?.map((type: TypeTypes) => (
						<span key={type.slot}>{type.type.name}</span>
					))}
				</div>
			</div>
		</button>
	);
};
