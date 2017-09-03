import _ from 'lodash';
import { FETCH_PHOTOS } from '../actions';
import { DELETE_PHOTO } from '../actions';

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
	
			//console.log('payload is: ' + action.payload.data);
			//console.log('payload2 is: ' + action.payload2)

			const thefirst20 = action.payload.data.slice(0, 20);
			console.log(thefirst20);
			const removeItem = thefirst20.splice((action.payload2-1), 1);
			console.log(removeItem);
			console.log('new thefirst20 is: ' + thefirst20);
			console.log(this.props);
			//return _.omit(state, removeItem);
			_.mapKeys(thefirst20, removeItem);
			console.log('state is: ' + state);

			// // return _.mapKeys(removeItem, thefirst20);
		
		default:
			return state; 
	}
}

