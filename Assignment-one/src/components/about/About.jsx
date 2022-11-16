import React, { Fragment } from "react";
export default function About() {
  return (
    <Fragment>
      <div className=" d-flex flex-column justify-content-center align-items-center about py-5">
        <h2 className=" text-white fw-bold mt-4">About</h2>
        <div className="underline">
          <i className="fa-solid fa-star text-white fs-2"></i>
        </div>
        <div className="row  gx-5 py-5">
          <div className="col-md-6">
            <p className="fs-5  text-white lh-2 ">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
          <div className="col-md-6">
            <p className="fs-5  text-white lh-2 ">
              You can create your own custom avatar for the masthead, change the
              icon in the dividers, and add your email address to the contact
              form to make it fully functional!
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
