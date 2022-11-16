import { Fragment } from "react";
import avatar from "../../assests/avataaars.svg";

export default function Home() {
  return (
    <Fragment>
      <div className="vh-100 d-flex flex-column justify-content-center align-items-center home">
        <img src={avatar} alt=""></img>
        <h2 className=" text-white fw-bold mt-4">START REACT</h2>
        <div className="underline">
          <i className="fa-solid fa-star text-white fs-2"></i>
        </div>
      </div>
    </Fragment>
  );
}
