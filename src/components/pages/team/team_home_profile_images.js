import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchTeamProfileImages } from '../../../actions';
import styles from '../../../style/styles.css';

import { Container, Row, Col } from 'reactstrap';
import { Nav, NavItem, NavLink, Button } from 'reactstrap';
import { CardBody, Card, CardImg, CardTitle, CardText, CardDeck, CardSubtitle } from 'reactstrap';

class TeamHomeProfileImages extends Component {
	componentDidMount(){
		this.props.fetchTeamProfileImages();
	}

	renderTeamTitle(){
		return _.map(this.props.teamprofileimages, proftext => {
			return (
					<Col sm="2">
					<Card className={ styles.homepageCardBg }>
				        <CardImg top width="100%" key={profimg2.id} src={ profimg2.url } alt="Card image cap" />
				        <div className={ styles.homepageCardBodyTxt }>
				          <CardTitle>Card title</CardTitle>
				          <CardSubtitle>Card subtitle</CardSubtitle>
				          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
				          <Button>Button</Button>
				        </div>
				    </Card>
				    </Col>
			);
		})
	}

	

	render(){
		
		return (

			<div className={ styles.teampageMenu }>
				{this.renderTeamTitle()}
			</div>
		);
	}
}

function mapStateToProps(state){
	return { teamprofileimages: state.teamprofileimages }
}

export default connect(mapStateToProps, {fetchTeamProfileImages})(TeamHomeProfileImages);