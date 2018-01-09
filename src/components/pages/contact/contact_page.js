import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchContactPage } from '../../../actions';

import { Container, Row, Col } from 'reactstrap';
import { Nav, NavItem, NavLink, Button } from 'reactstrap';
import { CardBody, Card, CardImg, CardTitle, CardText, CardDeck, CardSubtitle } from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import styles from '../../../style/styles.css';
import classNames from 'classnames';

class ContactPage extends Component {

	componentDidMount(){
		this.props.fetchContactPage();
	}

	renderContactPage(){

		return _.map(this.props.contactpage, contactpage => {

			return (
				<div>
				
					{/* desktop layout */}

					<div className={ classNames(styles.contactpageText, styles.contactpageDesktop) }>
						<Col xs="2" sm="2">
						</Col>
						<Col xs="8" sm="8">
							<Row>
								<Col xs="12" sm="4">
								</Col>
								<Col xs="12" sm="8">
									<div className={ classNames(styles.contactpagePretitle, styles.animate_pretitle) }>
										{ contactpage.pretitle }
									</div>
								</Col>
							</Row>
							<Row>
								<Col xs="12" sm="4">
								</Col>
								<Col xs="12" sm="8">
									<div className={ classNames(styles.contactpageTitle, styles.animate_title) }>
										{ contactpage.title }
									</div>
								</Col>
							</Row>
							
							<Row>
								<Col xs="12" sm="1">
									<hr className={ classNames(styles.contactpageTitleLineHr, styles.animate_linehr) }/>
								</Col>
								<Col xs="12" sm="3">
									<div className={ classNames(styles.contactpageBody1, styles.animate_body) }>
										{ contactpage.body1 }
									</div>
								</Col>
								<Col xs="12" sm="3">
									<div className={ classNames(styles.contactpageBody2, styles.animate_body) }>
										{ contactpage.body2 }
									</div>
								</Col>
								<Col xs="12" sm="5">
									<div className={ classNames(styles.contactpageBody2, styles.animate_body) }>
										{ contactpage.body3 }
									</div>
								</Col>
							</Row>
							<Row>
								<Col xs="12" sm="4">
								</Col>
								<Col xs="12" sm="3">
									<div className={classNames(styles.contactpageButton, styles.animate_button) }>
										{contactpage.phone_button} <FontAwesome name="angle-right"/>
									</div>
								</Col>
								<Col xs="12" sm="5">
									<div className={classNames(styles.contactpageButton, styles.animate_button) }>
										{contactpage.email_button} <FontAwesome name="angle-right"/>
									</div>
								</Col>
							</Row>
						</Col>
						<Col xs="2" sm="2">
						</Col>
					</div>




					{/* need a whole new tablet / mobile layout */}

					<div className={ classNames(styles.contactpageText, styles.contactpageMobile) }>
						<Col xs="2" sm="2">
						</Col>
						<Col xs="8" sm="8">
							<Row>
								<Col xs="12" sm="12" md="3">
								</Col>
								<Col xs="12" sm="12" md="9">
									<div className={ classNames(styles.contactpagePretitle, styles.animate_pretitle) }>
										{ contactpage.pretitle }
									</div>
								</Col>
							</Row>
							<Row>
								<Col xs="12" sm="12" md="3">
								</Col>
								<Col xs="12" sm="12" md="9">
									<div className={ classNames(styles.contactpageTitle, styles.animate_title) }>
										{ contactpage.title }
									</div>
								</Col>
							</Row>
							
							<Row>
								<Col xs="12" md="1">
									<hr className={ classNames(styles.contactpageTitleLineHr, styles.animate_linehr) }/>
								</Col>
								<Col xs="12" md="3">
									<div className={ classNames(styles.contactpageBody1, styles.animate_body) }>
										{ contactpage.body1 }
									</div>
								</Col>
								<Col xs="12" md="3">
									<div className={ classNames(styles.contactpageBody2, styles.animate_body) }>
										{ contactpage.body2 }
									</div>
									<div className={classNames(styles.contactpageButton, styles.animate_button) }>
										{contactpage.phone_button} <FontAwesome name="angle-right"/>
									</div>
								</Col>
								<Col xs="12" md="5">
									<div className={ classNames(styles.contactpageBody2, styles.animate_body) }>
										{ contactpage.body3 }
									</div>
									<div className={classNames(styles.contactpageButton, styles.animate_button) }>
										{contactpage.email_button} <FontAwesome name="angle-right"/>
									</div>
								</Col>
							</Row>
						</Col>
						<Col xs="2" sm="2">
						</Col>
					</div>

				</div>
			)
		})
	}

	render(){
		
		return (
			<div className={ classNames(styles.contactpage, styles.animate_page) }>
				{this.renderContactPage()}
         	</div>
		);
	}
}


function mapStateToProps(state){
	return { contactpage: state.contact }
}

export default connect(mapStateToProps, {fetchContactPage})(ContactPage);