import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchTeamPageProfile } from '../../../actions';

import { Container, Row, Col } from 'reactstrap';
import { Nav, NavItem, NavLink, Button } from 'reactstrap';
import { CardBody, Card, CardImg, CardTitle, CardText, CardDeck, CardSubtitle } from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import styles from '../../../style/styles.css';
import classNames from 'classnames';

class TeamMemberPage extends Component {

	componentDidMount(){
		if(!this.props.teamprofile){
			const { id } = this.props.match.params;
			this.props.fetchTeamPageProfile(id);
		}
	}

	handleClick(url){
		const newurl = '/team/' + url;
		this.props.history.push(newurl)
	}

	render(){
		const { teamprofile } = this.props;
		console.log('this.props is: ' + teamprofile);
		if(!teamprofile){
			return <div>Loading...</div>;
		}

		//let className = this.state.animout ? styles.animate_teampagemember : null;

		return (
			<div key={teamprofile.id} className={ styles.teampageMember }>
				<Row>
					<Col xs="5" sm="5" md="6" lg="4">
						<Card className={ classNames(styles.teampageProfileCardBg, styles.teampageprofilecardimg1, styles.animate_teampageprofilecardimg1) }>
							<CardImg className={ styles.teampageProfileCardImg1 } key={teamprofile.id} src={ teamprofile.profile_img } alt="Card image cap" />
						</Card>
					</Col>
					<Col xs="7" sm="7" md="6" lg="8">
						<Row>
							<Col lg="12">
								<Row>
									<Col xs="6">
										<div className={ classNames(styles.profilePretitle, styles.animate_pretitle) }>
											{ teamprofile.profile_pretitle }
										</div>
									</Col>
								</Row>
								<Row>
									<Col xs="12">
										<div className={ classNames(styles.profileTitle, styles.animate_title) }>
											{ teamprofile.profile_title }
										</div>
									</Col>
									<Col xs="2">
										<hr className={ classNames(styles.profileTitleLineHr, styles.animate_linehr) }/>
									</Col>
								</Row>
							</Col>
							<Col xs="12" sm="3">
								<Card className={ classNames(styles.profileBodyImg, styles.animate_profilebodyimg) }>
									<CardImg width="100%" key={teamprofile.id} src={ teamprofile.profile_sm_img } alt="Card image cap" />
								</Card>
							</Col>
							<Col xs="12" sm="9">
								<Row>
									<div className={ classNames(styles.profileBodyTitle, styles.animate_body) }>
										{ teamprofile.profile_body_title }
									</div>
								</Row>
								<Row>
									<div className={ classNames(styles.profileBody, styles.animate_body) }>
										{ teamprofile.profile_body }
									</div>
								</Row>
								<Row>
									<div className={ classNames(styles.profileButton, styles.animate_button) }>
										{ teamprofile.profile_button } <FontAwesome name="angle-right"/>
									</div>
								</Row>
							</Col>
						</Row>
					</Col>
				</Row>
				<Row>
					<div className={ classNames(styles.profileswitchButton, styles.animate_button) }>
						<NavItem className={ styles.profileswitchButtonNavItem }>
							<Link to="#" onClick={() => { this.handleClick(teamprofile.nextid)}}>
								<div className={styles.animbtn1}>
									<span className={styles.animbtn2}>
										<FontAwesome className={ styles.profileswitchButtonArrow } name="chevron-right" />
								  	</span>
								  	<span>
								    	<FontAwesome className={ styles.profileswitchButtonArrow } name="chevron-right" />
								  	</span>
								</div>
				       		</Link>
				        </NavItem>
					</div>
				</Row>
			</div>
		)
	}
}

function mapStateToProps({ teamprofile }, ownProps){
	return { teamprofile: teamprofile[ownProps.match.params.id]};
}

export default connect(mapStateToProps, { fetchTeamPageProfile })(TeamMemberPage);