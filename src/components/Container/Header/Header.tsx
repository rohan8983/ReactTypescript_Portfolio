import * as React from "react";

export default function Header() {
  return (
    <>
      {/* Mobile nav toggle button  */}
      <button type="button" className="mobile-nav-toggle d-xl-none">
        <i className="icofont-navigation-menu"></i>
      </button>

      {/* Header  */}
      <header id="header" className="d-flex flex-column justify-content-center">
        <nav className="nav-menu">
          <ul>
            <li className="active">
              <a href="#hero">
                <i className="bx bx-home"></i> <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#about">
                <i className="bx bx-user"></i> <span>About</span>
              </a>
            </li>
            <li>
              <a href="#resume">
                <i className="bx bx-file-blank"></i> <span>Resume</span>
              </a>
            </li>
            <li>
              <a href="#contact">
                <i className="bx bx-envelope"></i> <span>Contact</span>
              </a>
            </li>
            <li>
              <a href="./assets/resume.pdf" download>
                <i className="bx bx-download"></i> <span>Download Resume</span>
              </a>
            </li>
          </ul>
        </nav>
        {/* End nav-menu */}
      </header>
      {/* End Header */}
    </>
  );
}
