import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';
import multi from 'redux-multi';
import thunk from 'redux-thunk';

import reducers from './reducers';
import PhotosIndex from './components/photos_index';
import PhotosNew from './components/photos_new';
import PhotosShow from './components/photos_show';

const createStoreWithMiddleware = applyMiddleware(promise, multi, thunk)(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<BrowserRouter>
			<div>
				<Switch>
					<Route path="/photos/new" component={PhotosNew} />
					<Route path="/photos/:id" component={PhotosShow} />
					<Route path="/" component={PhotosIndex} />
				</Switch>
			</div>
		</BrowserRouter>
	</Provider>
	, document.querySelector('.container'));