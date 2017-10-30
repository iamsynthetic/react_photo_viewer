import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';


import { fetchProfileImages } from '../../../actions';
import TeamIndexTitle from './team_index_title';
import TeamIndexProfileImages from './team_index_profile_images';
import TeamMemberPage from './team_member_page';
import { Container, Row, Col } from 'reactstrap';
import { Nav, NavItem, NavLink, Navbar, Button } from 'reactstrap';
import styles from '../../../style/styles.css';


class TeamPage extends Component {

	render(){
		
		return (
			<Container fluid>
				<Row>
		          	<TeamIndexTitle/>
		        </Row>
         		<Row>
         			<TeamIndexProfileImages/>
		        </Row>
         	</Container>
		);
	}
}

function mapStateToProps(state){
	return { profileimages: state.profileimages }
}

export default connect(mapStateToProps, {fetchProfileImages})(TeamPage);