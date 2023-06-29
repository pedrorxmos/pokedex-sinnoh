import { StatTypes, TypeTypes } from '.';

export interface PokemonTypes {
	name: string;
	url: string;
	types: TypeTypes[];
	stats: StatTypes[];
}
