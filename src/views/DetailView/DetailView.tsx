import { Icon, Pokeball, PokemonType } from '../../components';
import { PokemonTypes, StatTypes, TypeTypes } from '../../interfaces';
import './DetailView.scss';

interface DetailViewProps {
	pokemon?: PokemonTypes;
}

export const DetailView = ({ pokemon }: DetailViewProps) => {
	//Add entry when adding favorites
	const { id, name, types, stats } = pokemon || {};

	const onClosePokemon = () => {
		document.querySelector('.pokedex-detail')?.classList.remove('open');
	};

	const onAddFavorite = () => {
		console.log('name');
	};

	return (
		<>
			<article className="pokedex-detail">
				<Pokeball />

				<button className="btn pokedex-detail__action pokedex-detail__action__favorite active" onClick={onAddFavorite} title="add to favorites">
					<Icon name="heart" title="add to favorites" size="lg" />
				</button>

				<button className="btn pokedex-detail__action pokedex-detail__action__close" onClick={onClosePokemon}>
					<Icon name="x" title="close pokemon" size="lg" />
				</button>
				<div className="pokedex-detail__content">
					<img
						src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
						alt=""
						className="pokedex-detail__content__img"
					/>
					<div className="pokedex-detail__content__info">
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
				</div>
			</article>
			<div className="pokedex-detail__overlay" onClick={onClosePokemon}></div>
		</>
	);
};
