import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PhotosReducer from './reducer_photos';
import TeamProfileImagesReducer from './reducer_team_profile_images';
import TeamProfileTextReducer from './reducer_team_profile_text';

const rootReducer = combineReducers({
	photos: PhotosReducer,
	teamprofileimages: TeamProfileImagesReducer,
	teamprofiletext: TeamProfileTextReducer,
	form: formReducer
});

export default rootReducer;