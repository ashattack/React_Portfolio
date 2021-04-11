import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function Contact() {
  return (


    <Container style={{ marginTop: 30 }}>
      <div className="container h-100">
        <div className="row h-100 justify-content-center align-items-center">
          <form className="col-10 col-md-8 col-lg-6">
            <h1> Contact</h1>
            <hr />
            <div className="form-group">
              <h6>Find me on linkedIN:</h6>
              <p>
                <a href="https://www.linkedin.com/in/ashlyn-h-55215291/" target="_blank" ><i className="fab fa-linkedin-in"></i></a>

              </p>
            </div>
            <div className="form-group">
              <h6>Find me on Github:</h6>
              <p>
                <p>
                  <a href="https://github.com/ashattack" target="_blank"><i className="fab fa-github"></i></a>
                </p>
              </p>
            </div>
            <div className="form-group">
              <h6>View Resume</h6>
              <p>
                <a href="https://docs.google.com/document/d/1FlxDPtqW6SUYuvEE_Ktd1lvnXL1vC0Fbb5dPGtAcOM0/edit?usp=sharing" target="_blank"><i className="fas fa-file"></i>

                </a>
              </p>
            </div>
            <div className="form-group">
              <h6>Email Me</h6>
              <p>
                <a href="mailto:h.ashlyn625@gmail.com" target="_blank"><i className="far fa-envelope"></i>

                </a>
              </p>
            </div>



          </form>
        </div>
      </div>
    </Container>

  );
}

export default Contact;
