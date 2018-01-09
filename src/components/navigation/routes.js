import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import HomePage from '../pages/home/home_page';
import TeamPage from '../pages/team/team_page';
import TeamMemberPage from '../pages/team/team_member_page';
import BlogIndex from '../pages/blog/blog_index';
import BlogNew from '../pages/blog/blog_new';
import BlogShow from '../pages/blog/blog_show';
import ContactPage from '../pages/contact/contact_page';


class Routes extends Component {

	render(){
		return (
		  <Switch>
		  	<Route exact path="/" component={HomePage} />
	        <Route exact path="/team" component={TeamPage} />
	        <Route path="/team/:id" component={TeamMemberPage} />
	        <Route exact path="/blog" component={BlogIndex} />
	        <Route exact path="/blog/new" component={BlogNew} />
	        <Route path="/blog/:id" component={BlogShow} />
	        <Route exact path="/contact" component={ContactPage} />
	      </Switch>
		)
	}
}

function mapStateToProps(state){
	return { photos: state.photos }
}

export default Routes;