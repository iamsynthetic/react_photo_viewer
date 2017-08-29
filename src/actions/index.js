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
	//const request = axios.delete(`${ROOT_URL}/photos/${id}`)
	//.then(() => callback());
	// const request = axios.get(`${ROOT_URL}/photos`)
	// .then(() => callback());

	const request = axios.get(`${ROOT_URL}/photos`);

	const alldata = [id, request];
	//console.log(alldata);

	return {
		type: DELETE_PHOTO,
		payload: alldata
	}
}