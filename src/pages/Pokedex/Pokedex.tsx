import { PokemonCard } from '../../components/PokemonCard/PokemonCard';
import { useFetch } from '../../hooks/useFetch';
import './Pokedex.scss';

interface PokedexProps {
	title: string;
}

interface EntryType {
	entry_number: number;
	pokemon_species: {
		name: string;
		url: string;
	};
}

export const Pokedex = ({ title }: PokedexProps) => {
	const { data } = useFetch('https://pokeapi.co/api/v2/pokedex/6/');
	const { pokemon_entries } = data || [];

	const onClickPokemon = (e: React.MouseEvent<HTMLButtonElement>, pokemon: object) => {
		console.log(pokemon.name);
	};

	return (
		<>
			<main className="pokedex">
				<h1>{title}</h1>
				<section className="pokedex-container">
					<article className="pokedex-list">
						{pokemon_entries?.slice(0, 15).map((x: EntryType) => (
							<PokemonCard key={x.entry_number} name={x.pokemon_species.name} url={x.pokemon_species.url} onClickPokemon={onClickPokemon} />
						))}
					</article>
					<article className="pokedex-detail"></article>
				</section>
			</main>
		</>
	);
};
