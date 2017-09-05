import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPhotos, deletePhoto } from '../actions';

class PhotosShow extends Component {

	componentDidMount(){
		if(!this.props.photos){
			const { id } = this.props.match.params;
			this.props.fetchPhotos(id);
		}
	}

	onDeleteClick(){
		const { id } = this.props.match.params;
		//this.props.deletePhoto(id);
		// this.props.deletePhoto(id, () => {
		// 	this.props.history.push('/');
		// });

		console.log(id);
		console.log('deleteClick this.props is: ' + this.props);
		//this.props.history.push('/');

		this.props.deletePhoto(id, () => {
			console.log('something');
			console.log('deleteClick this.props.history is: ' + this);
			console.log('fucking finally!');
			this.props.history.push('/');
		});

		// showsomething = function(){
		// 	console.log('something');
		// }
	}
	
	render(){

		const { photos } = this.props;

		if(!photos){
			return <div>Loading...</div>;
		}

		return (
			<div>
				<Link to="/">Back to Home</Link>
				<button className="btn btn-danger pull-xs-right" onClick={this.onDeleteClick.bind(this)}>
					Delete Photo
				</button>
				<h3>{photos.title}</h3>
				<h6>categories: {photos.categories}</h6>
				<img src={photos.url} />
			</div>
		)
	}
}

function mapStateToProps({ photos }, ownProps){
	return { photos: photos[ownProps.match.params.id]};
}

export default connect(mapStateToProps, { fetchPhotos, deletePhoto })(PhotosShow);