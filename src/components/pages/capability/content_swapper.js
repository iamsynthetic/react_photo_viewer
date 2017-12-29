import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
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
		this.state = {items: ['hello', 'world', 'click', 'me']};
		this.handleAdd = this.handleAdd.bind(this);
	  }
	
	  handleAdd() {
		const newItems = this.state.items.concat([
		  prompt('Enter some text')
		]);
		this.setState({items: newItems});
	  }
	
	  handleRemove(i) {
		let newItems = this.state.items.slice();
		newItems.splice(i, 1);
		this.setState({items: newItems});
	  }
	
	  render() {
		const items = this.state.items.map((item, i) => (
		  <div key={item} onClick={() => this.handleRemove(i)}>
			{item}
		  </div>
		));
	
		return (
		  <div>
			<button onClick={this.handleAdd}>Add Item</button>
			<ReactCSSTransitionGroup
			  transitionName="fade"
			  transitionEnterTimeout={1000}
			  transitionLeaveTimeout={1000}>
			  {items}
			</ReactCSSTransitionGroup>
		  </div>
		);
	  }
}

function mapStateToProps(state){
	return { capability: state.capability }
}

export default connect(mapStateToProps, {fetchCapabilityPage})(ContentSwapper);