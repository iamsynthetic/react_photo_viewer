import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPhotos } from '../actions';

class PhotosNew extends Component{
	renderField(field){
		const { meta: { touched, error}} = field;
		const className = `form-group ${touched && error ? 'has-danger' : ''}`;
	
		return (
			<div className={className}>
				<label>{field.labeloffield}</label>
				<input className="form-control"
					type="text"
					{...field.input}
				/>
				<div className="text-help">
					{touched ? error : ''}
				</div>
			</div>
		)
	}

	onSubmit(values){
		this.props.createPhotos(values, () => {
			this.props.history.push('/');
		});
	}
	
	render(){
		const { handleSubmit } = this.props;

		return (
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<Field labeloffield="Title" name="title" component={this.renderField} />
				<Field labeloffield="Categories" name="categories" component={this.renderField} />
				<Field labeloffield="Post Content" name="content" component={this.renderField} />
				<button type="submit" className="btn btn-primary">Submit</button>
				<Link to="/" className="btn btn-danger">Cancel</Link>
			<form>
		)
	}
}

function validate(values){
	// const errors = {};

	// if(!values.title){
	// 	errors.title = "Enter a title";
	// }
	// if(!values.categories){
	// 	errors.categories = "Enter some categories";
	// }
	// if(!values.content){
	// 	errors.content = "Enter some content";
	// }

	// return errors;
	// 
	console.log(test)
}

export default reduxForm({
	validate, 
	form: 'PhotosNewForm'
})(
	connect(null, { createPhotos })(PhotosNew)
);