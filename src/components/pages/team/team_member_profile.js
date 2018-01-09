import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchTeamPageProfile } from '../../../actions';
import styles from '../../../style/styles.css';

import { Container, Row, Col } from 'reactstrap';
import { Nav, NavItem, NavLink } from 'reactstrap';

class TeamMemberProfile extends Component {
	componentDidMount(){
		if(!this.props.teamprofile){
			const { id } = this.props.match.params;
			this.props.fetchTeamPageProfile(id);
		}
	}

	
	render(){
		
		const { teamprofile } = this.props;
		console.log('this.props is: ' + teamprofile);
		if(!teamprofile){
			return <div>Loading...</div>;
		}

		return (
			<div>
				<Link to="/">Back to Home</Link>
				<h2>{teamprofile.pretitle}</h2>
				<h3>{teamprofile.title}</h3>
				<h6>{teamprofile.subtitle}</h6>
				<img src={teamprofile.image}/>
				<p>{teamprofile.body}</p>
			</div>

			/*
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
			*/
		);
	}
}

function mapStateToProps({ teamprofile }, ownProps){
	return { teamprofile: teamprofile[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {fetchTeamPageProfile})(TeamMemberProfile);