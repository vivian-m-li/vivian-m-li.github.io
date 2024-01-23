import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="nav">
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/resume">Resume</Link></li>
        <li><Link to="/">Vivian Li</Link></li>
        <li><Link to="/research">Research</Link></li>
        <li><Link to="/projects">Projects</Link></li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Nav;