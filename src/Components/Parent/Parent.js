import React, { Component } from 'react';

import NavbarPage from '..//Layout/Nav'
import Intro from '../FirstDiv/ProfileSec'

import Footer from '../Footer/Footer'


class Parent extends Component {
  render() {
    return (
      
      <div className="App">
     
        < React.Fragment >
          <header className="App-header">
            <NavbarPage />
          </header>
          <br></br>
          <Intro />
          <Footer />
          </ React.Fragment>
          
           
      </div>
      
    );
  }
}
export default Parent