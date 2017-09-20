import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from '../style/styles.css';
import { Nav, NavItem, NavLink } from 'reactstrap';
import FontAwesome from 'react-fontawesome';

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
		  /*<div className={ styles.mainNavigation }>*/
      <div>
        <p>List Based</p>
        <Nav vertical className={ styles.mainNavigationLinks }>
          <NavItem>
            <Link to="/"><FontAwesome name="home" size="2x"/><br />Home</Link>
          </NavItem>
          <NavItem>{/* briefcase */}
            <Link to="/photos/new"><FontAwesome name="code" size="2x"/><br />Work</Link>
          }
          </NavItem>
          <NavItem>
            <Link to="/photos/3"><FontAwesome name="users" size="2x"/><br />Team</Link>
          </NavItem>
          <NavItem>
            <Link to="/photos/4"><FontAwesome name="wrench" size="2x"/><br />Services</Link>
          </NavItem>
          <NavItem>
            <Link to="/photos/5"><FontAwesome name="building" size="2x"/><br />Workplace</Link>
          </NavItem>
          <NavItem>
            <Link to="/photos/5"><FontAwesome name="newspaper-o" size="2x"/><br />Blog</Link>
          </NavItem>
          <NavItem>
            <Link to="/photos/5"><FontAwesome name="map-marker" size="2x"/><br />Contact</Link>
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