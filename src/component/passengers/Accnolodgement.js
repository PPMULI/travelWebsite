import React from "react";
import { useNavigate } from "react-router-dom";
import ent from "../images/entry_denied.jpg";
import { colors } from "@mui/material";

function Accnolodgement() {
  const navigate = useNavigate();

  const passengeraccnolodgement = document.getElementById("passengeraccnolodgement");
  if (!localStorage.getItem("source") || !localStorage.getItem("destination")) {
    alert("Please refer My bookings", window.location.href = "/mybookings")
    // passengeraccnolodgement.style.background = "black"
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-6">
            <h1 className="passengeraccnolodgementheading">
              Your Ticket was book successfully
            </h1>
            <div id="passengeraccnolodgement">
              Your Credentials
              <ul>
                <li>Source: {localStorage.getItem("source")}</li>
                <li>Destination: {localStorage.getItem("destination")}</li>
                <li>
                  Travelling Date: {localStorage.getItem("travellingdate")}
                </li>
                <li>Booking email: {localStorage.getItem("email")} </li>
              </ul>
              <p className="note">Note: BOOKING EMAIL IS MAY OR MAY NOT BE SAME AS PASSENGER EMAIL</p>
              <p>For more details, refer myBooking</p>
              <button
                type="submit"
                class="btn btn-primary"
                onClick={() => {
                  localStorage.removeItem("source")
                  localStorage.removeItem("destination")
                  localStorage.removeItem("travellingdate")
                  localStorage.removeItem("journeytype")
                  localStorage.removeItem("departuretime")
                  localStorage.removeItem("destinationtime")
                  localStorage.removeItem("number")
                  localStorage.removeItem("company")
                  localStorage.removeItem("fare")
                  navigate("/mybookings");
                }}
              >
                My Bookings
              </button>
            </div>
          </div>
          <div className="col-lg-3"></div>
        </div>
      </div>
    </>
  );
}

export default Accnolodgement;
