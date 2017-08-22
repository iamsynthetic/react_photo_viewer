import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPhotos } from '../actions';

class PhotosNew extends Component{

	render(){
		return (
			<div>new photos go here</div>
		)
	}
}

function mapStateToProps(state){
	return { photos: state.photos };
}

export default connect(mapStateToProps, {fetchPhotos})(PhotosNew)