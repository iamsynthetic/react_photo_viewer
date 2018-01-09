import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import promise from 'redux-promise';
import multi from 'redux-multi';
import thunk from 'redux-thunk';	

import reducers from './reducers';
import TopNavbar from './components/navigation/top_navbar';
import MainNavigation from './components/navigation/main_navigation';
import Routes from './components/navigation/routes';
import { Container, Row, Col } from 'reactstrap';
import { Nav, NavItem, NavLink, Navbar, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import styles from './style/styles.css';

<<<<<<< HEAD
import styles from './style/style.css';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
=======
const createStoreWithMiddleware = applyMiddleware(promise, multi, thunk)(createStore);
>>>>>>> livedata

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<BrowserRouter>
			
			<Container fluid>
         		<Row>
         			<TopNavbar />
         		</Row>
         		<Row>
         			<Routes/>
		        </Row>
         	</Container>
          
		</BrowserRouter>
	</Provider>
	, document.querySelector('.app-container'));