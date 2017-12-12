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

class CapabilityPagePart1 extends Component {
	componentDidMount(){
		this.props.fetchCapabilityPage();
	}
	
	state = {index: 0}

	handleClick(){
		const index = this.state.index + 1
    	this.setState({index: index >= React.Children.count(this.props.children) ? 0 : index})
	}

	renderPart1(){

		return _.map(this.props.capability, capability => {

			return (
				<ReactCSSTransitionReplace transitionName="cross-fade" transitionEnterTimeout={1000} transitionLeaveTimeout={1000} onClick={handleClick}>
						<img key="img1" src="src/images/profile_thumbs/batman_thumb.jpg" width="70" height="70"/>
				</ReactCSSTransitionReplace>
			)
		})
	}

	render(){
		
		return (
			<div className={ classNames(styles.capabilitypage, styles.animate_page) }>
				{this.renderPart1()}
         	</div>
         );
	}
}

function mapStateToProps(state){
	return { capability: state.capability }
}

export default connect(mapStateToProps, {fetchCapabilityPage})(CapabilityPagePart1);