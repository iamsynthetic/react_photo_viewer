import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import BlogReducer from './reducer_blog';
import TeamProfileReducer from './reducer_team_profile';
import TeamIndexTitleReducer from './reducer_team_index_title';

const rootReducer = combineReducers({
	blog: BlogReducer,
	teamprofile: TeamProfileReducer,
	TeamIndexTitleReducer: TeamIndexTitleReducer,
	form: formReducer
});

export default rootReducer;