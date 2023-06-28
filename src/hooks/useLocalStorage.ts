export const useGetItem = (key: string, defaultValue: string) => {
	return localStorage.getItem(key) || defaultValue;
};

export const useSetItem = (key: string, value: string) => {
	localStorage.setItem(key, value);
};
