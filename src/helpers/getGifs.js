export const getGifs = async categoria => {
	const url = `https://api.giphy.com/v1/gifs/search?q=${categoria}&limit=10&api_key=3Ch6bmJGLaa92Ov13cIWXHdiZJVefSyy`;

	const resp = await fetch(url);
	const { data } = await resp.json();

	const gifs = data.map(gif => ({
		id: gif.id,
		titulo: gif.title,
		url: gif.images.downsized_medium.url
	}));

	// console.log(gifs);

	return gifs;
};
