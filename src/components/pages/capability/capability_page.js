import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCapabilityPage } from '../../../actions';
import CapabilityPagePart1 from './capability_page_part1';
import CapabilityPagePart2 from './capability_page_part2';
import ContentSwapper from './Content_swapper'

import { Container, Row, Col } from 'reactstrap';
import { Nav, NavItem, NavLink, Button } from 'reactstrap';
import { CardBody, Card, CardImg, CardTitle, CardText, CardDeck, CardSubtitle } from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import styles from '../../../style/styles.css';
import classNames from 'classnames';

class CapabilityPage extends Component {
	componentDidMount(){
		this.props.fetchCapabilityPage();
	}

	renderCapabilityContent(){

		return _.map(this.props.capability, capability => {

			return (
				<div>
				
					{/* desktop layout */}

					<div className={ classNames(styles.capabilitypageText, styles.capabilitypageDesktop) }>
						<Col xs="2" sm="2">
						</Col>
						<Col xs="8" sm="8">
							<Row>
								<Col xs="12" sm="4">
								</Col>
								<Col xs="12" sm="8">
									<div className={ classNames(styles.capabilitypagePretitle, styles.animate_pretitle) }>
										{ capability.pretitle }
									</div>
								</Col>
							</Row>
							<Row>
								<Col xs="12" sm="4">
								</Col>
								<Col xs="12" sm="8">
									<div className={ classNames(styles.capabilitypageTitle, styles.animate_title) }>
										{ capability.title }
									</div>
								</Col>
							</Row>
							<Row>
								<Col xs="12" sm="1">
									<hr className={ classNames(styles.capabilitypageTitleLineHr, styles.animate_linehr) }/>
								</Col>
								<Col xs="12" sm="3">
									<div className={ classNames(styles.capabilitypageBody1, styles.animate_body) }>
										<ContentSwapper transitionName="cross-fade" transitionEnterTimeout={1000} transitionLeaveTimeout={1000}>
							              <img key="img1" src="src/images/profile_thumbs/batman_thumb.jpg" width="70" height="70"/>
							              <img key="img2" src="src/images/profile_thumbs/daredevil_thumb.jpg" width="70" height="70"/>
							            </ContentSwapper>
									</div>
								</Col>
								<Col xs="12" sm="3">
									<div className={ classNames(styles.capabilitypageBody2, styles.animate_body) }>
										{ capability.body2 }
									</div>
								</Col>
								<Col xs="12" sm="5">
									<div className={ classNames(styles.capabilitypageBody2, styles.animate_body) }>
										{ capability.body3 }
									</div>
								</Col>
							</Row>
							<Row>
								<Col xs="12" sm="4">
								</Col>
								<Col xs="12" sm="3">
									<div className={classNames(styles.capabilitypageButton, styles.animate_button) }>
										{capability.phone_button} <FontAwesome name="angle-right"/>
									</div>
								</Col>
								<Col xs="12" sm="5">
									<div className={classNames(styles.capabilitypageButton, styles.animate_button) }>
										{capability.email_button} <FontAwesome name="angle-right"/>
									</div>
								</Col>
							</Row>
						</Col>
						<Col xs="2" sm="2">
						</Col>
					</div>




					{/* need a whole new tablet / mobile layout */}

					<div className={ classNames(styles.capabilitypageText, styles.capabilitypageMobile) }>
						<Col xs="2" sm="2">
						</Col>
						<Col xs="8" sm="8">
							<Row>
								<Col xs="12" sm="12" md="3">
								</Col>
								<Col xs="12" sm="12" md="9">
									<div className={ classNames(styles.capabilitypagePretitle, styles.animate_pretitle) }>
										{ capability.pretitle }
									</div>
								</Col>
							</Row>
							<Row>
								<Col xs="12" sm="12" md="3">
								</Col>
								<Col xs="12" sm="12" md="9">
									<div className={ classNames(styles.capabilitypageTitle, styles.animate_title) }>
										{ capability.title }
									</div>
								</Col>
							</Row>
							
							<Row>
								<Col xs="12" md="1">
									<hr className={ classNames(styles.capabilitypageTitleLineHr, styles.animate_linehr) }/>
								</Col>
								<Col xs="12" md="3">
									<div className={ classNames(styles.capabilitypageBody1, styles.animate_body) }>
										{ capability.body1 }
									</div>
								</Col>
								<Col xs="12" md="3">
									<div className={ classNames(styles.capabilitypageBody2, styles.animate_body) }>
										{ capability.body2 }
									</div>
									<div className={classNames(styles.capabilitypageButton, styles.animate_button) }>
										{capability.phone_button} <FontAwesome name="angle-right"/>
									</div>
								</Col>
								<Col xs="12" md="5">
									<div className={ classNames(styles.capabilitypageBody2, styles.animate_body) }>
										{ capability.body3 }
									</div>
									<div className={classNames(styles.capabilitypageButton, styles.animate_button) }>
										{capability.email_button} <FontAwesome name="angle-right"/>
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
			<div className={ classNames(styles.capabilitypage, styles.animate_page) }>
				{this.renderCapabilityContent()}
         	</div>
         );
	}
}

function mapStateToProps(state){
	return { capability: state.capability }
}

export default connect(mapStateToProps, {fetchCapabilityPage})(CapabilityPage);