import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  // Switch,
  withRouter
} from "react-router-dom";
import Parent from './Components/Parent/Parent'
import EmailPage from "./Components/Email/Email";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
       
          <div className="App">                 
            <Route exact path='/' component={Parent}/>
            <Route path='/GitHub' component={() => { window.location = 'https://github.com/malachimccormick/'; return null;} }/>
            <Route path='/Resume' component={() => { window.location = 'https://docs.google.com/document/d/1eJ-uFYm01VEw71m0PUhQhOzLVrSUm8A0r3QWLwfLJEM/edit?usp=sharing'; return null;} }/>
            <Route path='/Email' component={EmailPage}/>

          </div>
      </Router>
        
    );
  }
}

export default withRouter(App);
