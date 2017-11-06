import _ from 'lodash';
import { FETCH_TEAMPROFILE_TEXT } from '../actions';

export default function(state = {}, action){
	switch(action.type){
		
		case FETCH_TEAMPROFILE_TEXT:
			return _.mapKeys(action.payload.data, 'id');

		default:
			return state; 
	}
}