import React from 'react';
import logo from './logo.jpg';
import { connect } from 'react-redux'
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import {logSet, saveSession, deadStats, benchStats, pressStats, cleanStats, squatStats, pullupStats, getQuote} from './actions'
import { BrowserRouter as Link } from "react-router-dom";
import { withRouter } from "react-router";
import './App.css';
import * as V from 'victory';
import { VictoryBar, VictoryChart, VictoryAxis  } from 'victory';


var moment = require('moment');
moment().format();

class LoginPlaceHold extends React.Component {
  constructor() {
    super();
    this.state = { 

    }
}

componentDidMount() {
    this.props.getQuote()
}
 

  render() {
        return (
          <div className="App-quote">
            <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
            <div className="quotecard">
           <CardTitle >
           </CardTitle>

          </div>

          </Card>
            </div>
        )
    }
}

const mapState = state => {
  return {
      quote: state.quote
  }
}

export default withRouter(connect(mapState, {getQuote})(LoginPlaceHold))
