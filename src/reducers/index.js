import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import ContactPageReducer from './reducer_contact_page';
import HomePageReducer from './reducer_home_page';
import BlogReducer from './reducer_blog';
import TeamProfileReducer from './reducer_team_profile';
import TeamIndexTitleReducer from './reducer_team_index_title';

const rootReducer = combineReducers({
	contact: ContactPageReducer,
	home: HomePageReducer,
	blog: BlogReducer,
	teamprofile: TeamProfileReducer,
	TeamIndexTitleReducer: TeamIndexTitleReducer,
	form: formReducer
});

export default rootReducer;