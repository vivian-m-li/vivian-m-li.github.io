import React from "react";
import { Button } from "react-materialize";

const Footer = () => {
  return (
    <div className="footer-div">
      <footer className="footer">
        <div class="divider"></div>
        <div className="contact">
          <p>Let's get in touch!</p>
          <a href="mailto:vivian.li@colorado.edu">
            <Button
              floating
              large
              waves="light"
              icon={<i className="material-icons">email</i>}
            />
          </a>
        </div>
        <p className="copy">&copy; 2025 Vivian Li</p>
      </footer>
    </div>
  );
};

export default Footer;
