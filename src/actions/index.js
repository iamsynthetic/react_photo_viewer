import axios from 'axios';

export const FETCH_HOME_PAGE = 'fetch_home_page';
export const FETCH_TEAM_INDEX_TITLE = 'fetch_team_index_title';
export const FETCH_TEAM_PAGE_PROFILE = 'fetch_team_page_profile';
export const FETCH_BLOGPOSTS = 'fetch_blogposts';
export const CREATE_BLOGPOST = 'create_blogpost';
export const DELETE_BLOGPOST = 'delete_blogpost';
export const FETCH_PHOTOS = 'fetch_photos';
export const CREATE_PHOTO = 'create_photo';
export const DELETE_PHOTO = 'delete_photo';
export const FETCH_CAPABILITY_PAGE = 'fetch_capability_page';
export const FETCH_CONTACT_PAGE = 'fetch_contact_page';

//const ROOT_URL = 'https://jsonplaceholder.typicode.com'
//resource - https://github.com/typicode/json-server
const ROOT_URL = 'http://localhost:3000'

export function fetchCapabilityPage(){
	const request = axios.get(`${ROOT_URL}/capability`)

	return {
		type: FETCH_CAPABILITY_PAGE,
		payload: request
	};
}

export function fetchContactPage(){
	const request = axios.get(`${ROOT_URL}/contact`)

	return {
		type: FETCH_CONTACT_PAGE,
		payload: request
	};
}

export function fetchHomePage(){
	const request = axios.get(`${ROOT_URL}/homepage`)

	return {
		type: FETCH_HOME_PAGE,
		payload: request
	};
}

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

export function fetchBlogPosts(){
	const request = axios.get(`${ROOT_URL}/blog`);

	return {
		type: FETCH_BLOGPOSTS,
		payload: request
	};
}

export function createBlogPost(values, callback){
	const request = axios.post(`${ROOT_URL}/blog`, values)
	.then(() => callback());

	return {
		type: CREATE_BLOGPOST,
		payload:request,
		payload2:values
	}
}

export function deleteBlogPost(id, callback){
	const request = axios.delete(`${ROOT_URL}/blog/${id}`)
	.then(() => callback());


	return{
		type: DELETE_BLOGPOST,
		payload: id
	}
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