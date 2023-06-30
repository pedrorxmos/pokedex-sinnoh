import { useNavigate, useSearchParams } from 'react-router-dom';
import { PokemonCard } from '../../components';
import { EntryType, PokemonTypes } from '../../interfaces';

import './ListView.scss';
import { useEffect } from 'react';
import { Pagination } from '../../components/Pagination/Pagination';

interface ListViewProps {
	pokedex: EntryType[];
	layout: string;
	onClickPokemon: (params: PokemonTypes) => void;
}

export const ListView = ({ pokedex, layout, onClickPokemon }: ListViewProps) => {
	const navigate = useNavigate();

	const [searchParams, setSearchParams] = useSearchParams();

	const itemsPerPage = 30;
	const maxPages = Math.ceil(pokedex?.length / itemsPerPage);
	const page = searchParams.get('page') || 1;
	const [offset, limit] = [itemsPerPage * +page - itemsPerPage, itemsPerPage * +page];

	useEffect(() => {
		if (+page <= 1 || +page > maxPages) navigate('./');
	}, [page, maxPages, navigate]);

	return (
		<article className="pokedex-list">
			<div className={`pokedex-list__layout-${layout}`}>
				{pokedex?.slice(offset, limit).map((x: EntryType) => (
					<PokemonCard
						key={x.entry_number}
						entry={x}
						name={x.pokemon_species.name}
						url={x.pokemon_species.url}
						onClickPokemon={onClickPokemon}
						className={layout}
					/>
				))}
			</div>
			{pokedex?.length > itemsPerPage && (
				<Pagination page={+page} maxPages={maxPages} itemsLength={pokedex?.length} offset={offset} limit={limit} setSearchParams={setSearchParams} />
			)}
		</article>
	);
};
