import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from '../../style/styles.css';
import { Glyphicon, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button, CardBlock, Card } from 'react-bootstrap';
import {MenuItem, NavDropdown } from 'react-bootstrap';

// import Navbar from 'react-bootstrap/lib/Navbar';
// import Nav from 'react-bootstrap/lib/Nav';
// import NavItem from 'react-bootstrap/lib/NavItem';
// import MenuItem from 'react-bootstrap/lib/MenuItem';
// import NavDropdown from 'react-bootstrap/lib/NavDropdown';

class TopNavbar extends Component {
	constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
	
	

	render(){
		return (
			<div>
				<Navbar fluid inverse collapseOnSelect>
				    <Navbar.Header>
				      <Navbar.Brand>
				        <a href="#">React-Bootstrap</a>
				      </Navbar.Brand>
				      <Navbar.Toggle />
				    </Navbar.Header>
				    <Navbar.Collapse>
				      <Nav>
				        <NavItem eventKey={1} href="#">Link</NavItem>
				        <NavItem eventKey={2} href="#">Link</NavItem>
				        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
				          <MenuItem eventKey={3.1}>Action</MenuItem>
				          <MenuItem eventKey={3.2}>Another action</MenuItem>
				          <MenuItem eventKey={3.3}>Something else here</MenuItem>
				          <MenuItem divider />
				          <MenuItem eventKey={3.3}>Separated link</MenuItem>
				        </NavDropdown>
				      </Nav>
				      <Nav pullRight>
				        <NavItem eventKey={1} href="#">Link Right</NavItem>
				        <NavItem eventKey={2} href="#">Link Right</NavItem>
				      </Nav>
				    </Navbar.Collapse>
			  </Navbar>
		   	</div>
      	)
	}
}

function mapStateToProps(state){
	return { photos: state.photos }
}

export default TopNavbar;