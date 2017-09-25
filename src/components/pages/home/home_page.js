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
				<Col sm="6">
		        	<NavItem key={profimg.id}>
		            	<img src={profimg.thumbnailUrl} rounded /><br />
						<Link to={`/profileimages/${profimg.id}`}>
							{profimg.title}
						</Link>
		          	</NavItem>
		        </Col>
		    );
		})
	}

	render(){
		
		return (
			<div className={ styles.photosAddPhoto }>
				<div className="text-xs-right">
					<Link className="btn btn-primary" to="/photos/new">
						Add a Photo
					</Link>
				</div>
				<h3>Photos</h3>
				<Nav>
					{this.renderProfileThumbs()}
				</Nav>
			</div>
		);
	}
}

function mapStateToProps(state){
	return { profileimages: state.profileimages }
}

export default connect(mapStateToProps, {fetchProfileImages})(HomePage);