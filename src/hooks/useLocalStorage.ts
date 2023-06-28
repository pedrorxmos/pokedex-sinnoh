interface LocalStorageProps {
	key: string;
	value: string;
	defaultValue: string;
}

export const useGetItem = ({ key, defaultValue }: LocalStorageProps) => {
	return localStorage.getItem(key) || defaultValue;
};

export const useSetItem = ({ key, value }: LocalStorageProps) => {
	localStorage.setItem(key, value);
};
