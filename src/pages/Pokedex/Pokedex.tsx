import { useState } from 'react';
import { LayoutSwitcher, Pokeball } from '../../components';
import { EntryType, PokemonTypes } from '../../interfaces';
import './Pokedex.scss';
import { useGetItem, useSetItem } from '../../hooks/useLocalStorage';
import { ListView } from '../../views/ListView/ListView';

interface PokedexProps {
	title: string;
	pokedex: EntryType[];
}

export const Pokedex = ({ title, pokedex }: PokedexProps) => {
	const [layout, setLayout] = useState(useGetItem('layoutStyle', 'grid'));
	useSetItem('layoutStyle', layout);
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
					<ListView pokedex={pokedex} layout={layout} onClickPokemon={onClickPokemon} />
					<article className="pokedex-detail">
						<Pokeball />
					</article>
				</section>
			</main>
		</>
	);
};
