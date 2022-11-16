import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark py-4">
        <div className="container">
          <Link className="navbar-brand fw-bolder fs-3" to="">
            START REACT
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item me-4 fw-bold fs-6 text-uppercase text-white">
                <Link className="nav-link" aria-current="page" to="portfolio">
                  Portfolio
                </Link>
              </li>
              <li className="nav-item me-4 fw-bold fs-6 text-uppercase text-white">
                <Link className="nav-link" to="about">
                  about
                </Link>
              </li>
              <li className="nav-item me-4 fw-bold fs-6 text-uppercase text-white">
                <Link className="nav-link" to="contacts">
                  contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
