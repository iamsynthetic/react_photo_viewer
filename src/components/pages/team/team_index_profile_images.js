import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProfileImages } from '../../../actions';
import styles from '../../../style/styles.css';

import { Container, Row, Col } from 'reactstrap';
import { Nav, NavItem, NavLink, Button } from 'reactstrap';
import { CardBody, Card, CardImg, CardTitle, CardText, CardDeck, CardSubtitle } from 'reactstrap';
import FontAwesome from 'react-fontawesome';

class TeamIndexProfileImages extends Component {
	componentDidMount(){
		this.props.fetchProfileImages();
	}

	renderProfileCard(){

		return _.map(this.props.profileimages, profile => {

			return (
				<Col sm="4" lg="2">
				<Card className={ styles.teampageCardBg }>
			        <CardImg className={ styles.teampageCardImg } width="100%" key={profile.id} src={ profile.url } alt="Card image cap" />
			        <div className={ styles.teampageCardBody }>
			        	<div className={ styles.teampageCardBodyTxt }>
				          	<CardTitle className={ styles.teampageCardBodytxtTitle }>{ profile.title }</CardTitle>
				          	<CardSubtitle className={ styles.teampageCardBodytxtSubtitle }>{ profile.subtitle }</CardSubtitle>
				          	<CardText className={ styles.teampageCardBodytxtText }>{ profile.body }</CardText>
				          	
				          	<div className={ styles.teampageCardBodybuttonContainer }>
					          	<NavItem className={ styles.teampageCardBodytxtNavitem }>
									<Link to={`/team/${profile.vanityurl}`}>
						       			<div className={ styles.teampageCardBodytxtButton }></div>
						       		</Link>	
						        </NavItem>
					        </div>
				        </div>
			        </div>
			    </Card>
			    </Col>
			);
		})
	}

	render(){
		
		return (
			<div className={ styles.teampageMenu }>
				{this.renderProfileCard()}
			</div>
		);
	}
}

function mapStateToProps(state){
	return { profileimages: state.profileimages }
}

export default connect(mapStateToProps, {fetchProfileImages})(TeamIndexProfileImages);