import _ from 'lodash';
import { FETCH_TEAM_INDEX_TITLE } from '../actions';

export default function(state = {}, action){
	switch(action.type){
		case FETCH_TEAM_INDEX_TITLE:
			
			return _.mapKeys(action.payload.data, 'id');

		default:
			return state; 
	}
}