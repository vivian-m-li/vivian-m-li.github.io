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
    <div className="about-page">
      <div className="text-container">
        <p>
          <span className="name">Hi, I'm Vivian.</span> I'm a 2nd year Ph.D.
          student at the University of Colorado Boulder. I'm advised by{" "}
          <span
            className="link"
            onClick={() => openExternalLink("https://aaronclauset.github.io/")}
          >
            Aaron Clauset
          </span>{" "}
          in the Department of Computer Science and{" "}
          <span
            className="link"
            onClick={() => openExternalLink("https://www.lauraedee.com/")}
          >
            Laura Dee
          </span>{" "}
          in the Department of Ecology and Evolutionary Biology. For my
          research, I model ecological networks and species interactions. I'm
          interested in predicting ecosystem response to disturbances, such as
          changes induced by climate change or human intervention. I also study
          relationships between species, observing how species interact for
          feeding and non-feeding purposes. I love using math and computation to
          understand different ecosystems, and I'm interested in pursuing work
          in ecological modeling & species conservation.
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
            My first trip out to our study site in the rocky intertidal zone in
            the Gulf of Maine!
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
          school, I took a gap year and hiked the Pacific Crest Trail.
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
