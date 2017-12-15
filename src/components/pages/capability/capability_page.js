import _ from 'lodash';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Animate from 'react-move/Animate';
import { fetchCapabilityPage } from '../../../actions';
import CapabilityPagePart1 from './capability_page_part1';
import CapabilityPagePart2 from './capability_page_part2';
import ContentSwapper from './Content_swapper'

import { Container, Row, Col } from 'reactstrap';
import { Nav, NavItem, NavLink, Button } from 'reactstrap';
import { CardBody, Card, CardImg, CardTitle, CardText, CardDeck, CardSubtitle } from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import styles from '../../../style/styles.css';
import classNames from 'classnames';

class CapabilityPage extends Component {
	
	constructor(props) {
	    super(props);
	    this.state = {
	    	isToggleOn: true,
	    	showAnim: false
	    };

	    // This binding is necessary to make `this` work in the callback
	    this.handleClick = this.handleClick.bind(this);
	    this.updateShow = this.updateShow.bind(this);
	}

	componentDidMount(){
		this.props.fetchCapabilityPage();
	}

	handleClick() {
		//state is not defined
		//console.log(state.isToggleOn);
    	
    	//returns true
    	console.log(this.state.isToggleOn);

    	//returns as should, changes state
    	this.setState(prevState => ({
      		isToggleOn: !prevState.isToggleOn
    	}));

    	//shows the updated state
    	console.log('new state for isToggleOn is: ' + this.state.isToggleOn);
  	}

  	 updateShow = () => {
    this.setState((prev) => ({ showAnim: !prev.showAnim }));
  }

 //  	updateShow(){
	// 	//returns true
 //    	console.log(this.state.showAnim);

 //    	//returns as should, changes state
 //    	//this.setState(prevState => ({ showAnim: !prevState.showAnim }));
	// 	this.setState((prev) => ({ showAnim: !prev.showAnim }));
    	
 //    	//shows the updated state
 //    	console.log('new state for showAnim is: ' + this.state.showAnim);
	// }

	endShowAnim(){
		console.log('endShowAnim');
		//should work
		// setTimeout(function(){
	    // 	console.log("come on!");
	    // }, 2000);
	}

	addOne(e) {
		console.log('addOne');
		//console.log(state.counter);
	    //this.setState({ counter: this.state.counter + 1});
		//console.log("state is now: " + this.state.counter);


	    /*
	    
		console.log('addOne');
		console.log(this.state.counter);
	    this.setState({
			counter: this.state.counter + 1
		})

		console.log('new state is: ' + this.state.counter);
	     */
  	}

	changeState(){
		console.log(state);

		// return (
		// 	this.state;
		// )
		
	}
	// updateShow = () => {
 //    	this.setState((prev) => ({ show: !prev.show }));
 //  	}
 //  	
    finishhim(){
	   	//works 
	    // setTimeout(function(){
	    // 	console.log("come on!");
	    // }, 2000);
	}

	// finishhimagain(){
	// 	console.log('finish him!');
	// }

	renderCapabilityContent(){

		return _.map(this.props.capability, capability => {

			return (
				<div>
				
					{/* desktop layout */}

					<div className={ classNames(styles.capabilitypageText, styles.capabilitypageDesktop) }>
						<Col xs="2" sm="2">
						</Col>
						<Col xs="8" sm="8">
							<Row>
								<Col xs="12" sm="4">
								</Col>
								<Col xs="12" sm="8">
									<div className={ classNames(styles.capabilitypagePretitle, styles.animate_pretitle) }>
										{ capability.pretitle }
									</div>
								</Col>
							</Row>
							<Row>
								<Col xs="12" sm="4">
								</Col>
								<Col xs="12" sm="8">
									<div className={ classNames(styles.capabilitypageTitle, styles.animate_title) }>
										{ capability.title }
									</div>
								</Col>
							</Row>
							<Row>
								<Col xs="12" sm="1">
									<hr className={ classNames(styles.capabilitypageTitleLineHr, styles.animate_linehr) }/>
								</Col>
								<Col xs="12" sm="3">
									<div className={ classNames(styles.capabilitypageBody1, styles.animate_body) }>
										<button onClick={this.handleClick}>
									    	{this.state.isToggleOn ? 'ON' : 'OFF'}
									    </button>
										<button onClick={this.handleClick}>
								          Toggle
								        </button>
								        <Animate
								          show={this.isToggleOn}

								          start={{
								            opacity: 0,
								            backgroundColor: '#0000ff',
								          }}

								          enter={{
								            opacity: [1],
								            backgroundColor: ['#00ff00'],
								            timing: { duration: 2000 },
								          }}

								          update={{ // catch interrupts e.g. click button in middle of leave
								            opacity: [1],
								            backgroundColor: ['#00ff00'],
								            events: { end: this.endShowAnim },// an event - call update function on transition end
								            timing: { duration: 2000 },
								          }}

								          leave={{
								            opacity: [0],
								            backgroundColor: ['#ff0000'],
								            timing: { duration: 2000 },
								            
								          }}
								        >
								          {({ opacity, backgroundColor }) => {
								            return (
								              <div style={{
								                opacity,
								                width: 200,
								                height: 200,
								                marginTop: 10,
								                color: 'white',
								                backgroundColor,
								              }}
								              >
								                {opacity.toFixed(3)}
								              </div>
								            );
								          }}
								        </Animate>
									</div>
								</Col>
								<Col xs="12" sm="3">
									<div className={ classNames(styles.capabilitypageBody2, styles.animate_body) }>
										{ capability.body2 }
									</div>
								</Col>
								<Col xs="12" sm="5">
									<div className={ classNames(styles.capabilitypageBody2, styles.animate_body) }>
										{ capability.body3 }
									</div>
								</Col>
							</Row>
							<Row>
								<Col xs="12" sm="4">
								</Col>
								<Col xs="12" sm="3">
									<div className={classNames(styles.capabilitypageButton, styles.animate_button) }>
										{capability.phone_button} <FontAwesome name="angle-right"/>
									</div>
								</Col>
								<Col xs="12" sm="5">
									<div className={classNames(styles.capabilitypageButton, styles.animate_button) }>
										{capability.email_button} <FontAwesome name="angle-right"/>
									</div>
								</Col>
							</Row>
						</Col>
						<Col xs="2" sm="2">
						</Col>
					</div>




					{/* need a whole new tablet / mobile layout */}

					<div className={ classNames(styles.capabilitypageText, styles.capabilitypageMobile) }>
						<Col xs="2" sm="2">
						</Col>
						<Col xs="8" sm="8">
							<Row>
								<Col xs="12" sm="12" md="3">
								</Col>
								<Col xs="12" sm="12" md="9">
									<div className={ classNames(styles.capabilitypagePretitle, styles.animate_pretitle) }>
										{ capability.pretitle }
									</div>
								</Col>
							</Row>
							<Row>
								<Col xs="12" sm="12" md="3">
								</Col>
								<Col xs="12" sm="12" md="9">
									<div className={ classNames(styles.capabilitypageTitle, styles.animate_title) }>
										{ capability.title }
									</div>
								</Col>
							</Row>
							
							<Row>
								<Col xs="12" md="1">
									<hr className={ classNames(styles.capabilitypageTitleLineHr, styles.animate_linehr) }/>
								</Col>
								<Col xs="12" md="3">
									<div className={ classNames(styles.capabilitypageBody1, styles.animate_body) }>
										{ capability.body1 }
									</div>
								</Col>
								<Col xs="12" md="3">
									<div className={ classNames(styles.capabilitypageBody2, styles.animate_body) }>
										{ capability.body2 }
									</div>
									<div className={classNames(styles.capabilitypageButton, styles.animate_button) }>
										{capability.phone_button} <FontAwesome name="angle-right"/>
									</div>
								</Col>
								<Col xs="12" md="5">
									<div className={ classNames(styles.capabilitypageBody2, styles.animate_body) }>
										{ capability.body3 }
									</div>
									<div className={classNames(styles.capabilitypageButton, styles.animate_button) }>
										{capability.email_button} <FontAwesome name="angle-right"/>
									</div>
								</Col>
							</Row>
						</Col>
						<Col xs="2" sm="2">
						</Col>
					</div>

				</div>
			)
		})
	}

	render(){
		
		return (
			<div className={ classNames(styles.capabilitypage, styles.animate_page) }>
				{this.renderCapabilityContent()}
			</div>
         );
	}
}

function mapStateToProps(state){
	return { capability: state.capability }
}

export default connect(mapStateToProps, {fetchCapabilityPage})(CapabilityPage);