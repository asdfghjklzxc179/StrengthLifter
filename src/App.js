import React from 'react';
import logo from './logo.jpg';
import './App.css';
import { connect } from 'react-redux'
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import {logSet, saveSession} from './actions'
import Summary from './Summary'
import Track from './Track'
import Stats from './Stats'
import DeadStats from './DeadStats'
import BenchStats from './BenchStats'
import PressStats from './PressStats'
import CleanStats from './CleanStats'
import SquatStats from './SquatStats'
import PullupStats from './PullupStats'
import LoginPlaceHold from './LoginPlaceHold'

import Login from './Login'
import { withRouter } from "react-router";
import { NavLink as RRNavLink } from 'react-router-dom';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


var moment = require('moment');
moment().format();

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false

    }
  }  
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
    render() {
    return (
      
      <div >

        <Navbar color="light" light expand="md">
          <img style={{width: '30px'}} src={logo}/>
          <NavbarBrand  href="/"> lifttrack</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink  tag={RRNavLink}to="/Track">Track</NavLink>
              </NavItem>
              <NavItem>
                <NavLink  tag={RRNavLink}to="/Summary">Summary</NavLink>
              </NavItem>
              <NavItem>
                <NavLink  tag={RRNavLink}to="/Stats">Stats</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
          <Route exact path="/" component={LoginPlaceHold} />
          <Route exact path="/Track" component={Track}/>
          <Route exact path="/Summary" component={Summary}/>
          <Route exact path="/Stats" component={Stats}/>
          <Route exact path="/DeadStats" component={DeadStats}/>
          <Route exact path="/BenchStats" component={BenchStats}/>
          <Route exact path="/PresStats" component={PressStats}/>
          <Route exact path="/SquatStats" component={SquatStats}/>
          <Route exact path="/CleanStats" component={CleanStats}/>
          <Route exact path="/PullupStats" component={PullupStats}/>


      </div>
  )}
}


// const mapState = state => {
//   return {

//   }
// }

// export default withRouter(connect(mapState, {})(App))
// style={this.state.submitted ? { backgroundColor: 'green' } : null}