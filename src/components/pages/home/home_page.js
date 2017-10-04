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

	renderProfileThumbs(){
		
		return _.map(this.props.profileimages, profimg => {
			
			return (
				<Col sm="2">
					<NavItem className={ styles.homeProfileMenuNav } key={profimg.id}>
		            	<Link to={`/profileimages/${profimg.id}`}>
		            		<img className={ styles.homeProfileMenuImages } src={profimg.thumbnailUrl}/><br />
							<p>{profimg.title}</p>
						</Link>
		          	</NavItem>
		        </Col>
		    );
		})
	}

	// renderProfileCard(){

	// 	return _.map(this.props.profileimages, profimg2 => {

	// 		return (
	// 			<Card>
	// 				<CardImg top width="100%" key={profimg2.id} src={ profimg2.id }/>
	// 				<CardBody>
	// 					<CardTitle>Card Title</CardTitle>
	// 					<CardSubtitle>Card subtitle</CardSubtitle>
	// 					<CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
	// 					<Button>Button</Button>
	// 				</CardBody>
	// 			</Card>
	// 		);
	// 	})
	// }

	render(){
		
		return (
			<div className={ styles.homeProfileMenu }>
				<Col sm="6">
						{this.renderProfileThumbs()}
				</Col>
				<Card className={ styles.homeProfileMenuBG }>
					        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
					        <div className={ styles.homeProfileMenuCARDBODY }>
					          <CardTitle>Card title</CardTitle>
					          <CardSubtitle>Card subtitle</CardSubtitle>
					          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
					          <Button>Button</Button>
					        </div>
					      </Card>
			</div>
		);
	}
}

function mapStateToProps(state){
	return { profileimages: state.profileimages }
}

export default connect(mapStateToProps, {fetchProfileImages})(HomePage);