import React from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Passengerdetails from "./Passengerdetails";
import Sidebar from "../Sidebar";
import Validation from "../Validation";
import { useNavigate } from "react-router-dom";


function PassengerInfo() {
  const navigate = useNavigate()
  if(!localStorage.getItem("company"))
  {
    // navigate("/flight")
    alert("Please fill the details first", window.location.href="/flight")
  }
  return (
    <>
      <Sidebar />
      <div className="conatiner">
        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-7">
            <Passengerdetails />
          </div>
          <div className="col-lg-2"></div>
        </div>
      </div>
    </>
  );
}

export default PassengerInfo;
