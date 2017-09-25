import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PhotosReducer from './reducer_photos';
import ProfileReducer from './reducer_profile';

const rootReducer = combineReducers({
	photos: PhotosReducer,
	profileimages: ProfileReducer,
	form: formReducer
});

export default rootReducer;