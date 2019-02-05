import React from "react";
import {  MDBRow, MDBCol, MDBIcon } from "mdbreact";


const FeaturesPage = () => {
  return (
    <section className="my-5">
        <h2 className="h1-responsive font-weight-bold text-center my-5" style={{marginTop:'-5px',textDecoration:'underline'}}>
          Full-Stack Web Developer
        </h2>
        <p style={{font:'1.55em bolder'}}className="lead grey-text w-responsive text-center mx-auto mb-5">
          Malachi McCormick is a full-stack (MERN) developer that uses Agile methods to solve
          Web development issues in the Greater Atlanta Georgia area. 
        </p>
        <hr style={{width:'98%',marginBottom:'5%',marginTop:'-1px',marginLeft:'20px'}}></hr>
        <MDBRow>
          <MDBCol lg="5" className="text-center text-lg-left">
            <img
              className="img-fluid"
              src="https://mdbootstrap.com/img/Photos/Others/screens-section.jpg" alt=""/>
          </MDBCol>
          <MDBCol lg="7">
            <MDBRow className="mb-3">
              <MDBCol size="1">
                <MDBIcon icon="share" size="lg" className="indigo-text" />
              </MDBCol>
              <MDBCol xl="10" md="11" size="10" className="skills" >
                <h5 className="font-weight-bold mb-3">JavaScript</h5>
                <p className="grey-text">
                  I posses a great profeciency in JavaScript. Often using functions, animations
                  and other methods to develop fully functional Web sites. Although, as any great
                  developer, I am constantly learning. 
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="1">
                <MDBIcon icon="share" size="lg" className="indigo-text" />
              </MDBCol>
              <MDBCol xl="10" md="11" size="10" className="skills">
                <h5 className="font-weight-bold mb-3">Mern Stack</h5>
                <p className="grey-text">
                  My current stack consists of MongoDB, Express, React and Node.js. By combining the
                  elements of the MERN stack I am able to prenet clients withe customized Web sites
                  that allows them to reach out to the world effectivly.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="1">
                <MDBIcon icon="share" size="lg" className="indigo-text" />
              </MDBCol>
              <MDBCol xl="10" md="11" size="10" className="skills">
                <h5 className="font-weight-bold mb-3">HTML/CSS</h5>
                <p className="grey-text">
                  Front-end development comes second nature to me. I am able to structure a Web application
                  to the clients exact needs. I combine all of my skills to deliver a product that I am proud 
                  of and I know that the client will love.
                </p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </section>
  );
}

export default FeaturesPage;