import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPhotos } from '../actions';

class PhotosShow extends Component {

	componentDidMount(){
		if(!this.props.post){
			const { id } = this.props.match.params;
			this.props.fetchPhotos(id);
		}
	}

	onDeleteClick(){
		const{ id } = this.props.match.params;
		this.props.deletePhoto(id, () => {
			this.props.history.push('/');
		});
	}
	
	render(){

		const { post } = this.props;

		if(!post){
			return <div>Loading...</div>
		}

		return (
			<div>
				<Link to="/">Back to Index</Link>
				<button className="btn btn-danger pull-xs-right" onClick={this.onDeleteClick.bind(this)}>
					Delete Photo
				</button>
				<h3>{photo.title}</h3>
				<h6>categories: {photo.categories}</h6>
				<p>{photo.content}</p>
			</div>
		)
	}
}

function mapStateToProps({ photos }, ownProps){
	return { photo: photo[ownProps.match.params.id]};
}

export default connect(mapStateToProps, { fetchPhotos, deletePhoto })(PhotosShow);