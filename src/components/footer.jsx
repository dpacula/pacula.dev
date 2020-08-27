import React from 'react';
import { NavLink } from 'react-router-dom'

const year = new Date().getFullYear()

function Footer() {
  return (
  <footer>
    <div class="f-container">
      <h1>Let's Talk</h1>
      <p>Always open to a conversation about what I do, or lorem ipsum footer text talking so much! talk talk talk.</p>
      <p>You can also reach me around the web: Github, Twitter, Instagram, Email.</p>
    </div>
    <div class="copyright">
      <p>Copyright {year} | Derek Pacula</p>
    </div>
    <nav>
      <NavLink activeClassName='is-active' to="/">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-home-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z"/>
          <polyline points="5 12 3 12 12 3 21 12 19 12" />
          <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
          <rect x="10" y="12" width="4" height="4" />
        </svg>
        Home
      </NavLink>
      <NavLink activeClassName='is-active' to="/about">About</NavLink>
      <NavLink activeClassName='is-active' to="/projects">Projects</NavLink>
      <NavLink activeClassName='is-active' to="/resume">Resume</NavLink>
    </nav>
  </footer>
  );
}

export default Footer;