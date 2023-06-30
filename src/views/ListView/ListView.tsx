import { PokemonCard } from '../../components';
import { EntryType, PokemonTypes } from '../../interfaces';

import './ListView.scss';

interface ListViewProps {
	pokedex: EntryType[];
	layout: string;
	onClickPokemon: (params: PokemonTypes) => void;
}

export const ListView = ({ pokedex, layout, onClickPokemon }: ListViewProps) => {
	const itemsPerPage = 30;
	const page = 7;

	return (
		<article className={`pokedex-list pokedex-list__layout-${layout}`}>
			{pokedex?.slice(itemsPerPage * page - itemsPerPage, itemsPerPage * page).map((x: EntryType) => (
				<PokemonCard
					key={x.entry_number}
					entry={x}
					name={x.pokemon_species.name}
					url={x.pokemon_species.url}
					onClickPokemon={onClickPokemon}
					className={layout}
				/>
			))}
		</article>
	);
};
