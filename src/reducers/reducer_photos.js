import _ from 'lodash';
import { FETCH_PHOTOS } from '../actions';

export default function(state = {}, action){
	switch(action.type){
		case FETCH_PHOTOS:
			const first20 = action.payload.data.slice(0, 20);
			return _.mapKeys(first20, 'id');
		default:
			return state; 
	}
}