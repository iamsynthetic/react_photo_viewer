import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPhoto } from '../actions';

class PhotosNew extends Component{

	renderField(field){
		const { meta: { touched, error } } = field;
		const className = `form-group ${touched && error ? 'has-danger': ''}`;

		return (
			<div className={className}>
				<label>{field.labeloffield}</label>
				<input className="form-control" type="text" {...field.input}/>
				<div className="text-help">{touched ? error : ''}</div>
			</div>
		)
	}

	onSubmit(values){
		this.props.createPhoto(values, () => {
			this.props.history.push('/');
		});
	}

	render(){
		const { handleSubmit } = this.props;

		return (
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<Field labeloffield="title" name="title" component={this.renderField} />
				<Field labeloffield="url" name="url" component={this.renderField} />
				<Field labeloffield="thumbnailUrl" name="thumbnailUrl" component={this.renderField} />
				<Field labeloffield="author" name="author" component={this.renderField} />

				<button type="submit" className="btn btn-primary">Submit</button>
				<Link to="/" className="btn btn-danger">Cancel</Link>
			</form>
		)
	}
}

function validate(values){
	//console.log(values)
	const errors = {};

	//validate the inputs from 'values'
	if(!values.title){
		errors.title = "Enter a title";
	}
	if(!values.category){
		errors.category = "Enter a category";
	}
	if(!values.photo){
		errors.photo = "load a photo url";
	}

	//if errors is empty, the form is fine to submit
	//if errors has *any* properties, redux form assumes form is valid
	return errors;
}

export default reduxForm({
	validate,
	form: 'PhotosNewForm'
})(
	connect(null,{ createPhoto })(PhotosNew)
);