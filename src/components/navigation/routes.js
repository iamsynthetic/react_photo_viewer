import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import HomePage from '../pages/home/home_page';
import TeamPage from '../pages/team/team_page';
import TeamHomeProfileDaredevil from '../pages/team/team_profile_daredevil';
import PhotosIndex from '../pages/gallery/photos_index';
import PhotosNew from '../pages/gallery/photos_new';
import PhotosShow from '../pages/gallery/photos_show';


class Routes extends Component {

	render(){
		return (
		  <Switch>
        <Route path="/" component={HomePage} />
        <Route exact path="/photos" component={PhotosIndex} />
        <Route exact path="/photos/new" component={PhotosNew} />
        <Route path="/photos/:id" component={PhotosShow} />
        <Route exact path="/team" component={TeamPage} />
        <Route exact path="/team/daredevil" component={TeamHomeProfileDaredevil} />
      </Switch>
		)
	}
}

function mapStateToProps(state){
	return { photos: state.photos }
}

export default Routes;