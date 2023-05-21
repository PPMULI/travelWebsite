import React, { useEffect, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import "./Home.css";

import Dashbordnewnav from "../dashboardnew/Dashbordnewnav";
import happycouple from "../component/AdminPannel/images/happycouple.jpg";
import OurPackages from "../dashboardnew/OurPackages";
import { useNavigate } from "react-router-dom";

function Home(props) {
  const navigate = useNavigate();
  const myGreeting = () => {
    localStorage.clear();
    alert("Session timeout");
  };
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
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque id
              ipsa dignissimos corrupti voluptatem illum blanditiis delectus!
              Culpa facere saepe, dolores animi consequuntur pariatur similique
              magni sequi dolorum vero amet!
            </p>
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

        <hr />
        <hr />
        <h1 className="ourpackages">Our packages</h1>
        <div className="row">
          <OurPackages />
        </div>
      </div>
    </>
  );
}

export default Home;
