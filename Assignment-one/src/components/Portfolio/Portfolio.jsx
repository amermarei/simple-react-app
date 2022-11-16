import React, { Fragment } from "react";
import cabin from "../../assests/cabin.png";
import cake from "../../assests/cake.png";
import circus from "../../assests/circus.png";
import game from "../../assests/game.png";
import safe from "../../assests/safe.png";
import cabsubmarine from "../../assests/submarine.png";
export default function Portfolio() {
  let imgPath = [cabin, cake, circus, game, safe, cabsubmarine];
  return (
    <Fragment>
      <div className="d-flex flex-column justify-content-center align-items-center portfolio py-5">
        <h2 className="fw-bold mt-4 text-uppercase" id="imgName">
          Portfolio
        </h2>
        <div className="underline">
          <i className="fa-solid fa-star fs-2"></i>
        </div>
        <div className="container">
          <div className="row py-5 g-4">
            {imgPath.map((e, index) => {
              return (
                <Fragment key={index}>
                  <div className="col-md-6 col-lg-4">
                    <div className="content">
                      <img
                        src={e}
                        className="w-100 rounded shadow-lg"
                        alt=""
                      ></img>
                    </div>
                  </div>
                </Fragment>
              );
            })}
            ;
          </div>
        </div>
      </div>
    </Fragment>
  );
}
