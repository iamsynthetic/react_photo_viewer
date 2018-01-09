import _ from 'lodash';
import { FETCH_TEAM_PAGE_PROFILE } from '../actions';

export default function(state = {}, action){
	switch(action.type){
		case FETCH_TEAM_PAGE_PROFILE:
			
			return _.mapKeys(action.payload.data, 'id');

		default:
			return state; 
	}
}