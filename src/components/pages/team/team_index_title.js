import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchTeamIndexTitle } from '../../../actions';
import styles from '../../../style/styles.css';

import { Container, Row, Col } from 'reactstrap';
import { Nav, NavItem, NavLink, Button } from 'reactstrap';
import { CardBody, Card, CardImg, CardTitle, CardText, CardDeck, CardSubtitle } from 'reactstrap';

class TeamIndexTitle extends Component {
	componentDidMount(){
		this.props.fetchTeamIndexTitle();
	}

	renderTitle(){

		return _.map(this.props.TeamIndexTitleReducer, indexTitle => {

			return (
				<div className={ styles.teampageIndexTitle }>
					<Row>
						<Col xs="4" sm="3"></Col>
					    <Col xs="4" sm="6">
					    	<div className={ styles.teampageIndexPretitle }>
					    		{ indexTitle.pretitle }<br/>
					    	</div>
					    	<div className={ styles.teampageIndexTitle }>
					    		{ indexTitle.title }<br/>
					    	</div>
					    	<div className={ styles.teampageIndexSubtitle }>
					    		{ indexTitle.subtitle }<br/>
					    	</div>
					    </Col>
					    <Col xs="4" sm="3"></Col>
					</Row>
				    <Row>
				    	<Col xs="4" sm="3"></Col>
					    <Col xs="4" sm="6">
					    	<div>
					    		<hr className={ styles.teampageIndexTitleLineHr }/>
					    	</div>
					    </Col>
					    <Col xs="4" sm="3"></Col>
				    </Row>
				</div>
			);
		})
	}

	render(){
		
		return (
			<div className={ styles.teampageMenu }>
				{this.renderTitle()}
			</div>
		);
	}
}

function mapStateToProps(state){
	return { TeamIndexTitleReducer: state.TeamIndexTitleReducer }
}

export default connect(mapStateToProps, {fetchTeamIndexTitle})(TeamIndexTitle);