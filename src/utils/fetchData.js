export const exerciseOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2a59dddbf5mshbde92c8a613df85p1b5522jsn6b89c2e29698',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
	},
};

export const youtubeOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2a59dddbf5mshbde92c8a613df85p1b5522jsn6b89c2e29698',
		'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
	},
};

export const fetchData = async (url, options) => {
	const response = await fetch(url, options);
	const data = await response.json();

	return data;
};
