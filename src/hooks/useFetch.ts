import { useEffect, useState } from 'react';

interface FetchType {
	data: any;
	isLoading: boolean;
	hasError: unknown;
}

export const useFetch = (url: string) => {
	const [state, setState] = useState({
		data: {},
		isLoading: true,
		hasError: null,
	});

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
			hasError: null,
		});
	};

	useEffect(() => {
		getFetch();
	}, [url]);

	const res: FetchType = {
		data: state.data,
		isLoading: state.isLoading,
		hasError: state.hasError,
	};

	return res;
};
