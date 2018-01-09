import _ from 'lodash';
import React, { Component } from 'react';
import {render} from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchHomePage } from '../../../actions';
import styles from '../../../style/styles.css';

import { Container, Row, Col } from 'reactstrap';
import { Nav, NavItem, NavLink, Button } from 'reactstrap';
import { CardBody, Card, CardImg, CardTitle, CardText, CardDeck, CardSubtitle } from 'reactstrap';

import FontAwesome from 'react-fontawesome';
import classNames from 'classnames';


class HomePage extends Component {
	componentDidMount(){
		this.props.fetchHomePage();
	}

	renderHomePage(){

		return _.map(this.props.homepage, homepage => {

			return (
				<div className={ styles.homepageText }>
					<Col xs="4" sm="2">
					</Col>
					<Col xs="4" sm="7">
						<Row>
							<Col xs="12">
								<div className={ classNames(styles.homepagePretitle, styles.animate_pretitle) }>
									{ homepage.pretitle }
								</div>
							</Col>
						</Row>
						<Row>
							<Col xs="12">
								<div className={ classNames(styles.homepageTitle, styles.animate_title) }>
									{ homepage.title }
								</div>
							</Col>
						</Row>
						
						<Row>
							<Col md="4" lg="2">
								<hr className={ classNames(styles.homepageTitleLineHr, styles.animate_linehr) }/>
							</Col>
							<Col md="8" sm="10">
								<Row>
									<div className={ classNames(styles.homepageBody, styles.animate_body) }>
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
									<div className={classNames(styles.homepageButton, styles.animate_button) }>
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
			<div className={ classNames(styles.homepage, styles.animate_page) }>
				{this.renderHomePage()}
         	</div>
		);
	}
}

function mapStateToProps(state){
	return { homepage: state.home }
}

export default connect(mapStateToProps, {fetchHomePage})(HomePage);