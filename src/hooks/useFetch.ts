import { useEffect, useState } from 'react';

interface FetchType<T> {
	data: T;
	isLoading: boolean;
	hasError: unknown;
}

export const useFetch = <T>(url: string) => {
	const initialState: FetchType<T> = {
		data: <T>{},
		isLoading: true,
		hasError: null,
	};

	const [state, setState] = useState(initialState);

	const getFetch = async () => {
		setState({
			...state,
			isLoading: true,
		});

		const resp = await fetch(url);
		const data = await resp.json();
		setState({
			data,
			isLoading: false,
			hasError: data.error,
		});
	};

	useEffect(() => {
		getFetch();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [url]);

	return {
		data: state.data,
		isLoading: state.isLoading,
		hasError: state.hasError,
	};
};
