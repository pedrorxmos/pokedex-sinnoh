import { EntryType, StatTypes, TypeTypes } from '.';

export interface PokemonTypes {
	id: string;
	name: string;
	entry: EntryType;
	types: TypeTypes[];
	stats: StatTypes[];
}
