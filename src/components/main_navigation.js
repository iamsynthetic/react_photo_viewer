import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from '../style/styles.css';
import { Nav, NavItem, NavLink } from 'reactstrap';

class MainNavigation extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

	render(){
		return (
		  <div className={ styles.mainNavigation }>
        <p>List Based</p>
        <Nav vertical className={ styles.mainNavigationLinks }>
          <NavItem>
            <Link to="/">Home</Link>
          </NavItem>
          <NavItem>
            <Link to="/photos/new">New Photo</Link>
          </NavItem>
          <NavItem>
            <Link to="/photos/3">Photo 3</Link>
          </NavItem>
          <NavItem>
            <Link to="/photos/4">Photo 4</Link>
          </NavItem>
          <NavItem>
            <Link to="/photos/5">Photo 5</Link>
          </NavItem>
        </Nav>
      </div>
		)
	}
}

function mapStateToProps(state){
	return { photos: state.photos }
}

export default MainNavigation;