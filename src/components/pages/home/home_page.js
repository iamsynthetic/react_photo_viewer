import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProfileImages } from '../../../actions';
import styles from '../../../style/styles.css';

import Example from './home_page_card';

import { Container, Row, Col } from 'reactstrap';
import { Nav, NavItem, NavLink, Button } from 'reactstrap';
import { CardBody, Card, CardImg, CardTitle, CardText, CardDeck, CardSubtitle } from 'reactstrap';

class HomePage extends Component {
	componentDidMount(){
		this.props.fetchProfileImages();
	}

	renderProfileCard(){

		return _.map(this.props.profileimages, profimg2 => {

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
			<div className={ styles.homepageMenu }>
				{this.renderProfileCard()}
			</div>
		);
	}
}

function mapStateToProps(state){
	return { profileimages: state.profileimages }
}

export default connect(mapStateToProps, {fetchProfileImages})(HomePage);