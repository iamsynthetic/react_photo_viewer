import axios from 'axios';

export const FETCH_PHOTOS = 'fetch_photos';
export const DELETE_PHOTO = 'delete_photo';
export const TEST_ONE = 'test_one';
export const TEST_TWO = 'test_two';
export const TEST_THREE = 'test_three';

const ROOT_URL = 'https://jsonplaceholder.typicode.com'

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

export function deletePhoto(id){
	
    return (dispatch, getState) => {
	    //perform API call
	    axios.get(`${ROOT_URL}/photos/`)
	      .then(response => {
	        // now that you have the response, you can dispatch the action
	        dispatch({
	          type: DELETE_PHOTO,
	          payload: response,
	          payload2: id
	        });
	      });
  	}
}


export function testOne(id){
	const request = id;
		return {
		type: TEST_ONE,
		payload:request
	}
}

export function testTwo(req){
	const request = req;
		return {
		type: TEST_TWO,
		payload:request
	}
}

// export function testThree(){
// 	const request = "3";
// 		return {
// 		type: TEST_THREE,
// 		payload:request
// 	}
// }