import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import HomePageReducer from './reducer_home_page';
import BlogReducer from './reducer_blog';
import TeamProfileReducer from './reducer_team_profile';
import TeamIndexTitleReducer from './reducer_team_index_title';

const rootReducer = combineReducers({
	home: HomePageReducer,
	blog: BlogReducer,
	teamprofile: TeamProfileReducer,
	TeamIndexTitleReducer: TeamIndexTitleReducer,
	form: formReducer
});

export default rootReducer;