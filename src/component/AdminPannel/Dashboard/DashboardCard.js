import React from "react";
import pritam from "../images/pritam.jpg" 

function DashboardCard() {
  return (
    <>
      {/* <div className="dashboardcardbody"> */}
        <div className="card dashboardcard">
          <img src={pritam} className="card-img-top pritamphoto" alt="..." />
          <div className="card-body dashboardcardbody">
            <h5 className="card-title">PRITAM PRAVINRAO MULI</h5>
            <p className="card-text">
              <b><i><u>"Don't worry about failure; you only have to be right once."</u></i></b>
            </p>
            <a href="myprofile" className="btn btn-primary dashboardcardbutton">
              My Profile
            </a>
          </div>
        </div>
      {/* </div */}
    </>
  );
}

export default DashboardCard;
