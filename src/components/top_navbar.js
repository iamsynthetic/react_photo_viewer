import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from '../style/styles.css';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button, CardBlock, Card } from 'reactstrap';

class TopNavbar extends Component {
	constructor(props) {
		super(props);
	    this.toggle = this.toggle.bind(this);
	    //this.toggle2 = this.toggle2.bind(this);
	    this.state = { collapse: false };
	}
  	// toggle() {
   //  	this.setState({ isOpen: !this.state.isOpen });
  	// }

  	toggle() {
    	this.setState({ collapse: !this.state.collapse });
  	}
	  
	render(){
		return (
			<div className={ styles.topnavContainer }>
		        <Navbar color="faded" light toggleable>
			        <Button color="primary" onClick={this.toggle}>Toggle</Button>
					<NavLink className={ styles.topnavLink } href="#">Link</NavLink>
				    <NavLink className={ styles.topnavLink } href="#">Link</NavLink>
				   	<NavLink className={ styles.topnavLink } href="#">Another Link</NavLink>
				   	<NavLink className={ styles.topnavLink } disabled href="#">Disabled Link</NavLink>
				</Navbar>
      		</div>
	
		)
	}
}

function mapStateToProps(state){
	return { photos: state.photos }
}

export default TopNavbar;