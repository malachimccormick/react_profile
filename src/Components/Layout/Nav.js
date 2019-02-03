import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBContainer} from "mdbreact";

class NavbarPage extends Component {
state = {
  collapseID: ""
};

toggleCollapse = collapseID => () =>
  this.setState(prevState => ({
  collapseID: prevState.collapseID !== collapseID ? collapseID : ""
}));

render() {
  return (
 
    <MDBContainer >
      <MDBNavbar color="default-color" dark expand="md" style={{ marginTop: "10px", height:'65px' }}>
        <MDBNavbarBrand>
          <img src= {require('./darkLogo.png')} style={{ marginTop: '20px', height: "110px", padding: 0 }} alt='' />
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse("navbarCollapse3")} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.collapseID} navbar>
          <MDBNavbarNav center style={{fontSize:'14pt'}}>
            <MDBNavItem>
              <MDBNavLink to="#!">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Resume</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to='/Email' style={linkStyle}>Email</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle className="dopdown-toggle" nav>
                  <img src={require("./pic.jpeg")} className="rounded-circle z-depth-0"
                    style={{ height: "45px", padding: 0 }} alt="" />
                </MDBDropdownToggle>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </MDBContainer>
    );
  }
}
const linkStyle = {
  color: '#fff',
  textDecoration: 'none'
}

export default NavbarPage;