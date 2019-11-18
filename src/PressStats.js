import React from 'react';
import logo from './logo.jpg';
import { connect } from 'react-redux'
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import {logSet, saveSession} from './actions'
import { BrowserRouter as Link } from "react-router-dom";
import { withRouter } from "react-router";
import './App.css';
import { Badge } from 'reactstrap';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme   } from 'victory';



var moment = require('moment');
moment().format();

class PressStats extends React.Component {
  constructor() {
    super();
    this.state = {
      weight: [],
      max: [],
      standards: [],
      setTime: [],
      sessionTime: [],
      rm1: null,
    }
}

  componentDidMount() {
    let weight = this.props.pressStats.filter(sets => {return(sets.length > 0)}).map((session, key) => {
      return({a: key, b: session.reduce(function(total, currentWeight) {return (total + parseInt(
      currentWeight.weight * currentWeight.reps))},0)})})
    let max = this.props.pressStats.filter(sets => {return(sets.length > 0)}).map((session, key) => {
      return({a: key, b: session.reduce(function(accu, currentMax) {return(parseInt(currentMax.weight) > accu) ? currentMax.weight : accu;}, 0)})
    })
 
    this.setState({weight, max})
  }
  liftSelect = (event) => {

    this.props.history.push(`/${event.target.value}`) 
  }

  render() {
    return (
      <div className="statspage">
        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <div style={{}}className="trackcard">
           <CardTitle >PRESS STATS</CardTitle>
        </div>
        <div class="input-group mb-3">
            <select class="custom-select" id="inputGroupSelect02" onChange={(event) => this.liftSelect(event)}>
              <option selected>Select a different lift...</option>
              <option value="DeadStats">Deadlift</option>
              <option value="BenchStats">Bench</option>
              <option value="PressStats">Press</option>
              <option value="CleanStats">Power Clean</option>
              <option value="SquatStats">Squat</option>
              <option value="PullupStats">Pull-up</option>
            </select>
          <div class="input-group-append">
            <label class="input-group-text" for="inputGroupSelect02">Lift</label>
          </div>
          </div>
        <div style={{margin: '9px'}}className="count">
          <InputGroupAddon addonType="append">
            <Button size="lg" onClick={this.saveSession} color="primary">Session and Set History</Button>
          </InputGroupAddon>
        </div>
        <Card body inverse style={{  backgroundColor: 'lightyellow', borderColor: 'lightyellow' }}>
          
          <VictoryChart 
             theme={VictoryTheme.material}>
            <VictoryAxis />
            <VictoryAxis  
                  dependentAxis
                  tickFormat={(x) => (x)}
            />
            <VictoryBar data={this.state.weight} x="a" y="b"/>
          </VictoryChart>
        </Card>
        <br></br>
        <Card body inverse style={{  backgroundColor: 'lightyellow', borderColor: 'lightyellow' }}>
          <VictoryChart 
             theme={VictoryTheme.material}>
            <VictoryAxis />
            <VictoryAxis  
                  dependentAxis
                  tickFormat={(x) => (x)}
            />
            <VictoryBar data={this.state.max} x="a" y="b"/>
          </VictoryChart>
        </Card>
        </Card>
      </div>
  )}
}

const mapState = state => {
  return {
    pressStats: state.pressStats
  }
}

export default withRouter(connect(mapState, {})(PressStats))
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