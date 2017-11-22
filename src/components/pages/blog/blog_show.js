import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchBlogPosts, deleteBlogPost } from '../../../actions';

class BlogShow extends Component {

	componentDidMount(){
		if(!this.props.blog){
			const { id } = this.props.match.params;
			this.props.fetchBlogPosts(id);
		}
	}

	onDeleteClick(){
		const { id } = this.props.match.params;

		this.props.deleteBlogPost(id, () => {
			this.props.history.push('/blog');
		});
	}
	
	render(){

		const { blogposts } = this.props;
		console.log('this.props is: ' + blogposts);
		if(!blogposts){
			return <div>Loading...!!!</div>;
		}

		return (
			<div>
				<Link to="/">Back to Home</Link>
				<button className="btn btn-danger pull-xs-right" onClick={this.onDeleteClick.bind(this)}>
					Delete blog post
				</button>
				<h3>{blogposts.title}</h3>
				<h6>categories: {blogposts.categories}</h6>
				<img src={blogposts.url} />
			</div>
		)
	}
}

function mapStateToProps({ blog }, ownProps){
	return { blog: blogphotos[ownProps.match.params.id]};
}

export default connect(mapStateToProps, { fetchBlogPosts, deleteBlogPost })(BlogShow);