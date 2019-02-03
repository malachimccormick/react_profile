import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import Parent from './Components/Parent/Parent'
import EmailPage from "./Components/Pages/Email";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <div className="App">                 
            <Route exact path='/' render={() => <Parent />}/>
            <Route exact path='/Email' render={() => <EmailPage />}/>
          </div>
        </Switch>
      </Router>
    );
  }
}

export default withRouter(App);
