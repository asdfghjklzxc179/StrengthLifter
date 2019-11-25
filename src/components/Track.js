import React from 'react';
import logo from './logo.jpg';
import './App.css';
import { connect } from 'react-redux'
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import {logSet, saveSession} from './actions'
import Summary from './Summary'
import { withRouter } from "react-router";
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import { BrowserRouter as Route, Link, NavLink } from "react-router-dom";


var moment = require('moment');
moment().format();

class Track extends React.Component {
    constructor() {
        super();
        this.state = {
          dropdownOpen: false,
          dropdownOpen2: false,

          set:{
              date: '',
              lift: '',
              weight: null,
              reps: null,
            },
          setCount: 0,
          repsArr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          }
        }


        componentDidMount() {
          this.setState({activeSession: true})
        }
        toggle = event => {
          this.setState({
            dropdownOpen: !this.state.dropdownOpen,
        })
        }
        toggle2 = event => {
          this.setState({
            dropdownOpen2: !this.state.dropdownOpen2,
        })
        }
        liftSelect = (event) => {
          this.setState({
            set: {
            ...this.state.set,
            lift: event.target.value,
            }
          })
          console.log(this.props.activeSession)
          this.setState({
            setCount: 0,
        })
        }
        repSelect = (event) => {
          this.setState({
            set: {
            ...this.state.set,
            reps: event.target.value,
            }
          })
    
        }
        handleChange = event => {
          this.setState({
            set: {
                  ...this.state.set,
                  [event.target.name]: event.target.value,
                }
          })
    
        }
        logSet = event => {
          this.props.logSet(this.state.set)
          this.setState({
              setCount: this.state.setCount + 1,
          })
        }

        saveSession = event => {

          this.props.saveSession(this.props.activeSession)
          this.setState({
            setCount: 0,
        })
          this.props.history.push("/Summary")
        }

    
        render() {
        return (
        <div className="App">
        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
          <div className="trackcard">
           <CardTitle >TRACK</CardTitle>
          </div>
          <div class="input-group mb-3">
            <select class="custom-select" id="inputGroupSelect02" onChange={(event) => this.liftSelect(event)}>
              <option selected>Choose...</option>
              <option value="Deadlift">Deadlift</option>
              <option value="Bench">Bench</option>
              <option value="Press">Press</option>
              <option value="Power Clean">Power Clean</option>
              <option value="Squat">Squat</option>
              <option value="Pull-Up">Pull-up</option>
            </select>
          <div class="input-group-append">
            <label class="input-group-text" for="inputGroupSelect02">Lift</label>
          </div>
          </div>

          <div class="input-group mb-3">
          <input type="text" class="form-control" aria-label="Text input with segmented dropdown button"
                    placeholder="Enter weight lifted..."
                    value={this.state.weight}
                    name="weight"
                    onChange={this.handleChange}
            />

          </div>

          <div class="input-group mb-3">
            <select class="custom-select" id="inputGroupSelect02" onChange={(event) => this.repSelect(event)}>
              <option selected>Choose...</option>
              {this.state.repsArr.map((rep) => {
                return(<option value={rep}>{rep}</option>)
                })}
            </select>
          <div class="input-group-append">
            <label class="input-group-text" for="inputGroupSelect02">Reps</label>
          </div>
          </div>
          <div className="count">
            <InputGroupAddon addonType="append">
              <Button size="lg" className="buttonmargin" onClick={this.logSet} color="primary">Log Set</    Button>
              <Button size="lg" className="buttonmargin" style={ this.state.setCount === 0 ? {display: "none"} : null} color="primary">{this.state.setCount}</Button>
            </InputGroupAddon>
          </div>
          <br></br>
          <div className="count">
            <InputGroupAddon addonType="append">
              <Button size="lg" onClick={this.saveSession} color="primary">Save and Continue</Button>
            </InputGroupAddon>
          </div>
          </Card>
        </div>
      );}
    }
    
    
    const mapState = state => {
      return {
        activeSession: state.activeSession,
        sessions: state.sessions,
      }
    }
    
    export default withRouter(connect(mapState, {logSet, saveSession})(Track))

    
//     <InputGroupAddon addonType="append">
//     <Button className="buttonmargin" color="secondary" 
//       onClick={(event) => this.liftSelect(event)}>Deadlift</Button>
//     <Button className="buttonmargin" color="secondary"
//       onClick={(event) => this.liftSelect(event)}>Bench</Button>
//     <Button className="buttonmargin" color="secondary"
//       onClick={(event) => this.liftSelect(event)}>Press</Button>
// </InputGroupAddon>

{/* <InputGroup>
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
  <Button className="buttonmargin" onClick={this.logSet} color="success">Log set</Button>
  <Button className="buttonmargin" style={ this.state.setCount === 0 ? {display: "none"} : null} color="success">{this.state.setCount}</Button>
</InputGroupAddon>
<br></br>
<InputGroupAddon addonType="append">

<Button onClick={this.saveSession} color="success">Save Session and Display Stats</Button>
</InputGroupAddon> */}




// <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
{/* <div className="trackcard">
<CardTitle >LIFT TRACK</CardTitle>
</div> */}
// <div  className="centerall">
//   <br></br>
//     <ButtonDropdown size="lg" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
//       <DropdownToggle caret>
//         {this.state.set.lift ? this.state.set.lift : 'Select Lift'}
//       </DropdownToggle>
//       <DropdownMenu>
//         <DropdownItem onClick={(event) => this.liftSelect(event)}>Deadlift</DropdownItem>
//         <DropdownItem onClick={(event) => this.liftSelect(event)}>Bench</DropdownItem>
//         <DropdownItem onClick={(event) => this.liftSelect(event)}>Press</DropdownItem>
//       </DropdownMenu>
//     </ButtonDropdown>
//   <br></br>
//   <div className="inputform">
//   <InputGroup>
//     <Input 
      // placeholder="enter weight lifted..."
      // value={this.state.weight}
      // name="weight"
      // onChange={this.handleChange}
//       bsSize="lg"/>
//   </InputGroup>
//   </div>
//   <br></br>

//   <ButtonDropdown size="lg" isOpen={this.state.dropdownOpen2} toggle={this.toggle2}>
//       <DropdownToggle caret>
//         {this.state.set.reps ? this.state.set.reps : 'Repetitions'}
//       </DropdownToggle>
//       <DropdownMenu>
//         <DropdownItem onClick={(event) => this.repSelect(event)}>{this.state.repsArr.map(rep => {
//           return(<div>{rep}</div>)
//         })}</DropdownItem>
//       </DropdownMenu>
//     </ButtonDropdown>

//   <br></br>
    // <InputGroupAddon addonType="append">
    //   <Button size="lg" className="buttonmargin" onClick={this.logSet} color="success">Log set</Button>
    //   <Button size="lg" className="buttonmargin" style={ this.state.setCount === 0 ? {display: "none"} : null} color="success">{this.state.setCount}</Button>
    // </InputGroupAddon>
  // <br></br>
    // <InputGroupAddon addonType="append">

    // <Button size="lg" onClick={this.saveSession} color="success">Save and Continue</Button>
    // </InputGroupAddon>
//     </div>

// </Card>
