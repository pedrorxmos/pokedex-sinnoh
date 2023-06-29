import { useState } from 'react';
import { Pokeball, PokemonCard } from '../../components';
import { useFetch } from '../../hooks/useFetch';
import { EntryType, PokemonTypes } from '../../interfaces';
import './Pokedex.scss';

interface PokedexProps {
	title: string;
	pokedex: EntryType[];
}

export const Pokedex = ({ title, pokedex }: PokedexProps) => {
	const [layout, setLayout] = useState('list');
	console.log(layout);

	const onClickPokemon = (pokemon: PokemonTypes): void => {
		console.log(pokemon.name);
	};

	return (
		<>
			<main className="pokedex">
				<h1>{title}</h1>
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
