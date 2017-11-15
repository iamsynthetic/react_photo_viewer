import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import BlogPhotosReducer from './reducer_blog_photos';
import TeamProfileReducer from './reducer_team_profile';
import TeamIndexTitleReducer from './reducer_team_index_title';

const rootReducer = combineReducers({
	blogphotos: BlogPhotosReducer,
	teamprofile: TeamProfileReducer,
	TeamIndexTitleReducer: TeamIndexTitleReducer,
	form: formReducer
});

export default rootReducer;