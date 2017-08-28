import axios from 'axios';

export const FETCH_PHOTOS = 'fetch_photos';
export const DELETE_PHOTO = 'delete_photo';

const ROOT_URL = 'https://jsonplaceholder.typicode.com'

export function fetchPhotos(){
	const request = axios.get(`${ROOT_URL}/photos`);

	return {
		type: FETCH_PHOTOS,
		payload: request
	};
}

export function deletePhoto(id){
	const request = axios.get(`${ROOT_URL}/photos/${id}`)
	.then(() => callback());

	return {
		type: DELETE_PHOTO,
		payload: id
	}
}