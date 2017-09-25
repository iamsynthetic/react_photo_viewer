import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProfileImages } from '../actions';
import styles from '../style/styles.css';

class HomePage extends Component {
	componentDidMount(){
		this.props.fetchProfileImages();
	}

	renderPhotos(){
		return _.map(this.props.profileimages, profimage => {
			return (
				<li className="list-group-item" key={profimage.id}>
					<div>
						<img src={profimage.thumbnailUrl} />
						<Link to={`/profileimages/${profimage.id}`}>
						{profimage.title}
						</Link>
					</div>
				</li>
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
				<ul className="list-group">
					{this.renderPhotos()}
				</ul> 
			</div>
		);
	}
}

function mapStateToProps(state){
	return { profileimages: state.profileimages }
}

export default connect(mapStateToProps, {fetchProfileImages})(HomePage);