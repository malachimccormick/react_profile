import React from "react";
import { MDBJumbotron, MDBContainer } from "mdbreact";

const JumbotronPage = () => {
  return (
    <MDBJumbotron fluid className='footer'>
      <MDBContainer>
        
        <div>
        <p className="lead">Malachi McCormick</p>
        <p className="lead">Atlanta, GA</p>
        <p className="lead">404.451.5929</p>
        </div>
          <div className='social'>
          < a href = 'https://www.linkedin.com/in/malachi-mccormick/' >
          <i class = "fab fa-linkedin"  style={{background:'white', color:'blue',fontSize:'2em'}} />
          </a>
          < a href='https://github.com/malachimccormick'>
          <i class = "fab fa-github" style={{color:'purple',paddingLeft:'10px',fontSize:'2em', marginRight:'10px'}} />
          </a>
          </div>
      </MDBContainer>
    </MDBJumbotron>
  )
}

export default JumbotronPage;