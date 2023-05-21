import * as React from "react";
 
import Navbar from "../Navbar";
import { useState, useRef } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import passengerContext from "../../context/travelContext/travel.js/travelContext";
import { useEffect } from "react";
import Navbar2 from "../Navbar2";
import { Navigate, useNavigate } from "react-router-dom";
import nodata from "../images/nodata.png";
import Dashbordnewnav from "../Dashbordnewnav";

export default function OutlinedCard() {
  const context = useContext(passengerContext);
  const { passenger, deleteTicket, editTicket } = context;
  const [passengers, setpassengrs] = useState([]);

  const [credentials, setCredentials] = useState({
    email: localStorage.getItem("email"),
  });

  const navigate = useNavigate();
  const [traveller, setTraveller] = useState([]);
  // const context = useContext(passengerContext);
  // const { passengers, setpassengrs, bookTicket, getalltickets } = context;

  useEffect(() => {
    // alert("ghj");
    getalltickets();
  }, []);


  const ref = useRef(null);
  const getalltickets = async () => {
    const { email } = credentials;
    console.log("dcfvghbjn");

    const responce = await fetch(
      "http://localhost:5000/api/passenger/fetchpassenger",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authtoken:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQzYTUzZGM3NjhjODAyNWM3NDY4YjU3In0sImlhdCI6MTY4MjU5NDY2NH0.VdL18xeujgNH70QbFs5dOcdQ5fbLAjKT_GWj0WCFNWo",
        },

        body: JSON.stringify({
          email: credentials.email,
        }),
      }
    );
    const json = await responce.json();
    setTraveller(json.passengeremail);
    console.log(json);

    if (!json.success) {
      alert("cfvgbh");
    }
  };
  return (
    <>
      {/* <Navbar /> */}
      {/* <Navbar2 /> */}

      <Dashbordnewnav />
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        ref={ref}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Update the Date
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Email address
                  </label>
                  <input
                    type="date"
                    class="form-control"
                    id="updateddate"
                    name="updateddate"
                    aria-describedby="emailHelp"
                  />
                </div>

                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h1 className="bookedTickets">Your Journey Details</h1>
        <div className="row">
          {traveller &&
            traveller.map((value) => {
              return (
                <>
                  <div className="col-lg-4 my-2">
                    <div class="card">
                      <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                          <h2 class="accordion-header">
                            <button
                              class="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseOne"
                              aria-expanded="true"
                              aria-controls="collapseOne"
                            >
                              {/* <div className="row"> */}
                              <div className="col-lg-6">{value.passname}</div>
                              <div className="favicon">
                                <EditIcon
                                   data-bs-toggle="modal"
                                   data-bs-target="#exampleModal"
                                  onClick={() => {
                                    editTicket(value._id, value.travellingdate);
                                  }}
                                  className="faviconbutton"
                                />
                                <DeleteIcon
                                  className="faviconbutton"
                                  onClick={() => {
                                    const delet = prompt("Are you sure? Enter yes ");
                                    console.log(delet);
                                    if (delet == "yes") {
                                      console.log("dele");
                                      deleteTicket(value._id);
                                    }
                                  }}
                                  ticket={value}
                                />
                              </div>
                            </button>
                          </h2>
                          <div
                            id="collapseOne"
                            class="accordion-collapse collapse show"
                            data-bs-parent="#accordionExample"
                          >
                            <div class="accordion-body">
                              <strong>{value.passemail}</strong>
                              <hr />
                              <p>source: {value.source}</p>
                              <p>Destination: {value.destination}</p>
                              <p>Aadhar number: {value.passaadhar}</p>
                              <p>Contact number: {value.passcontact}</p>
                              <p>Gender: {value.passgender}</p>
                              <p>Journertype: {value.journeytype}</p>
                              <p>Vehicle Number: {value.number}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
}
