import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Glyphicon, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button, CardBlock, Card } from 'react-bootstrap';
import {MenuItem, NavDropdown } from 'react-bootstrap';
import styles from '../../style/styles.css';

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


	// <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
	// 			          <MenuItem eventKey={3.1}>Action</MenuItem>
	// 			          <MenuItem eventKey={3.2}>Another action</MenuItem>
	// 			          <MenuItem eventKey={3.3}>Something else here</MenuItem>
	// 			          <MenuItem divider />
	// 			          <MenuItem eventKey={3.3}>Separated link</MenuItem>
	// 			        </NavDropdown>

	render(){
		return (
			<div className={ styles.animate_topnav }>
				<Navbar className={ styles.topnav } fluid collapseOnSelect>
				    <Navbar.Header>
				      <Navbar.Brand>
				        <a className={ styles.topnavlogo } href="#">Title Of Project</a>
				      </Navbar.Brand>
				      <Navbar.Toggle />
				    </Navbar.Header>
				    <Navbar.Collapse>
				      <Nav className={ styles.topnavmenu } pullRight>
				      	<NavItem>
				      		{/*<button type="button" ref="button1" className="normalBtn" id="btn1" onClick={this.handleClick} style={{backgroundColor:this.state.bgColor}}>This works</button>*/}
				      		<Link to="/" className={ styles.topnavlinks }>Home</Link>
				      	</NavItem>
				        <NavItem>
				        	<Link to="/team" className={ styles.topnavlinks }>Team</Link>
				        </NavItem>
				        <NavItem>
				        <Link to="/capability" className={ styles.topnavlinks }>Capability</Link>
				        </NavItem>
				        <NavItem>
				        	<Link to="/blog" className={ styles.topnavlinks }>News</Link>
				        </NavItem>
				        <NavItem>
				        	<Link to="/contact" className={ styles.topnavlinks }>Contact</Link>
				        </NavItem>
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