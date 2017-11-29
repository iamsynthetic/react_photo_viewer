import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchHomePage } from '../../../actions';
import styles from '../../../style/styles.css';

import { Container, Row, Col } from 'reactstrap';
import { Nav, NavItem, NavLink, Button } from 'reactstrap';
import { CardBody, Card, CardImg, CardTitle, CardText, CardDeck, CardSubtitle } from 'reactstrap';

import FontAwesome from 'react-fontawesome';

class HomePage extends Component {
	componentDidMount(){
		this.props.fetchHomePage();
	}

	renderProfileCard(){

		return _.map(this.props.homepage, homepage => {

			return (
				<div className={ styles.homepageText }>
					<Col xs="4" sm="2">
					</Col>
					<Col xs="4" sm="7">
						<Row>
							<Col xs="12">
								<div className={ styles.homepagePretitle }>
									{ homepage.pretitle }
								</div>
							</Col>
						</Row>
						<Row>
							<Col xs="12">
								<div className={ styles.homepageTitle }>
									{ homepage.title }
								</div>
							</Col>
						</Row>
						
						<Row>
							<Col md="4" lg="2">
								<hr className={ styles.homepageTitleLineHr }/>
							</Col>
							<Col md="8" sm="10">
								<Row>
									<div className={ styles.homepageBody }>
										{ homepage.body }
									</div>
								</Row>
							</Col>
						</Row>
						<Row>
							<Col md="4" lg="2">
							</Col>
							<Col md="8" sm="10">
								<Row>
									<div className={ styles.homepageButton }>
										{homepage.button} <FontAwesome name="angle-right"/>
									 </div>
								</Row>
							</Col>
						</Row>
					</Col>
					<Col xs="4" sm="3">
					</Col>
				</div>
			);
		})
	}

	render(){
		
		return (
			<div className={ styles.homepage }>
				{this.renderProfileCard()}
			</div>
		);
	}
}

function mapStateToProps(state){
	return { homepage: state.home }
}

export default connect(mapStateToProps, {fetchHomePage})(HomePage);