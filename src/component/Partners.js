import React from "react";
import tata from "./images/tata.jpg";
import indigo from "./images/indigo.jpg";
import airindia from "./images/airindia.jpg";
function Partners() {
  return (
    <>
      <div className="col-lg-4">
        <div class="card">
          <img src={tata} class="card-img-top partners" alt="..." />
        </div>
      </div>

      <div className="col-lg-4">
        <div class="card">
          <img src={airindia} class="card-img-top partners" alt="..." />
        </div>
      </div>

      <div className="col-lg-4">
        <div class="card">
          <img src={indigo} class="card-img-top partners" alt="..." />
        </div>
      </div>
    </>
  );
}

export default Partners;
