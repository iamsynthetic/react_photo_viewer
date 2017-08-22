import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PhotosReducer from './reducer_photos';

const rootReducer = combineReducers({
	photos: PhotosReducer,
	form: formReducer
});

export default rootReducer;