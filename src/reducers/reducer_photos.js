import _ from 'lodash';
import { FETCH_PHOTOS } from '../actions';
import { DELETE_PHOTO } from '../actions';
import { TEST_ONE } from '../actions';
import { TEST_TWO } from '../actions';
import { TEST_THREE } from '../actions';

const blah = {};

export default function(state = {}, action){
	switch(action.type){
		case FETCH_PHOTOS:
			const first20 = action.payload.data.slice(0, 20);
			console.log(first20);
			console.log('first20 ' + action.payload.data)
			return _.mapKeys(first20, 'id');

		case DELETE_PHOTO:


			//need to get two payloads into here, list of json elements and the id

			//return _.omit(state, action.payload);
			
			console.log('hi');

			console.log('delete photo is: ' + action.payload.url)
			console.log('delete photo is: ' + action.payload.id)
			//console.log('delete photo is: ' + action.id)

			// console.log(action.payload);
			// console.log(action.payload.data);
			// console.log(action.payload.request);
			// console.log(action.payload.id);

			// console.log('delete_photo is: ' + action.payload);
			// console.log('blah is: ' + blah);

			//assemble(action.payload);
			//console.log('delete_photo is: ' + action.payload.data);
			

			//const first20_new = action.payload[1].data.slice(0, 20);
			//console.log(action.payload[1](data));
			//console.log('first20 ' + first20_new);
			//console.log('data is: ' + action.payload[0]);
			//console.log('delete photo' + action.payload[1]);
			
			//const first20again = action.payload[0].data.slice(0, 20);
			//console.log(first20again);
			//console.log("request is: " + action.payload.data)
			// console.log('id is: ' + action.payload.data);

			//const findItemFromData = action.payload[1].indexOf(action.payload[0]);
			//console.log(findItemFromData);
			// const removeItemFromData = action.payload.request.splice(findItemFromData, 1);
			// return _.mapKeys(removeItemFromData, action.payload[0]);
		case TEST_ONE:
			//console.log("test one is: " + action.payload);
		case TEST_TWO:
			//console.log("test two is: " + action.payload);
		// case TEST_THREE:
		// 	console.log("test three is: " + action.payload);
		default:
			return state; 
	}

	// function assemble(stuff){

	// }
}

