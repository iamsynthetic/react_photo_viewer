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

class ContentSwapper extends Component {

	constructor(props) {
	    super(props);

	    this.state = {
	      index: 0
	    };
  	}
	
	componentDidMount(){
		this.props.fetchCapabilityPage();
	}

	handleClick() {

		// this.setState({
	 //      isOpen: !this.state.isOpen
	 //    });

	    const index = this.state.index + 1
    	this.setState({index: index >= React.Children.count(this.props.children) ? 0 : index})
 	}

	render(){
		
		const content = React.Children.toArray(this.props.children)
    	const {style = {}} = this.props

    	const newStyle = {
      		...style,
      		cursor: 'pointer',
      	}

		return (
			<ReactCSSTransitionReplace {...this.props} onClick={this.handleClick}>
		        	{content[this.state.index]}
		   	</ReactCSSTransitionReplace>
         );
	}
}

function mapStateToProps(state){
	return { capability: state.capability }
}

export default connect(mapStateToProps, {fetchCapabilityPage})(ContentSwapper);