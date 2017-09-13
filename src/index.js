import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import promise from 'redux-promise';
import multi from 'redux-multi';
import thunk from 'redux-thunk';	

import reducers from './reducers';
import TopNavbar from './components/top_navbar';
import MainNavigation from './components/main_navigation';
import PhotosIndex from './components/photos_index';
import PhotosNew from './components/photos_new';
import PhotosShow from './components/photos_show';
import { Container, Row, Col } from 'reactstrap';
import styles from './style/styles.css';

const createStoreWithMiddleware = applyMiddleware(promise, multi, thunk)(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<BrowserRouter>
			<div>
				<TopNavbar />
				<Container>
        			<Row>
          				<Col className={ styles.moduleColor } lg="6">
          					<MainNavigation />
          				</Col>
          				<Col lg="6">
          					<Switch>
								<Route path="/photos/new" component={PhotosNew} />
								<Route path="/photos/:id" component={PhotosShow} />
								<Route path="/" component={PhotosIndex} />
							</Switch>
          				</Col>
          			</Row>
          		</Container>
          	</div>
		</BrowserRouter>
	</Provider>
	, document.querySelector('.blah'));