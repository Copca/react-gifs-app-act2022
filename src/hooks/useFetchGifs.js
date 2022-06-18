import { useState, useEffect } from 'react';

import { getGifs } from '../helpers/getGifs';

const useFetchGifs = categoria => {
	const [imagenes, setImagenes] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const consultarAPI = async () => {
			const gifs = await getGifs(categoria);

			setImagenes(gifs);
			setIsLoading(false);
		};

		consultarAPI();
	}, []);

	return { imagenes, isLoading };
};

export default useFetchGifs;
