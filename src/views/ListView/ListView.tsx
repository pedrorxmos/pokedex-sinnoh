import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { PokemonCard, Pagination } from '../../components';
import { EntryType, PokemonTypes } from '../../interfaces';

import './ListView.scss';

interface ListViewProps {
	pokedex: EntryType[];
	layout: string;
	onClickPokemon: (params: PokemonTypes) => void;
	currentPokemon: PokemonTypes;
	isDetailOpen: boolean;
	isLoading: boolean;
}

export const ListView = ({ pokedex, layout, onClickPokemon, currentPokemon, isDetailOpen, isLoading }: ListViewProps) => {
	const navigate = useNavigate();

	const [searchParams, setSearchParams] = useSearchParams();

	const itemsPerPage = 30;
	const maxPages = Math.ceil(pokedex?.length / itemsPerPage);
	const page = searchParams.get('page') || 1;
	const [offset, limit] = [itemsPerPage * +page - itemsPerPage, itemsPerPage * +page];

	const isActive = (value: EntryType) => {
		return currentPokemon.entry.entry_number === value.entry_number && isDetailOpen;
	};

	useEffect(() => {
		if (+page <= 1 || +page > maxPages) navigate('./');
	}, [page, maxPages, navigate]);

	return (
		<article className="pokedex-list">
			{isLoading && <p>Pokedex is loading...</p>}
			{!isLoading && pokedex?.length > 0 && (
				<div className={`pokedex-list__layout-${layout}`}>
					{pokedex?.slice(offset, limit).map((x: EntryType) => (
						<PokemonCard
							key={x.entry_number}
							entry={x}
							name={x.pokemon_species.name}
							url={x.pokemon_species.url}
							onClickPokemon={onClickPokemon}
							className={`${layout}${isActive(x) ? ' active' : ''}`}
						/>
					))}
				</div>
			)}
			{!isLoading && pokedex?.length <= 0 && <p>There is no Pokemon in this list</p>}

			{pokedex?.length > itemsPerPage && (
				<Pagination page={+page} maxPages={maxPages} itemsLength={pokedex?.length} offset={offset} limit={limit} setSearchParams={setSearchParams} />
			)}
		</article>
	);
};
