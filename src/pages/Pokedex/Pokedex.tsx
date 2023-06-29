import { useEffect, useState } from 'react';
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

	// useEffect(() => {
	// 	const newPokedex: EntryType[] = [];
	// 	pokemon_entries?.slice(0, 15).forEach((x: EntryType) => {
	// 		newPokedex.push(x);
	// 	});
	// 	setPokedex(newPokedex);
	// 	console.log(pokedex);
	// }, [pokemon_entries]);
	return (
		<>
			<main className="pokedex">
				<h1>{title}</h1>
				<section className="pokedex-container">
					<article className="pokedex-list">
						{pokemon_entries?.slice(0, 15).map((x: EntryType) => (
							<p>{x.pokemon_species.name}</p>
						))}
					</article>
					<article className="pokedex-detail"></article>
				</section>
			</main>
		</>
	);
};
