import React from "react";
import { Button } from "react-materialize";
import HomeImage from "../images/home.jpg";
import Resume from "../uploads/resume.pdf";
import CV from "../uploads/cv.pdf";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-page page-content">
      <div className="image-container">
        <img src={HomeImage} alt="Me in Maine" />
      </div>
      <div className="text-container">
        <div>
          <div>
            <p className="title">Hi, I'm Vivian.</p>
            <ul>
              <li>
                <i class="tiny material-icons">chevron_right</i>Ph.D. student @
                University of Colorado Boulder in the Department of Computer
                Science
              </li>
              <li>
                <i class="tiny material-icons">chevron_right</i>
                Interested in modeling ecological networks and dynamics for
                decision-making under uncertainty. In support of writing open
                source code for scientists
              </li>
              <li>
                <i class="tiny material-icons">chevron_right</i>Former
                full-stack engineer @ Uncountable
              </li>
              <li>
                <i class="tiny material-icons">chevron_right</i>B.A. in
                Information Science & French @ Cornell University
              </li>
            </ul>
          </div>
          <div className="buttons">
            <Button onClick={() => window.open(Resume, "_blank")}>
              Resume
            </Button>
            <Button onClick={() => window.open(CV, "_blank")}>CV</Button>
            <Button>
              <Link className="link" to="/about">
                About
              </Link>
            </Button>
            <Button>
              <Link className="link" to="/research">
                Research
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
