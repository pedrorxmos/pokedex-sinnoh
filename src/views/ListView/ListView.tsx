import { PokemonCard } from '../../components';
import { EntryType, PokemonTypes } from '../../interfaces';

import './ListView.scss';

interface ListViewProps {
	pokedex: EntryType[];
	layout: string;
	onClickPokemon: (params: PokemonTypes) => void;
}

export const ListView = ({ pokedex, layout, onClickPokemon }: ListViewProps) => {
	return (
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
	);
};
