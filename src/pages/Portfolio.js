import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function Portfolio() {
  return (
    <div>
    <h1 className="display-4 text-center">Ash's Portfolio</h1>


    <div className="container h-100">
      <div className="row">
        <figure className="col-xs-6 col-md-6 col-lg-6">
          <h2>Eat-Da-Burger</h2>
          <img className="img-thumbnail" src="./images/EatBurger.png" alt="Screenshot of deployed website" />
          <a href="https://github.com/ashattack/Eat-Da-Burger" target="_blank"><button type="button"
              className="btn btn-primary">Github</button></a>
          <a href="https://eat-da-burgel.herokuapp.com/" target="_blank"><button type="button"
              className="btn btn-primary">Website</button></a>
  
        </figure>
  
        <figure className="col-xs-6 col-md-6 col-lg-6" id="flip">
          <h2> BattleNodes Video Game Database</h2>
          <img className="img-thumbnail" src="./images/Battlenodes.png" alt="Screenshot of deployed website" />
          <a href="https://github.com/ashattack/whos-your-data" target="_blank"><button type="button"
              className="btn btn-primary">Github</button></a>
          <a href="https://protected-beach-35913.herokuapp.com/" target="_blank"><button type="button"
              className="btn btn-primary">Website</button></a>
        </figure>
  
  
        <figure className="col-xs-6 col-md-6 col-lg-6">
          <h2>NoteTaker</h2>
          <img className="img-thumbnail" src="./images/NoteTaker.png" alt="Screenshot of deployed website" />
          <a href="https://github.com/ashattack/Note_Taker" target="_blank"><button type="button"
              className="btn btn-primary">Github</button></a>
          <a href="https://ancient-depths-17492.herokuapp.com/" target="_blank"><button type="button"
              className="btn btn-primary">Website</button></a>
        </figure>
  
        <figure className="col-xs-6 col-md-6 col-lg-6">
          <h2>Avatar The Last Airbender Quiz</h2>
          <img className="img-thumbnail" src="./images/Quiz.png" alt="Screenshot of deployed website" />
          <a href="https://github.com/ashattack/Code-Quiz" target="_blank"><button type="button"
              className="btn btn-primary">Github</button></a>
          <a href="https://ashattack.github.io/Code-Quiz/" target="_blank"><button type="button"
              className="btn btn-primary">Website</button></a>
        </figure>
  
        <figure className="col-xs-6 col-md-6 col-lg-6">
          <h2>Password Generator</h2>
          <img className="img-thumbnail" src="./images/Password.png" alt="Screenshot of deployed website" />
          <a href="https://github.com/ashattack/Password-Generator" target="_blank"><button type="button"
              className="btn btn-primary">Github</button></a>
          <a href="https://ashattack.github.io/Password-Generator/" target="_blank"><button type="button"
              className="btn btn-primary">Website</button></a>
  
        </figure>
  
  
  
  
      </div>
    </div>
    </div>
  );
}

export default Portfolio;
