import React from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark" id="navbar">
      <a class="navbar-brand" href="https://v3ii8.csb.app/">
        HAROLD JENNETT
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link class="nav-link" to="/aboutme">
              About Me
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/intro">
              Intro
            </Link>
          </li>
          <li class="nav-item">
            <HashLink class="nav-link" to="/intro#hate">
              I Hate React
            </HashLink>
          </li>
          {/* <li class="nav-item">
            <Link class="nav-link" to="">
              Portfolio
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="aboutme">
              Contact Me
            </Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}

export default Header;
