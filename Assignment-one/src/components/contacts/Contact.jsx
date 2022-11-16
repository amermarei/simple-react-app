import React, { Fragment } from "react";

export default function Contact() {
  return (
    <Fragment>
      <div className="d-flex flex-column justify-content-center align-items-center contact py-5">
        <h2 className="fw-bold mt-4 text-uppercase">Contacts</h2>
        <div className="underline">
          <i className="fa-solid fa-star fs-2"></i>
        </div>
        <div className="container w-50 py-5">
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Name"
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Email"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Phone"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
            />
          </div>
          <button type="submit" className="btn mt-4">
            Send
          </button>
        </div>
      </div>
    </Fragment>
  );
}
