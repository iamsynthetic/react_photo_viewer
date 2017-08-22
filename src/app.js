import React from 'react';
import ReactDOM from 'react-dom';
import { Provider  } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';
import BooksIndex from './components/books_index';
import BooksShow from './components/books_show';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<BrowserRouter>
			<div>
				<Switch>
					<Route path="/books/new" component={BooksNew} />
					<Route path="/books/:id" component={BooksShow} />
					<Route path="/" component={BooksIndex} />
				</Switch>
			</div>
		</BrowserRouter>
	</Provider>
	, document.querySelector('#app'));
)