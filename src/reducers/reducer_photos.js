import _ from 'lodash';
import { FETCH_PHOTOS } from '../actions';
import { DELETE_PHOTO } from '../actions';

export default function(state = {}, action){
	switch(action.type){
		case FETCH_PHOTOS:
			const first20 = action.payload.data.slice(0, 20);
			console.log(first20);
			return _.mapKeys(first20, 'id');

		case DELETE_PHOTO:


			//need to get two payloads into here, list of json elements and the id

			//return _.omit(state, action.payload);
			
			console.log('hi');

			//const first20_new = action.payload[1].data.slice(0, 20);
			console.log(action.payload[1](data));
			//console.log('first20 ' + first20_new);
			console.log('data is: ' + action.payload[0]);
			console.log('delete photo' + action.payload[1]);
			
			// console.log('id is: ' + action.payload.data);

			const findItemFromData = action.payload[1].indexOf(action.payload[0]);
			console.log(findItemFromData);
			// const removeItemFromData = action.payload.request.splice(findItemFromData, 1);
			// return _.mapKeys(removeItemFromData, action.payload[0]);
		default:
			return state; 
	}
}