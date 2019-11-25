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



var moment = require('moment');
moment().format();

class LiftCard extends React.Component {
  constructor() {
    super();
    this.state = {
      deadSets: [],
      benchSets: [],
      pressSets: [],
      cleanSets: [],
      squatSets: [],
      pullupSets: [],
    }
}
  componentDidMount() {
    let deadSets = this.props.activeSession.filter(set => set.lift === "Deadlift")
    let benchSets = this.props.activeSession.filter(set => set.lift === "Bench")
    let pressSets = this.props.activeSession.filter(set => set.lift === "Press")
    let cleanSets = this.props.activeSession.filter(set => set.lift === "Power Clean")
    let squatSets = this.props.activeSession.filter(set => set.lift === "Squat")
    let pullupSets = this.props.activeSession.filter(set => set.lift === "Pull-Up")

    this.setState({deadSets, benchSets, pressSets, cleanSets, squatSets, pullupSets})

  }

  maxWeight = (sets) => {
    let max = sets.reduce(function(accu, curr)  {return (curr.weight > accu) ? curr.weight : accu;}, 0)
    return (<div  style={{ fontSize: '1.2rem'}}>{max}</div>)
  }

  totalReps = (sets) => {
    let total = sets.reduce(function(total, currentReps) {return (total + parseInt(currentReps.reps))}, 0)
    return (<div  style={{ fontSize: '1.2rem'}}>{total}</div>)
  }

  totalSets = (sets) => {
    let total = sets.length
    return(<div  style={{fontSize: '1.2rem'}}>{total}</div>)
  }

  totalWeight = (sets) => {
    let total = sets.reduce(function(total, currentWeight) {return (total + parseInt(
      currentWeight.weight * currentWeight.reps)
    )}, 0)
    return(<div  style={{ fontSize: '1.2rem'}}>{total}</div>)
  }

  liftDate = (sets) => {
    let max = sets.reduce(function(accu, curr)  {return (curr.date > accu) ? curr.date : accu;}, 0)
    return (<div >{max}</div>)
  }
  // poundsPerMinute = () => {

  // }

  // progressMeasure = () => {

  // }

  render() {
    return (<div>
    <div className="App cards" style={this.state.deadSets.length === 0 ? {display: 'none'} : null}>
       <Card body inverse style={{  backgroundColor: '#333', borderColor: '#333' }}>
            <div className="cardtitle">
              <h1 style={{ fontSize: '1.4rem'}}>DEADLIFT</h1>
            </div>
         <div className="card-stats">
            <div>
              MAX WEIGHT: {this.maxWeight(this.state.deadSets)}
            </div>
            <div>
              TOTAL REPS: {this.totalReps(this.state.deadSets)}
            </div>
            <div>
             TOTAL SETS: {this.totalSets(this.state.deadSets)}
            </div>
            <div>
             TOTAL WEIGHT: {this.totalWeight(this.state.deadSets)}
            </div>
        </div>
      </Card>
      
    </div>

        <div className="App cards" style={this.state.benchSets.length === 0 ? {display: 'none'} : null}>
        <Card body inverse style={{  backgroundColor: '#333', borderColor: '#333' }}>
             <div className="cardtitle">
               <h1 style={{ fontSize: '1.4rem'}}>BENCH</h1>
             </div>
          <div className="card-stats">
             <div>
              MAX WEIGHT: {this.maxWeight(this.state.benchSets)}
             </div>
             <div>
               TOTAL REPS: {this.totalReps(this.state.benchSets)}
             </div>
             <div>
              TOTAL SETS: {this.totalSets(this.state.benchSets)}
             </div>
             <div>
              TOTAL WEIGHT: {this.totalWeight(this.state.benchSets)}
             </div>
         </div>
       </Card>
       
     </div>
     <div className="App cards" style={this.state.pressSets.length === 0 ? {display: 'none'} : null}>
        <Card body inverse style={{  backgroundColor: '#333', borderColor: '#333' }}>
             <div className="cardtitle">
               <h1 style={{ fontSize: '1.4rem'}}>PRESS</h1>
             </div>
          <div className="card-stats">
             <div>
              MAX WEIGHT: {this.maxWeight(this.state.pressSets)}
             </div>
             <div>
               TOTAL REPS: {this.totalReps(this.state.pressSets)}
             </div>
             <div>
              TOTAL SETS: {this.totalSets(this.state.pressSets)}
             </div>
             <div>
              TOTAL WEIGHT: {this.totalWeight(this.state.pressSets)}
             </div>
         </div>
         <div className="expandsets">
           {/* display session sets button */}
         </div>
       </Card>
       
     </div>
     <div className="App cards" style={this.state.cleanSets.length === 0 ? {display: 'none'} : null}>
        <Card body inverse style={{  backgroundColor: '#333', borderColor: '#333' }}>
             <div className="cardtitle">
               <h1 style={{ fontSize: '1.1rem'}}>POWER CLEAN</h1>
             </div>
          <div className="card-stats">
             <div>
              MAX WEIGHT: {this.maxWeight(this.state.cleanSets)}
             </div>
             <div>
               TOTAL REPS: {this.totalReps(this.state.cleanSets)}
             </div>
             <div>
              TOTAL SETS: {this.totalSets(this.state.cleanSets)}
             </div>
             <div>
              TOTAL WEIGHT: {this.totalWeight(this.state.cleanSets)}
             </div>
         </div>
         <div className="expandsets">
           {/* display session sets button */}
         </div>
       </Card>
       
     </div>
     <div className="App cards" style={this.state.squatSets.length === 0 ? {display: 'none'} : null}>
        <Card body inverse style={{  backgroundColor: '#333', borderColor: '#333' }}>
             <div className="cardtitle">
               <h1 style={{ fontSize: '1.4rem'}}>SQUAT</h1>
             </div>
          <div className="card-stats">
             <div>
              MAX WEIGHT: {this.maxWeight(this.state.squatSets)}
             </div>
             <div>
               TOTAL REPS: {this.totalReps(this.state.squatSets)}
             </div>
             <div>
              TOTAL SETS: {this.totalSets(this.state.squatSets)}
             </div>
             <div>
              TOTAL WEIGHT: {this.totalWeight(this.state.squatSets)}
             </div>
         </div>
         <div className="expandsets">
           {/* display session sets button */}
         </div>
       </Card>
       
     </div>
     <div className="App cards" style={this.state.pullupSets.length === 0 ? {display: 'none'} : null}>
        <Card body inverse style={{  backgroundColor: '#333', borderColor: '#333' }}>
             <div className="cardtitle">
               <h1 style={{ fontSize: '1.4rem'}}>PULL-UP</h1>
             </div>
          <div className="card-stats">
             <div>
              MAX WEIGHT: {this.maxWeight(this.state.pullupSets)}
             </div>
             <div>
               TOTAL REPS: {this.totalReps(this.state.pullupSets)}
             </div>
             <div>
              TOTAL SETS: {this.totalSets(this.state.pullupSets)}
             </div>
             <div>
              TOTAL WEIGHT: {this.totalWeight(this.state.pullupSets)}
             </div>
         </div>
         <div className="expandsets">
           {/* display session sets button */}
         </div>
       </Card>
       
     </div>
     </div>
  )}
}

const mapState = state => {
  return {
    activeSession: state.activeSession
  }
}

export default withRouter(connect(mapState, {})(LiftCard))
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