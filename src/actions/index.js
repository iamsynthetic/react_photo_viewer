import axios from 'axios';

export const FETCH_PHOTOS = 'fetch_photos';
export const DELETE_PHOTO = 'delete_photo';

//const ROOT_URL = 'https://jsonplaceholder.typicode.com'
const ROOT_URL = 'http://localhost:3000'


export function fetchPhotos(){
	const request = axios.get(`${ROOT_URL}/photos`);

	return {
		type: FETCH_PHOTOS,
		payload: request
	};
}

// export function deletePhoto(){
// 	const request = axios.get(`${ROOT_URL}/photos`);	

// 	return {
// 		type: DELETE_PHOTO,
// 		payload:request
// 	}
// }

// export function photoId(id){
// 	console.log('actions id is: ' + id)
// 	return {
// 		type: PHOTO_ID,
// 		payload: id
// 	}
// }
// 
// 
// export function deletePhoto(id){
// 	const request = axios.get(`${ROOT_URL}/photos`);
//     const blah = 'hello';

// 	return [
// 		testOne(id),
// 		testTwo(request)
// 	]
// }

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

export function deletePhoto(id, callback){
	const request = axios.delete(`${ROOT_URL}/photos/${id}`)
	.then(() => callback());


	return{
		type: DELETE_PHOTO,
		payload: id
	}
}


// export function deletePhoto(id){
// 	axios({
// 	  method: 'DELETE',
// 	  url: `${ROOT_URL}/photos/${id}`,
// 	  headers: { 'Content-Type': 'application/json' },
// 	});

// 	return {
// 		type: DELETE_PHOTO,
// 		payload: id
// 	}
// }

// export function deletePhoto(id){
	
//     return (dispatch, getState) => {
// 	    //perform API call
// 	    axios({
// 	  method: 'DELETE',
// 	  url: `${ROOT_URL}/photos/${id}`,
// 	  headers: { 'Content-Type': 'application/json' }
// 	}).then(response => {
// 	        // now that you have the response, you can dispatch the action
// 	        dispatch({
// 	          type: DELETE_PHOTO,
// 	          payload: response
// 	        });
// 	      });
//   	}
// }
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