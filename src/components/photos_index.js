import _ from 'loadash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPhotos } from '../actions';

class BooksIndex extends Component {
	componentDidMount(){
		this.props.fetchBooks();
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