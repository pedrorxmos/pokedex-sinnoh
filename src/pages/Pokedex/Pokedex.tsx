import { useState } from 'react';
import { LayoutSwitcher, Pokeball, PokemonCard } from '../../components';
import { EntryType, PokemonTypes } from '../../interfaces';
import './Pokedex.scss';

interface PokedexProps {
	title: string;
	pokedex: EntryType[];
}

export const Pokedex = ({ title, pokedex }: PokedexProps) => {
	const [layout, setLayout] = useState('list');

	const onClickPokemon = (pokemon: PokemonTypes): void => {
		console.log(pokemon.name);
	};

	return (
		<>
			<main className="pokedex">
				<div className="pokedex-header">
					<h1>{title}</h1>
					<div className="pokedex-header__filters">
						<LayoutSwitcher layout={layout} setLayout={setLayout} />
					</div>
				</div>
				<section className="pokedex-container">
					<article className={`pokedex-list pokedex-list__layout-${layout}`}>
						{pokedex?.slice(0, 15).map((x: EntryType) => (
							<PokemonCard
								key={x.entry_number}
								name={x.pokemon_species.name}
								url={x.pokemon_species.url}
								onClickPokemon={onClickPokemon}
								className={layout}
							/>
						))}
					</article>
					<article className="pokedex-detail">
						<Pokeball />
					</article>
				</section>
			</main>
		</>
	);
};
