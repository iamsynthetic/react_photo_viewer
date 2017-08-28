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
			return _.omit(state, action.payload);
		default:
			return state; 
	}
}