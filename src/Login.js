import React from 'react';
import logo from './logo.jpg';
import { connect } from 'react-redux'
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import {logSet, saveSession, clearActive, login} from './actions'
import { BrowserRouter as Link } from "react-router-dom";
import { withRouter } from "react-router";
import LiftCard from './LiftCard'

var moment = require('moment');
moment().format();

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
        credentials: {
            name: '',
            bodyweight: '',
        }
    }
}

handleChange = event => {
    this.setState({
        credentials: {
            ...this.state.credentials,
            [event.target.name]: event.target.value
        }
    })
    console.log(this.state.credentials)
}

handleSubmit = event => {
    this.props.login(this.state.credentials).then(() => this.props.history.push('/protected'))
}

render() {



    return (
    <div className="App">
        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Name</label>
                    <input 
                        type="text" 
                        class="form-control" 
                        name="name"
                        placeholder="Enter name..."
                        value={this.state.credentials.name}
                        onChange={this.handleChange}
                        />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Bodyweight</label>
                    <input 
                        type="text" 
                        class="form-control" 
                        name="bodyweight"
                        placeholder="Enter bodyweight..."
                        value={this.state.credentials.bodyweight}
                        onChange={this.handleChange}
                        />
                </div>
                <div className="count">
                    <InputGroupAddon addonType="append">
                    <Button size="lg" onClick={this.saveSession} color="primary">Submit</Button>
                    </InputGroupAddon>
                </div>
            </form>      
        </Card>
    </div>
  )}
}


const mapState = state => {
  return {
  }
}

export default withRouter(connect(mapState, {login})(Login))
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