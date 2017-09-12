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
		        <p className={styles.test}>List Based</p>
				<p className={ styles.text }>Scoped Selectors</p>
		        <Nav vertical>
		        	<NavItem>
		            <NavLink href="#">Link</NavLink>
		          </NavItem>
		          <NavItem>
		            <NavLink href="#">Link</NavLink>
		          </NavItem>
		          <NavItem>
		            <NavLink href="#">Another Link</NavLink>
		          </NavItem>
		          <NavItem>
		            <NavLink disabled href="#">Disabled Link</NavLink>
		          </NavItem>
		        </Nav>
		        <hr />
		        <p className={styles.test}>Link based</p>
		        <Nav vertical>
		          <NavLink href="#">Link</NavLink> <NavLink href="#">Link</NavLink> <NavLink href="#">Another Link</NavLink> <NavLink disabled href="#">Disabled Link</NavLink>
		        </Nav>
		    </div>
		)
	}
}

function mapStateToProps(state){
	return { photos: state.photos }
}

export default TopNavbar;