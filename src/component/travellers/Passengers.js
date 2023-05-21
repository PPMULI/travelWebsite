import React from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Sidebar from "../Sidebar";
import Validation from "../Validation";
import { useNavigate } from "react-router-dom";
// import Trainpassengerdetails from "./Trainpassengerdetails";
import Passengersdetails from "./Passengersdetails";


function Passengers() {
  const navigate = useNavigate()
  return (
    <>
      <Sidebar />
      <div className="conatiner">
        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-7">
            <Passengersdetails />
          </div>
          <div className="col-lg-2"></div>
        </div>
      </div>
    </>
  );
}

export default Passengers;
