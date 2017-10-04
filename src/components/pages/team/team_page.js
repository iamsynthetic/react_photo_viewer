import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProfileImages } from '../../../actions';
import styles from '../../../style/styles.css';

import { Container, Row, Col } from 'reactstrap';
import { Nav, NavItem, NavLink } from 'reactstrap';

class TeamPage extends Component {
	componentDidMount(){
		this.props.fetchProfileImages();
	}

	renderTeamProfileText(){
		
		return _.map(this.props.profileimages, profimg => {
			
			return (
				<Col sm="1">
					{/* text for the section goes here */}
		        </Col>
		    );
		})
	}

	renderTeamProfileIndex(){

		return _.map(this.props.profileimages, profimg => {

			return (
				<Col sm="2">
					<NavItem className={ styles.teamProfileMainPage } key={profimg.id}>
						<Link to={`/profileimages/${profimg.id}`}>
							<img className={ styles.teamProfileMainPageImages } src={profimg.url}/>
						</Link>
					</NavItem>
				</Col>
			)
		})
	}

	render(){
		
		return (
			<div className={ styles.teamProfileMenu }>
				<Row>
					<Col sm="6">
						<Row>
							{this.renderTeamProfileText()}
						</Row>
					</Col>
				</Row>
				<Row>
					<Col sm="12">
						<Row>
							{this.renderTeamProfileIndex()}
						</Row>
					</Col>
				</Row>
			</div>
		);
	}
}

function mapStateToProps(state){
	return { profileimages: state.profileimages }
}

export default connect(mapStateToProps, {fetchProfileImages})(TeamPage);