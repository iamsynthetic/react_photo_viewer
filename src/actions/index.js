import axios from 'axios';

export const FETCH_TEAMPROFILE_TEXT = 'fetch_teamprofile_text';
export const FETCH_TEAMPROFILE_IMAGES = 'fetch_teamprofile_images';
export const FETCH_PHOTOS = 'fetch_photos';
export const CREATE_PHOTO = 'create_photo';
export const DELETE_PHOTO = 'delete_photo';

//const ROOT_URL = 'https://jsonplaceholder.typicode.com'
//resource - https://github.com/typicode/json-server
const ROOT_URL = 'http://localhost:3000'

export function fetchTeamProfileText(){
	const request = axios.get(`${ROOT_URL}/teamprofiletext`)

	return {
		type: FETCH_TEAMPROFILE_TEXT,
		payload: request
	};
}

export function fetchTeamProfileImages(){
	const request = axios.get(`${ROOT_URL}/teamprofileimages`)

	return {
		type: FETCH_TEAMPROFILE_IMAGES,
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

// export function deletePhoto(id){
	
//     return (dispatch, getState) => {
// 	    //perform API call
// 	    axios.get(`${ROOT_URL}/photos/`)
// 	      .then(response => {
// 	        // now that you have the response, you can dispatch the action
// 	        dispatch({
// 	          type: DELETE_PHOTO,
// 	          payload: response,
// 	          payload2: id
// 	        });
// 	      });
//   	}
// }