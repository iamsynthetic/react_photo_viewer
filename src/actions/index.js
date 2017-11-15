import axios from 'axios';

export const FETCH_TEAM_INDEX_TITLE = 'fetch_team_index_title';
export const FETCH_TEAM_PAGE_PROFILE = 'fetch_team_page_profile';
export const FETCH_PHOTOS = 'fetch_photos';
export const CREATE_PHOTO = 'create_photo';
export const DELETE_PHOTO = 'delete_photo';

//const ROOT_URL = 'https://jsonplaceholder.typicode.com'
//resource - https://github.com/typicode/json-server
const ROOT_URL = 'http://localhost:3000'

export function fetchTeamIndexTitle(){
	const request = axios.get(`${ROOT_URL}/teampagetitle`)

	return {
		type: FETCH_TEAM_INDEX_TITLE,
		payload: request
	};
}

export function fetchTeamPageProfile(){
	const request = axios.get(`${ROOT_URL}/teampageprofile`)

	return {
		type: FETCH_TEAM_PAGE_PROFILE,
		payload: request
	};
}

export function fetchPhotos(){
	const request = axios.get(`${ROOT_URL}/photos`);

	return {
		type: FETCH_PHOTOS,
		payload: request
	};
}

export function createPhoto(values, callback){
	const request = axios.post(`${ROOT_URL}/photos`, values)
	.then(() => callback());

	return {
		type: CREATE_PHOTO,
		payload:request,
		payload2:values
	}
}

export function deletePhoto(id, callback){
	const request = axios.delete(`${ROOT_URL}/photos/${id}`)
	.then(() => callback());


	return{
		type: DELETE_PHOTO,
		payload: id
	}
}