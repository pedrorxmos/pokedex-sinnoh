import { StatTypes, TypeTypes } from '.';

export interface PokeAPITypes {
	id: number;
	name: string;
	types: TypeTypes[];
	stats: StatTypes[];
}
