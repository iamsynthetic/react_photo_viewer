import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from '../style/styles.css';
import { Container, Row, Col } from 'reactstrap';

class MainNavigation extends Component {

	render(){
		return (
			<div className="container">
      			<nav className="navbar navbar-default">
        			<div className="container-fluid">
          				<div className="navbar-header">
            				<a className="navbar-brand" className={ styles.links } href="#">Scotch Books</a>
            				<a className="navbar-brand" className={ styles.links } href="#">Scotch Books</a>
            				<a className="navbar-brand" className={ styles.links } href="#">Scotch Books</a>
				            <a className="navbar-brand" className={ styles.links } href="#">Scotch Books</a>
				            <a className="navbar-brand" className={ styles.links } href="#">Scotch Books</a>
				            <a className="navbar-brand" className={ styles.links } href="#">Scotch Books</a>
          				</div>
          				<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
				            <ul className="nav navbar-nav">
				              <li><Link to="/">Home</Link></li>
				              <li><Link to="/about">About</Link></li>
				              <li><Link to="/books">Book</Link></li>
				              <li><Link to="/cart">Cart</Link></li>
				            </ul>
          				</div>
        			</div>
      			</nav>
      			<Container>
        			<Row>
          				<Col className={ styles.moduleColor } lg="6">.col-6</Col>
          				<Col lg="6">.col-6</Col>
          			</Row>
          		</Container>
    		</div>
		)
	}
}

function mapStateToProps(state){
	return { photos: state.photos }
}

export default MainNavigation;