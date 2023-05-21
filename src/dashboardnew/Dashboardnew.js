import React from "react";
import Dashbordnewnav from "./Dashbordnewnav";
import happycouple from "../component/AdminPannel/images/happycouple.jpg";
import OurPackages from "./OurPackages";

function Dashboardnew() {
  return (
    <>
      <Dashbordnewnav />
      <div className="container">
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-4">
            <p className="welcome">
              <b>
                <i>Welcome</i>
              </b>
            </p>
            <h1 className="welcomeoffer">
              <i>Flat 50% off on first tour</i>
            </h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque id ipsa dignissimos corrupti voluptatem illum blanditiis delectus! Culpa facere saepe, dolores animi consequuntur pariatur similique magni sequi dolorum vero amet!</p>
            <hr />
            <button type="button" id="offerbutton" class="btn btn-success">
              <i>Know more...</i>
            </button>
          </div>
          <div className="col-lg-4 happycouple">
            <img src={happycouple} className="happycoupleimage" alt="" />
          </div>
          <div className="col-lg-2"></div>
        </div>

        <hr /><hr />
        <h1 className="ourpackages">Our packages</h1>
        <div className="row">
          <OurPackages />
        </div>
      </div>
    </>
  );
}

export default Dashboardnew;
