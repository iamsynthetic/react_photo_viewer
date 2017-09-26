import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProfileImages } from '../../../actions';
import styles from '../../../style/styles.css';

import { Container, Row, Col } from 'reactstrap';
import { Nav, NavItem, NavLink } from 'reactstrap';

class HomePage extends Component {
	componentDidMount(){
		this.props.fetchProfileImages();
	}

	renderProfileThumbs(){
		
		return _.map(this.props.profileimages, profimg => {
			
			return (
				<Col sm="2">
					<NavItem className={ styles.homeProfileMenuNav } key={profimg.id}>
		            	<Link to={`/profileimages/${profimg.id}`}>
		            		<img className={ styles.homeProfileMenuImages } src={profimg.thumbnailUrl}/><br />
							<p>{profimg.title}</p>
						</Link>
		          	</NavItem>
		        </Col>
		    );
		})
	}

	render(){
		
		return (
			<div className={ styles.homeProfileMenu }>
				<Row>
					<Col sm="6">
						<Row>
							{this.renderProfileThumbs()}
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

export default connect(mapStateToProps, {fetchProfileImages})(HomePage);