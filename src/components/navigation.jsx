import React from "react";
import { NavLink } from "react-router-dom";
import ColorToggle from "./colortoggle";

function Navigation() {
  return (
    <header>
      <nav>
        <NavLink
          className={(navData) => (navData.isActive ? "is-active" : "link")}
          to="/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-home-2"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <polyline points="5 12 3 12 12 3 21 12 19 12" />
            <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
            <rect x="10" y="12" width="4" height="4" />
          </svg>
          Home
        </NavLink>
        <NavLink
          className={(navData) => (navData.isActive ? "is-active" : "link")}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={(navData) => (navData.isActive ? "is-active" : "link")}
          to="/projects"
        >
          Projects
        </NavLink>
        <NavLink
          className={(navData) => (navData.isActive ? "is-active" : "link")}
          to="/resume"
        >
          Resume
        </NavLink>
      </nav>
      <div className="wave">
        <div className="wave-absolute">
          <svg
            className="block m-auto blob-rotate h-64 text-fill-secondary fill-current"
            viewBox="0 0 715 693"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M359.408 0.499261C434.083 0.69572 509.059 15.4608 570.136 58.4268C631.828 101.825 675.247 166.543 697.772 238.528C720.119 309.946 720.46 387.141 695.015 457.515C670.121 526.365 618.875 581.064 558.794 622.901C499.694 664.055 431.329 687.499 359.408 691.212C284.339 695.087 205.553 688.115 144.481 644.291C83.2293 600.338 54.1113 526.936 30.6392 455.293C7.11277 383.484 -10.9409 307.559 10.4113 235.074C32.1072 161.421 84.1477 100.148 147.872 57.3159C209.988 15.5657 284.566 0.302364 359.408 0.499261Z"></path>
          </svg>
        </div>
      </div>
      <ColorToggle />
    </header>
  );
}

export default Navigation;
