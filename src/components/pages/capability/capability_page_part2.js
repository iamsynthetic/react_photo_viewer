import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCapabilityPage } from '../../../actions';

import { Container, Row, Col } from 'reactstrap';
import { Nav, NavItem, NavLink, Button } from 'reactstrap';
import { CardBody, Card, CardImg, CardTitle, CardText, CardDeck, CardSubtitle } from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import styles from '../../../style/styles.css';
import classNames from 'classnames';
import ReactCSSTransitionReplace from 'react-css-transition-replace';

class CapabilityPagePart2 extends Component {
	componentDidMount(){
		this.props.fetchCapabilityPage();
	}

	renderPart2(){

		return _.map(this.props.capability, capability => {

			return (
				 <ReactCSSTransitionReplace
			        transitionName="cross-fade"
			        transitionEnterTimeout={1000}
			        transitionLeaveTimeout={1000}
			      >
			        <div key="transitioning-component-2">
			          <h1>This is the second component</h1>
			        </div>
			      </ReactCSSTransitionReplace>
			)
		})
	}

	render(){
		
		return (
			<div className={ classNames(styles.capabilitypage, styles.animate_page) }>
				{this.renderPart2()}
         	</div>
         );
	}
}

function mapStateToProps(state){
	return { capability: state.capability }
}

export default connect(mapStateToProps, {fetchCapabilityPage})(CapabilityPagePart2);