import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPhotos } from '../actions';

class PhotosIndex extends Component {
	componentDidMount(){
		this.props.fetchPhotos();
	}

	render(){
		return (
			<div>
				<h3>Photos</h3>
			</div>
		);
	}
}

function mapStateToProps(state){
	return { posts: state.posts }
}

export default connect(mapStateToProps, {fetchPhotos})(PhotosIndex);