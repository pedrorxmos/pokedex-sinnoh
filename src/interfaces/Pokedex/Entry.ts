export interface PokedexTypes {
	descriptions: Description[];
	id: number;
	is_main_series: boolean;
	name: string;
	names: Name[];
	pokemon_entries: EntryType[];
	region: Region;
	version_groups: VersionGroup[];
}

export interface EntryType {
	entry_number: number;
	pokemon_species: {
		name: string;
		url: string;
	};
}

export interface Description {
	description: string;
	language: Language;
}

export interface Language {
	name: string;
	url: string;
}

export interface Name {
	language: Language2;
	name: string;
}

export interface Language2 {
	name: string;
	url: string;
}

export interface PokemonSpecies {
	name: string;
	url: string;
}

export interface Region {
	name: string;
	url: string;
}

export interface VersionGroup {
	name: string;
	url: string;
}
