import React from 'react';
import { NavLink } from 'react-router-dom'

function Navigation() {
  return (
  <header>
    <nav>
      <NavLink activeClassName='is-active' to="/">Home</NavLink>
      <NavLink activeClassName='is-active' to="/about">About</NavLink>
      <NavLink activeClassName='is-active' to="/projects">Projects</NavLink>
      <NavLink activeClassName='is-active' to="/resume">Resume</NavLink>
    </nav>
  </header>
  );
}

export default Navigation;