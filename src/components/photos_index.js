import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPhotos } from '../actions';

import styles from '../style/style.css';

class PhotosIndex extends Component {
	componentDidMount(){
		this.props.fetchPhotos();
	}

	renderPhotos(){
		return _.map(this.props.photos, photo => {
			return (
				<li className="list-group-item" key={photo.id}>
					<div>
						<img src={photo.thumbnailUrl} />
						<Link to={`/photos/${photo.id}`}>
						{photo.title}
						</Link>
					</div>
				</li>
			);
		})
	}

	render(){
		
		return (
			<div>
				<div className="text-xs-right">
					<Link className="btn btn-primary" to="/photos/new">
						Add a Photo
					</Link>
				</div>
				<h3>Photos</h3>
				<ul className="list-group">
					{this.renderPhotos()}
				</ul> 
			</div>
		);
	}
}

function mapStateToProps(state){
	return { photos: state.photos }
}

export default connect(mapStateToProps, {fetchPhotos})(PhotosIndex);