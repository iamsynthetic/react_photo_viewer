import _ from 'lodash';
import { FETCH_HOME_PAGE } from '../actions';

export default function(state = {}, action){
	switch(action.type){
		case FETCH_HOME_PAGE:
			
			return _.mapKeys(action.payload.data, 'id');

		default:
			return state; 
	}
}