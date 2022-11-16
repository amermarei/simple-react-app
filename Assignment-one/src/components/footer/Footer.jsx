import React, { Fragment } from "react";

export default function Footer() {
  return (
    <Fragment>
      <div className="text-center text-white bg-black w-100 footer-content position-relative">
        <div className="container">
          <div className="row py-5">
            <div className="col-md-4 py-3 ">
              <h4 className="fw-bold mb-4">LOCATION</h4>
              <p className="lead w-75 mx-auto">
                2215 John Daniel Drive Clark, MO 65243
              </p>
            </div>
            <div className="col-md-4 py-3">
              <h4 className="fw-bold mb-4">AROUND THE WEB</h4>
              <div className="social d-flex  justify-content-center">
                <div className="icon">
                  <i className="fa-brands fa-facebook-f"></i>
                </div>
                <div className="icon">
                  <i className="fa-brands fa-twitter"></i>
                </div>
                <div className="icon">
                  <i className="fa-brands fa-linkedin-in"></i>
                </div>
                <div className="icon">
                  <i className="fa-solid fa-basketball"></i>
                </div>
              </div>
            </div>
            <div className="col-md-4 py-3">
              <h4 className="fw-bold mb-4">ABOUT FREELANCER</h4>
              <p className="lead">
                Freelance is a free to use, MIT licensed Bootstrap theme created
                by Amer
              </p>
            </div>
          </div>
        </div>
        <div className="linsece text-center py-3 fs-6">
          Copyright © Your Website 2022
        </div>
      </div>
    </Fragment>
  );
}
