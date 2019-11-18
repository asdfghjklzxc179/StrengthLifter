import React from 'react';
import logo from './logo.jpg';
import { connect } from 'react-redux'
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import {logSet, saveSession, deadStats, benchStats, pressStats, cleanStats, squatStats, pullupStats} from './actions'
import { BrowserRouter as Link } from "react-router-dom";
import { withRouter } from "react-router";
import './App.css';
import * as V from 'victory';
import { VictoryBar, VictoryChart, VictoryAxis  } from 'victory';


var moment = require('moment');
moment().format();

class Stats extends React.Component {
  constructor() {
    super();
    this.state = { 
      totalWeight: [],
      deadSessions: [],
      benchSessions: [],
      pressSessions: [],
      cleanSessions: [],
      squatSessions: [],
      pullupSessions: [],
      deadData: [],
      benchData: [],
      pressData: [],
      cleanData: [],
      squatData: [],
      pullupData: [],
    }
}


  componentDidMount() {
    let deadSessions = this.props.sessions.map(session => {
      return(session.filter(set => set.lift ==="Deadlift"))
    }) 
    let benchSessions = this.props.sessions.map(session => {
      return(session.filter(set => set.lift ==="Bench"))
    })
    let pressSessions = this.props.sessions.map(session => {
      return(session.filter(set => set.lift ==="Press"))
    })
    let cleanSessions = this.props.sessions.map(session => {
      return(session.filter(set => set.lift ==="Power Clean"))
    })
    let pullupSessions = this.props.sessions.map(session => {
      return(session.filter(set => set.lift ==="Pull-Up"))
    })
    let squatSessions = this.props.sessions.map(session => {
      return(session.filter(set => set.lift ==="Squat"))
    })
    
    
    // let benchData = benchSessions.map((session, key) => {
    //   return({a: key, b: session.reduce(function(total, currentWeight) {return (total + parseInt(
    //     currentWeight.weight * currentWeight.reps))},0)})})
    // let pressData = pressSessions.map((session, key) => {
    //   return({a: key, b: session.reduce(function(total, currentWeight) {return (total + parseInt(
    //   currentWeight.weight * currentWeight.reps))},0)})}) 



    // let deadSets = this.props.activeSession.filter(set => set.lift === "Deadlift")
    // let benchSets = this.props.activeSession.filter(set => set.lift === "Bench")
    // let pressSets = this.props.activeSession.filter(set => set.lift === "Press")
    // this.setState({deadSets: deadSets, benchSets: benchSets, pressSets: pressSets})
    this.setState({deadSessions, benchSessions, pressSessions, squatSessions, pullupSessions, cleanSessions})
  }
  liftSelect = (event) => {
    this.props.deadStats(this.state.deadSessions)
    this.props.pressStats(this.state.pressSessions)
    this.props.squatStats(this.state.squatSessions)
    this.props.cleanStats(this.state.cleanSessions)
    this.props.pullupStats(this.state.pullupSessions)
    this.props.benchStats(this.state.benchSessions)

    this.props.history.push(`/${event.target.value}`) 
  }

  render() {
        return (
          <div className="App-stats">
            <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
            <div className="trackcard">
           <CardTitle >STATS</CardTitle>
          </div>
          <div class="input-group mb-3">
            <select class="custom-select" id="inputGroupSelect02" onChange={(event) => this.liftSelect(event)}>
              <option selected>Choose...</option>
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
          </Card>
            </div>
        )
    }
}

const mapState = state => {
  return {
      sessions: state.sessions
  }
}

export default withRouter(connect(mapState, {deadStats, pressStats, benchStats, cleanStats, squatStats, pullupStats})(Stats))
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

















  //   <div className="charts" style={this.state.deadSessions.length === 0 ? {display: 'none'} : null}>
  //   <VictoryChart >
  //     <VictoryAxis 

  //       />
  //       <VictoryAxis  
  //         dependentAxis
  //         tickFormat={(x) => (x)}
  //         />
  //     <VictoryBar data={this.state.deadData} x="a" y="b"/>
  //   </VictoryChart>
  //   </div>
  // <div className="charts" style={this.state.benchSessions.length === 0 ? {display: 'none'} : null}>
  //   <VictoryChart >
  //     <VictoryAxis 

  //       />
  //       <VictoryAxis  
  //         dependentAxis
  //         tickFormat={(x) => (x)}
  //         />
  //     <VictoryBar data={this.state.benchData} x="a" y="b"/>
  //   </VictoryChart>
  //   </div>
  // <div className="charts" style={this.state.pressSessions.length === 0 ? {display: 'none'} : null}>
  //   <VictoryChart >
  //     <VictoryAxis 

  //       />
  //       <VictoryAxis  
  //         dependentAxis
  //         tickFormat={(x) => (x)}
  //         />
  //     <VictoryBar data={this.state.pressData} x="a" y="b"/>
  //   </VictoryChart>
  //   </div>