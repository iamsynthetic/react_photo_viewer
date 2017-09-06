import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class MainNavigation extends Component {

	render(){
		return (
		  // <Tab.Container id="left-tabs-example" defaultActiveKey="first">
		  //   <Row className="clearfix">
		  //     <Col sm={4}>
		  //       <Nav bsStyle="pills" stacked>
		  //         <NavItem eventKey="first">
		  //           Tab 1
		  //         </NavItem>
		  //         <NavItem eventKey="second">
		  //           Tab 2
		  //         </NavItem>
		  //       </Nav>
		  //     </Col>
		  //     <Col sm={8}>
		  //       <Tab.Content animation>
		  //         <Tab.Pane eventKey="first">
		  //           Tab 1 content
		  //         </Tab.Pane>
		  //         <Tab.Pane eventKey="second">
		  //           Tab 2 content
		  //         </Tab.Pane>
		  //       </Tab.Content>
		  //     </Col>
		  //   </Row>
		  //</Tab.Container>
			
		 <div className="container">
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Scotch Books</a>
            <a className="navbar-brand" href="#">Scotch Books</a>
            <a className="navbar-brand" href="#">Scotch Books</a>
            <a className="navbar-brand" href="#">Scotch Books</a>
            <a className="navbar-brand" href="#">Scotch Books</a>
            <a className="navbar-brand" href="#">Scotch Books</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/books">Book</Link></li>
              <li><Link to="/cart">Cart</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
		)
	}
}

function mapStateToProps(state){
	return { photos: state.photos }
}

export default MainNavigation;