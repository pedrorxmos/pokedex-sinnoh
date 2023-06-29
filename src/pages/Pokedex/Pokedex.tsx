import { PokemonCard } from '../../components';
import { useFetch } from '../../hooks/useFetch';
import { EntryType, PokemonTypes } from '../../interfaces';
import './Pokedex.scss';

interface PokedexProps {
	title: string;
}

export const Pokedex = ({ title }: PokedexProps) => {
	const { data } = useFetch('https://pokeapi.co/api/v2/pokedex/6/');
	const { pokemon_entries } = data || [];

	const onClickPokemon = (pokemon: PokemonTypes): void => {
		console.log(pokemon.name);
	};

	return (
		<>
			<main className="pokedex">
				<h1>{title}</h1>
				<section className="pokedex-container">
					<article className="pokedex-list pokedex-list__layout-grid">
						{pokemon_entries?.slice(0, 15).map((x: EntryType) => (
							<PokemonCard key={x.entry_number} name={x.pokemon_species.name} url={x.pokemon_species.url} onClickPokemon={onClickPokemon} />
						))}
					</article>
					{/* <article className="pokedex-detail"></article> */}
				</section>
			</main>
		</>
	);
};
