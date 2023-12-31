import { PokemonType } from '../';
import { useFetch } from '../../hooks/useFetch';
import { EntryType, PokemonTypes, TypeTypes, PokeAPITypes } from '../../interfaces';

import './PokemonCard.scss';

export interface PokemonCardProps {
	name: string;
	url: string;
	entry: EntryType;
	className: string;
	onClickPokemon: (params: PokemonTypes) => void;
}

export const PokemonCard = ({ name, url, entry, className, onClickPokemon }: PokemonCardProps) => {
	// URL exmple https://pokeapi.co/api/v2/pokemon-species/389/
	// So I separate the url by '/', and that leaves the id in the 7th spot of the array

	const id = url.split('/')[6];
	const { data } = useFetch<PokeAPITypes>(`https://pokeapi.co/api/v2/pokemon/${id}/`);
	const { types, stats } = data || {};

	const onClick = () => {
		const pokemon: PokemonTypes = {
			id: id,
			name: name,
			entry: entry,
			types: types,
			stats: stats,
		};

		onClickPokemon(pokemon);
	};

	return (
		<button role="pokemon-card" className={`pokemon-card ${className}`} onClick={onClick}>
			<img
				role="pokemon-card__img"
				src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/${id}.png`}
				alt={`${name} sprite`}
				className="pokemon-card__img"
			/>
			<div className="pokemon-card__info">
				<div className="pokemon-card__info__header">
					<small className="info__id">{`#${id}`}</small>
					<span className="info__name h5">{name}</span>
				</div>

				<div className="pokemon-card__info__types">
					{types?.map((type: TypeTypes) => (
						<PokemonType key={type.slot} value={type.type.name} />
					))}
				</div>
			</div>
		</button>
	);
};
