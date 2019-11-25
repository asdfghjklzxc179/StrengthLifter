import React from 'react';
import logo from './logo.jpg';
import { connect } from 'react-redux'
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import {logSet, saveSession, clearActive} from './actions'
import { BrowserRouter as Link } from "react-router-dom";
import { withRouter } from "react-router";
import LiftCard from './LiftCard'

var moment = require('moment');
moment().format();

class Summary extends React.Component {
  constructor() {
    super();
    this.state = {
    }
}

  
//                 // deadSets: [...state.deadSets, action.payload
//                 //     .filter(set => set.lift === "Deadlift" )],


  continue = (event) => {
    this.props.history.push("/Stats")
    this.props.clearActive()
  }

  render() {



    return (
    <div className="App">
       <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <CardText>
        <div className="trackcard">
           <CardTitle style={{fontSize: '1.9rem'}}>SESSION SUMMARY</CardTitle>
          </div>
          <LiftCard />

        </CardText>
        <div className="count">
            <InputGroupAddon addonType="append">
              <Button size="lg" onClick={this.continue} color="primary">Continue</Button>
            </InputGroupAddon>
          </div>
        <Press />

        
      </Card>



    </div>
  )}
}

const Dead = () => {
  return(
    <></>
    )
}
const Bench = () => {
  return(
    <></>
  
    )
}
const Press = () => {
  return(
    <></>
  
  )
}


const mapState = state => {
  return {
    activeSession: state.activeSession,
  }
}

export default withRouter(connect(mapState, {clearActive})(Summary))
// style={this.state.submitted ? { backgroundColor: 'green' } : null}

    // liftSelect = (event) => {
    //   this.setState({
    //     set: {
    //     ...this.state.set,
    //     lift: event.target.innerHTML,
    //     }
    //   })
    //   console.log(this.props.activeSession)
    //   this.state.setCount = 0
    // }
    // repSelect = (event) => {
    //   this.setState({
    //     set: {
    //     ...this.state.set,
    //     reps: event.target.innerHTML,
    //     }
    //   })

    // }
    // handleChange = event => {
    //   this.setState({
    //     set: {
    //           ...this.state.set,
    //           [event.target.name]: event.target.value,
    //         }
    //   })

    // }
    // logSet = event => {
    //   this.props.logSet(this.state.set)
    //   this.state.setCount++ 
    // }
    // saveSession = event => {

    //   this.props.saveSession(this.props.activeSession)
    //   console.log(this.props.sessions)
    //   this.state.setCount = 0

    // }