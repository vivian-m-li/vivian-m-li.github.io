import React from "react";
import { Link } from "react-router-dom";
import AllenIslandImg from "../images/allen_island.jpg";
import PctImg from "../images/pct.jpg";
import HikeImg from "../images/hike.jpg";
import ClimbImg from "../images/climb.jpg";
import CanyonImg from "../images/canyon.jpg";
import JtreeImg from "../images/jtree.jpg";

const openExternalLink = (link) => {
  window.open(link, "_blank");
};

const About = () => {
  return (
    <div className="about-page page-content">
      <div className="text-container">
        <p>
          <span className="name">Hi, I'm Vivian.</span> I'm a 3rd year Ph.D.
          student at the University of Colorado Boulder. I'm advised by{" "}
          <span
            className="link"
            onClick={() => openExternalLink("https://aaronclauset.github.io/")}
          >
            Dr. Aaron Clauset
          </span>{" "}
          in the Department of Computer Science and{" "}
          <span
            className="link"
            onClick={() => openExternalLink("https://www.lauraedee.com/")}
          >
            Dr. Laura Dee
          </span>{" "}
          in the Department of Ecology and Evolutionary Biology. I'm interested
          in how mathematical and computational tools can explain the complexity
          of biological systems, with a focus on ecosystem dynamics. I use
          mathematical models, machine learning, and network science to study
          species interactions and the structure of ecological communities.
          Furthermore, I develop methods to reduce model unceertainty and
          translate these models into practical ecosystem management strategies.
          My research sits at the intersection of Ecology and Computer Science,
          and{" "}
          <b>
            I'm interested in pursuing work related to ecological/environmental
            modeling & conservation.
          </b>
        </p>
        <p>
          I was an NSF Research Trainee with the{" "}
          <span
            className="link"
            onClick={() =>
              openExternalLink(
                "https://www.colorado.edu/certificate/iqbiology/"
              )
            }
          >
            Interdisciplinary Quantitative Biology
          </span>{" "}
          Program through CU Boulder's{" "}
          <span
            className="link"
            onClick={() =>
              openExternalLink("https://www.colorado.edu/biofrontiers/")
            }
          >
            BioFrontiers Institute
          </span>{" "}
          from 2023-2024. The program trains interdisciplinary scientists to
          collaborate effectively across different disciplines. You can read
          more about my lab rotations and projects{" "}
          <Link className="link" to="/research">
            here
          </Link>
          !
        </p>
        <div className="image-container">
          <div className="text-right">Allen Island, ME</div>
          <img
            className="responsive-img"
            src={AllenIslandImg}
            alt="Allen Island, ME"
          />
          <div>
            My first trip out to our rocky intertidal study site in the Gulf of
            Maine
          </div>
        </div>
        <p>
          I received my bachelor's degree in Information Science & French at
          Cornell University (see some fun projects I did{" "}
          <Link className="link" to="/projects">
            here
          </Link>
          !). Afterwards, I worked for{" "}
          <span
            className="link"
            onClick={() => openExternalLink("https://uncountable.com/")}
          >
            Uncountable
          </span>
          , where I helped create a web platform to improve the R&D process for
          diverse labs with focuses such as material science, chemical
          engineering, and biotechnology. My time in industry taught me how to
          be an efficient programmer, a user-centered designer, and an excellent
          team player.
        </p>
        <p>
          In my free time, I enjoy soaking up the Colorado sunshine through
          backpacking, climbing, and canyoneering. Before starting graduate
          school, I took a gap year and hiked the Pacific Crest Trail, a 2,650
          mile trail from Mexico to Canada.
        </p>
        <div className="photo-grid">
          <div className="photo-container">
            <img
              src={PctImg}
              alt="Northen Terminus of the Pacific Crest Trail"
              className="photo"
            />
          </div>
          <div className="photo-container horizontal">
            <img src={HikeImg} alt="Lost Coast Trail" class="photo" />
          </div>
          <div className="photo-container">
            <img src={ClimbImg} alt="Joshua Tree National Park" class="photo" />
          </div>
          <div className="photo-container">
            <img src={CanyonImg} alt="North Wash" class="photo" />
          </div>
          <div className="photo-container">
            <img src={JtreeImg} alt="Joshua Tree National Park" class="photo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
