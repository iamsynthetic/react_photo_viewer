import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from '../../style/styles.css';
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
        <Nav vertical className={ styles.mainNavigationLinks }>
          <NavItem>
            <Link to="/"><FontAwesome className={ styles.mainNavigationLinkIcons } name="home"/><br /></Link>
          </NavItem>
          <NavItem>{/* briefcase */}
            <Link to="/photos"><FontAwesome className={ styles.mainNavigationLinkIcons } name="code" /><br /></Link>
          </NavItem>
          <NavItem>
            <Link to="/photos/3"><FontAwesome className={ styles.mainNavigationLinkIcons } name="users" /><br /></Link>
          </NavItem>
          <NavItem>
            <Link to="/photos/4"><FontAwesome className={ styles.mainNavigationLinkIcons } name="wrench" /><br /></Link>
          </NavItem>
          <NavItem>
            <Link to="/photos/5"><FontAwesome className={ styles.mainNavigationLinkIcons } name="building" /><br /></Link>
          </NavItem>
          <NavItem>
            <Link to="/blog"><FontAwesome className={ styles.mainNavigationLinkIcons } name="newspaper-o" /><br /></Link>
          </NavItem>
          <NavItem>
            <Link to="/photos/5"><FontAwesome className={ styles.mainNavigationLinkIcons } name="map-marker" /><br /></Link>
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