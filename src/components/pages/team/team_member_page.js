import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchTeamMember } from '../../../actions';
import styles from '../../../style/styles.css';

import { Container, Row, Col } from 'reactstrap';
import { Nav, NavItem, NavLink } from 'reactstrap';

class TeamMemberPage extends Component {
	componentDidMount(){
		if(!this.props.teammember){
			const { id } = this.props.match.params;
			this.props.fetchTeamMember(id);
		}
	}

	renderProfileThumbs(){
		
		return _.map(this.props.teammember, member => {
			
			return (
				<Col sm="1">
					<NavItem className={ styles.teamProfileMenuNav } key={member.id}>
		            	<Link to={`/team/${member.id}`}>
		            		<img className={ styles.teamProfileMenuImages } src={member.image}/><br />
							{/*<p>{profimg.title}</p>*/}
						</Link>
		          	</NavItem>
		        </Col>
		    );
		})
	}

	renderTeamProfileIndex(){

		return _.map(this.props.profileimages, profimg => {

			return (
				<Col sm="2">
					<NavItem className={ styles.teamProfileMainPage } key={member.id}>
						<Link to={`/profileimages/${member.id}`}>
							<img className={ styles.teamProfileMainPageImages } src={member.url}/>
						</Link>
					</NavItem>
				</Col>
			)
		})
	}

	render(){
		
		return (
			<div className={ styles.teamProfileMenu }>
				<Row>
					<Col sm="6">
						<Row>
							test
						</Row>
					</Col>
				</Row>
				<Row>
					<Col sm="12">
						<Row>
							test
						</Row>
					</Col>
				</Row>
			</div>
		);
	}
}

function mapStateToProps(state){
	return { teammember: state.teammember }
}

export default connect(mapStateToProps, {fetchTeamMember})(TeamMemberPage);