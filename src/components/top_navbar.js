import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from '../style/styles.css';

import { Nav, NavItem, NavDropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';

class TopNavbar extends Component {

	render(){
		return (
			<div>
		        <p className={ styles.headline }>List Based</p>
		        <Nav vertical>
		        	<NavItem>
		            <NavLink className={ styles.links } href="#">Link</NavLink>
		          </NavItem>
		          <NavItem>
		            <NavLink className={ styles.links } href="#">Link</NavLink>
		          </NavItem>
		          <NavItem>
		            <NavLink className={ styles.links } href="#">Another Link</NavLink>
		          </NavItem>
		          <NavItem>
		            <NavLink className={ styles.links } disabled href="#">Disabled Link</NavLink>
		          </NavItem>
		        </Nav>
		        <hr />
		        <p className={ styles.headline }>Link based</p>
		        <Nav vertical>
		          <NavLink className={ styles.links } href="#">Link</NavLink> 
		          <NavLink className={ styles.links } href="#">Link</NavLink> 
		          <NavLink className={ styles.links } href="#">Another Link</NavLink> 
		          <NavLink className={ styles.links } disabled href="#">Disabled Link</NavLink>
		        </Nav>
		    </div>
		)
	}
}

function mapStateToProps(state){
	return { photos: state.photos }
}

export default TopNavbar;