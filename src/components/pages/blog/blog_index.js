import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchBlogPosts } from '../../../actions';
import styles from '../../../style/styles.css';

class BlogIndex extends Component {
	componentDidMount(){
		this.props.fetchBlogPosts();
	}

	renderBlogPosts(){
		return _.map(this.props.blogphotos, blogdata => {
			return (
				<div>
				<p>testing</p>
				<li className="list-group-item" key={blogdata.id}>
					<div>
					
						<img src={blogdata.thumbnailUrl} />
						<Link to={`/blog/${blogdata.id}`}>
						{blogdata.title}
						</Link>
					</div>
				</li>
				</div>
			);
		})
	}

	render(){
		console.log(this.props.blogphotos);
		return (
			<div className={ styles.blogAddPhoto }>
				<div className="text-xs-right">
					<Link className="btn btn-primary" to="/blog/new">
						Add a post
					</Link>
				</div>
				<h3>Blog Posts</h3>
				<ul className="list-group">
					{this.renderBlogPosts()}
				</ul> 
			</div>
		);
	}
}

function mapStateToProps(state){
	return { blogphotos: state.blog }
}

export default connect(mapStateToProps, {fetchBlogPosts})(BlogIndex);