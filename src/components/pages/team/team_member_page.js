import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { fetchTeamPageProfile } from '../../../actions';
import TeamMemberTitle from './team_member_title';
import TeamMemberProfile from './team_member_profile';
import TeamIndexTitle from './team_index_title';
import TeamIndexProfileImages from './team_index_profile_images';

import { Container, Row, Col } from 'reactstrap';
import { Nav, NavItem, NavLink, Button } from 'reactstrap';
import { CardBody, Card, CardImg, CardTitle, CardText, CardDeck, CardSubtitle } from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import styles from '../../../style/styles.css';

class TeamMemberPage extends Component {

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
			<Container fluid>
	 			<Row>
	 				<div className={ styles.teampageIndexTitle }>
						<Row>
							<Col xs="4" sm="3"></Col>
						    <Col xs="4" sm="6">
						    	<div className={ styles.teampageIndexPretitle }>
						    		{ teamprofile.pretitle }<br/>
						    	</div>
						    	<div className={ styles.teampageIndexTitle }>
						    		{ teamprofile.title }<br/>
						    	</div>
						    	<div className={ styles.teampageIndexSubtitle }>
						    		{ teamprofile.subtitle }<br/>
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
	 			</Row>
	 			<Row>
	 				<Col sm="4" lg="2">
						<Card className={ styles.teampageCardBg }>
					        <CardImg className={ styles.teampageCardImg } width="100%" src={ teamprofile.profile_img } alt="Card image cap" />
					        <div className={ styles.teampageCardBody }>
					        	<div className={ styles.teampageCardBodyTxt }>
						          	<CardTitle className={ styles.teampageCardBodytxtTitle }>{ teamprofile.title }</CardTitle>
						          	<CardSubtitle className={ styles.teampageCardBodytxtSubtitle }>{ teamprofile.subtitle }</CardSubtitle>
						          	<CardText className={ styles.teampageCardBodytxtText }>{ teamprofile.body }</CardText>
						          	
						          	<div className={ styles.teampageCardBodybuttonContainer }>
							          	<NavItem className={ styles.teampageCardBodytxtNavitem }>
											<Link to={`/team/${teamprofile.id}`}>
								       			<div className={ styles.teampageCardBodytxtButton }></div>
								       		</Link>	
								        </NavItem>
							        </div>
						        </div>
					        </div>
					    </Card>
				    </Col>
	 			</Row>
	 		</Container>
		)
	}
}

function mapStateToProps({ teamprofile }, ownProps){
	return { teamprofile: teamprofile[ownProps.match.params.id]};
}

export default connect(mapStateToProps, { fetchTeamPageProfile })(TeamMemberPage);