import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from '../../style/styles.scss';

import { Collapse, Navbar, NavbarToggler, NavBrand, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class TopBurgerNav extends Component {
	 
	render(){
		return (
			<div>
		    	<p>Look ma, no JavaScript!</p>
				{ /*
				<input className="burger-check" id="burger-check" type="checkbox">
					<label for="burger-check" className="burger"></label>
					<nav id="navigation1" className="navigation">
					  <ul>
					    <li><a href="#">Home</a></li>
					    <li><a href="#">Stuffs</a></li>
					    <li><a href="#">Other stuffs</a></li>
					    <li><a href="#">Cats</a></li>
					  </ul>
					</nav>
				</input>
			*/ }
			</div>
		)
	}
}

function mapStateToProps(state){
	return { photos: state.photos }
}

export default TopBurgerNav;