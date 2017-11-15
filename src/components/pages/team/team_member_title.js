import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchTeamPageProfile } from '../../../actions';
import styles from '../../../style/styles.css';

import { Container, Row, Col } from 'reactstrap';
import { Nav, NavItem, NavLink, Button } from 'reactstrap';
import { CardBody, Card, CardImg, CardTitle, CardText, CardDeck, CardSubtitle } from 'reactstrap';

class TeamMemberTitle extends Component {
	componentDidMount(){
		if(!this.props.teamprofile){
			const { id } = this.props.match.params;
			this.props.fetchTeamPageProfile(id);
		}
	}


	renderTitle(){

		return _.map(this.props.teamprofile, profileTitle => {

			return (
				<div className={ styles.teampageIndexTitle }>
					<Row>
						<Col xs="4" sm="3"></Col>
					    <Col xs="4" sm="6">
					    	<div className={ styles.teampageIndexPretitle }>
					    		{ profileTitle.pretitle }<br/>
					    	</div>
					    	<div className={ styles.teampageIndexTitle }>
					    		{ profileTitle.title }<br/>
					    	</div>
					    	<div className={ styles.teampageIndexSubtitle }>
					    		{ profileTitle.subtitle }<br/>
					    	</div>
					    </Col>
					    <Col xs="4" sm="3"></Col>
					</Row>
				    <Row>
				    	<Col xs="4" sm="3"></Col>
					    <Col xs="4" sm="6">
					    	<div>
					    		<hr className={ styles.teampageIndexTitleLineHr }/>
					    	</div>
					    </Col>
					    <Col xs="4" sm="3"></Col>
				    </Row>
				</div>
			);
		})
	}

	render(){
		
		const { teamprofile } = this.props;
		console.log('this.props is: ' + teamprofile);
		if(!teamprofile){
			return <div>Loading...!!!</div>;
		}
		
		return (
			<div className={ styles.teampageMenu }>
				{this.renderTitle()}
			</div>
		);
	}
}

function mapStateToProps({teamprofile}, ownProps){
	return { teamprofile: teamprofile[ownProps.match.params.id] }
}

export default connect(mapStateToProps, {fetchTeamPageProfile})(TeamMemberTitle);