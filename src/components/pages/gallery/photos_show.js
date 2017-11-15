import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPhotos, deletePhoto } from '../../../actions';

class PhotosShow extends Component {

	componentDidMount(){
		if(!this.props.blogphotos){
			const { id } = this.props.match.params;
			this.props.fetchPhotos(id);
		}
	}

	onDeleteClick(){
		const { id } = this.props.match.params;

		this.props.deletePhoto(id, () => {
			this.props.history.push('/');
		});
	}
	
	render(){

		const { blogphotos } = this.props;
		console.log('this.props is: ' + blogphotos);
		if(!blogphotos){
			return <div>Loading...!!!</div>;
		}

		return (
			<div>
				<Link to="/">Back to Home</Link>
				<button className="btn btn-danger pull-xs-right" onClick={this.onDeleteClick.bind(this)}>
					Delete Photo
				</button>
				<h3>{blogphotos.title}</h3>
				<h6>categories: {blogphotos.categories}</h6>
				<img src={blogphotos.url} />
			</div>
		)
	}
}

function mapStateToProps({ blogphotos }, ownProps){
	return { blogphotos: blogphotos[ownProps.match.params.id]};
}

export default connect(mapStateToProps, { fetchPhotos, deletePhoto })(PhotosShow);