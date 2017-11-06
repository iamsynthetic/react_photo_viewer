import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import TeamHomeProfileImages from './team_home_profile_images';
import styles from '../../../style/styles.css';

import { Container, Row, Col } from 'reactstrap';
import { Nav, NavItem, NavLink, Button } from 'reactstrap';
import { CardBody, Card, CardImg, CardTitle, CardText, CardDeck, CardSubtitle } from 'reactstrap';

class TeamPage extends Component {
	
	render(){
		return (
			<div>
				<Row>
		          	<Col>
		          		hi there
		          	</Col>
		          	<Col>
		          		
		          	</Col>
		        </Row>
			</div>
		);
	}
}

function mapStateToProps(state){
	return { teamprofileimages: state.teamprofileimages }
}

export default connect(mapStateToProps)(TeamPage);