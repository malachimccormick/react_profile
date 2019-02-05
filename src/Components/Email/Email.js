import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBMask, MDBRow, MDBCol, MDBView, MDBContainer, MDBFormInline } from "mdbreact";
import EmailForm from './EmailForm'

class EmailPage extends Component {
  state = {
    collapsed: false
  };

  handleTogglerClick = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    const navStyle = { height:'12%',marginTop: "20px" };
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.handleTogglerClick}
      />
    );
    return (
      <div id="apppage">
        <Router>
          <div>
            <MDBNavbar
              color="primary-color"
              style={navStyle}
              dark
              expand="md"
              fixed="top"
              scrolling
              transparent
              
            >
              <MDBContainer>
                <MDBNavbarBrand >
                    < MDBNavLink to='/' onClick = {() => this.props.history.goBack()} >
                  <img  src= {require('../NavBar/darkLogo.png')} style={{ marginTop: '68%', height: "110px", padding: 0 }} alt='' />
                    </MDBNavLink>
                </MDBNavbarBrand>
               <MDBNavbarNav right>
                    <MDBNavItem>
                      <MDBFormInline waves style={{marginTop:'20%'}}>
                        <div className="md-form my-0">
                          <h2>Malachi McCormick</h2>
                        </div>
                      </MDBFormInline>
                    </MDBNavItem>
                  </MDBNavbarNav>
              </MDBContainer>
            </MDBNavbar>
            {this.state.collapsed && overlay}
          </div>
        </Router>
        <MDBView>
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
              <MDBRow style={{width:'100%', marginTop:'20%'}}>
                <div className="white-text text-center text-md-left col-md-7 mt-xl-5 mb-5">
                  <h1 className="h1-responsive font-weight-bold mt-sm-5">
                    Contact Me{" "}
                  </h1>
                  <hr className="hr-light" />
                  <EmailForm />
                </div>
                <MDBCol md="6" xl="5" className="mt-xl-5">
                  <img
                    src="https://mdbootstrap.com/img/Mockups/Transparent/Small/admin-new.png"
                    alt=""
                    className="img-fluid"
                  />
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
    </div>
    );
  }
}

export default EmailPage;