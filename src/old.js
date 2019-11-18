old.js 

import React from 'react';
import logo from './logo.jpg';
import './App.css';
import { connect } from 'react-redux'
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      sets: [
        {
          // date: '',
          // lift: '',
          // weight: null,
          // reps: null,

          // setTota: null,
          // setTotalWeight: null,
          // setTotalReps: null,

          // submitted: false,
        },
      ],
    }
  }

    liftSelect = (event) => {
      let sets =  this.state.sets
      
      this.setState({sets})
      console.log(sets)
    }
    repSelect = (event) => {
    }
    handleChange = event => {
      this.setState({
              ...this.state,
              [event.target.name]: event.target.value,
      })
  }
    weightSubmitted = event => {
      // this.setState({submitted: true})
    }
    logSet = (event) => {

    }

    render() {
    return (
    <div className="App">
      <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <CardTitle>LIFT TRACK</CardTitle>
        <div  className="centerall">
          <br></br>
            <InputGroupAddon addonType="append">
                <Button className="buttonmargin" color="secondary" 
                  onClick={(event) => this.liftSelect(event)}>Deadlift</Button>
                <Button className="buttonmargin" color="secondary"
                  onClick={(event) => this.liftSelect(event)}>Bench</Button>
                <Button className="buttonmargin" color="secondary"
                  onClick={(event) => this.liftSelect(event)}>Press</Button>
            </InputGroupAddon>

          <br></br>
          <InputGroup>
            <Input 
              placeholder="enter weight lifted..."
              value={this.state.weight}
              name="weight"
              onChange={this.handleChange}/>
          </InputGroup>
          <br></br>
            <CardText>Reps</CardText>
            <InputGroupAddon addonType="append">
                <Button className="buttonmargin" color="secondary"
                  onClick={(event) => this.repSelect(event)}>3</Button>
                <Button className="buttonmargin" color="secondary"
                  onClick={(event) => this.repSelect(event)}>6</Button>
                <Button className="buttonmargin" color="secondary"
                  onClick={(event) => this.repSelect(event)}>9</Button>
            </InputGroupAddon>
          <br></br>
            <InputGroupAddon addonType="append">
              <Button color="success">Log set</Button>
            </InputGroupAddon>
          <br></br>
            <InputGroupAddon addonType="append">

            <Button color="success">Save session and display stats</Button>
            </InputGroupAddon>
            </div>

      </Card>
    </div>
  );}
}


const mapState = state => {
  return {

  }
}

export default connect(mapState, {})(App)
// style={this.state.submitted ? { backgroundColor: 'green' } : null}