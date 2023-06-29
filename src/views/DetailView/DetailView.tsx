import { Pokeball, PokemonType } from '../../components';
import { PokemonTypes, StatTypes, TypeTypes } from '../../interfaces';
import './DetailView.scss';

interface DetailViewProps {
	pokemon?: PokemonTypes;
}

export const DetailView = ({ pokemon }: DetailViewProps) => {
	const { id, name, entry, types, stats } = pokemon || {};

	return (
		<>
			<article className="pokedex-detail">
				<Pokeball />
				<div className="pokedex-detail__content">
					<img
						src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
						alt=""
						className="pokedex-detail__content__img"
					/>
					<div className="pokedex-detail__content__header">
						<small className="detail__id">{`#${id}`}</small>
						<span className="detail__name h2">{name}</span>
						<div className="detail__types">
							{types?.map((type: TypeTypes) => (
								<PokemonType key={type.slot} value={type.type.name} />
							))}
						</div>
					</div>
					<div className="pokedex-detail__content__stats">
						{stats?.map((stat: StatTypes) => (
							<div key={stat.stat.name} className="detail__stat">
								<span className="stat__title">{stat.stat.name.replace('-', ' ')}</span>
								<span className="stat__value">{stat.base_stat}</span>
							</div>
						))}
					</div>
				</div>
			</article>
		</>
	);
};
