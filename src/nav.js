import React from "react";
import { Outlet, Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <div className="nav-container">
        <div className="nav-left">
          <Link className="link" to="/">
            Vivian Li
          </Link>
        </div>
        <div className="nav-right">
          <Link className="link" to="/about">
            About
          </Link>
          <span className="divider">|</span>
          <Link className="link" to="/research">
            Research
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Nav;
