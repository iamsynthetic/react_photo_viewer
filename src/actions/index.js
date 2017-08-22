import axios from 'axios';

export const FETCH_PHOTOS = 'fetch_photos';

const ROOT_URL = 'https://jsonplaceholder.typicode.com/'

export function fetchPhotos(){
	const request = axios.get(`${ROOT_URL}/photos`);

	return {
		type: FETCH_PHOTOS,
		payload: request
	};
}