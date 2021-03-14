import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import "./About.css";

function About() {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid">
        <div className="container title">
          <h1 className="display-4">Ashlyn Hicks</h1>

        </div>
      </div>
      <img className="circlepic" src="/images/Circle_Pic.png" alt="Cartoon Selfie"></img>
      <Container style={{ marginTop: 30 }}>
        
      <div className="container h-100" id="card">
        <div className="row no-gutters box">

            <div className="col-md-12">
                <div className="card-body">

                    <p className="card-text"> Hello! My name is Ashlyn, I'm 24 years old, born in Baltimore and
                        currently residing in sunny Florida with my cat! I am an aspiring Web-Developer, I picked up an
                        interest with computers at
                        a young age and enjoy building with new technolgies. I completed a bootcamp for full-stack web
                        development and am
                        looking to pursue a career in such.

                    </p>

                </div>
            </div>
        </div>

    </div>
    <div className="skills">
        <div className="skill-bars">
            <div className="bar">
                <div className="info">
                    <span>HTML</span>
                </div>
                <div className="progress-line html">
                    <span></span>
                </div>
            </div>
            <div className="bar">
                <div className="info">
                    <span>CSS</span>
                </div>
                <div className="progress-line css">
                    <span></span>
                </div>
            </div>
            <div className="bar">
                <div className="info">
                    <span>Javascript</span>
                </div>
                <div className="progress-line javascript">
                    <span></span>
                </div>
            </div>
            <div className="bar">
                <div className="info">
                    <span>jQuery</span>
                </div>
                <div className="progress-line jQuery">
                    <span></span>
                </div>
            </div>
            <div className="bar">
                <div className="info">
                    <span>Node</span>
                </div>
                <div className="progress-line node">
                    <span></span>
                </div>
            </div>
        </div>
    </div>

      </Container>
    </div>
  );
}

export default About;
