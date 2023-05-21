import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BookTicket() {
  const [credentials, setCredentials] = useState({
    source: "",
    destination: "",
    journeytype: window.location.pathname.slice(1),
  });

  const [traveller, setTraveller] = useState([]);

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const source1 = document.getElementById("source");
    const date1 = document.getElementById("date");
    const destination1 = document.getElementById("destination");
    const travellingclass1 = document.getElementById("travellingclass");

    // success function
    function showSuccess(input) {
      const formControl = input.parentElement;
      formControl.className = "form-control success";
 
    }

    // Error function
    function showError(input, message) {
      const formControl = input.parentElement;
      formControl.className = "form-control error";
       
    }

    // function for getting the input
    function getInput(input) {
      console.log(input);
      return input.id.charAt(0).toUpperCase() + input.id.slice(1);
    }

    let error = 0;
    let succ = 0;
    // function for checking the length of each field
    function checkLength(input) {
      // console.log(input);
      if (input.value.length == 0 || input.value == "null") {
        error = 1;
        showError(input, `${getInput(input)} should not be null`);
      } else {
        succ = 1;
        showSuccess(input);
      }
    }

    // function call
    checkLength(source1);
    checkLength(destination1);

    const { source, destination, journeytype } = credentials;
    console.log(credentials);
    if (succ == 1 && error == 0) {
      const responce = await fetch(
        "http://localhost:5000/api/admintravel/getvehicle",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            source: credentials.source,
            destination: credentials.destination,
            date: credentials.date,
            journeytype: credentials.journeytype,
          }),
        }
      );
      console.log(journeytype);
      const json = await responce.json();
      setTraveller(json.traveller);
      if (json.success) {
      } else {
        alert("No Traveller  available with given credentials");
      }
    }
  };

  const onChange = (e) => {
    e.preventDefault();
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className="row">
          {/* <small></small> */}
          <div className="col-lg-3">
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Source
              </label>
              <div className="card">
                <div className="card-body">
                  <input
                    type="text"
                    name="source"
                    className="form-control source"
                    onChange={onChange}
                    id="source"
                    aria-describedby="emailHelp"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Destination
              </label>
              <div className="card">
                <div className="card-body">
                  <input
                    type="text"
                    onChange={onChange}
                    name="destination"
                    className="form-control destination"
                    id="destination"
                    aria-describedby="emailHelp"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Journey Date
              </label>
              <div className="card">
                <div className="card-body">
                  <input
                    type="date"
                    className="form-control date"
                    id="date"
                    onChange={onChange}
                    name="date"
                    // min
                    aria-describedby="emailHelp"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Journey Class
              </label>
              <div className="card">
                <div className="card-body">
                  <select
                    name="travellingclass"
                    className="travellingclass"
                    id="travellingclass"
                    required
                    onChange={onChange}
                  >
                    {/* <option value="null">....</option> */}
                    <option value="ac">Ac</option>
                    <option value="sleeper">Sleeper</option>
                    <option value="genral">Genral</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <button type="submit" id="flightbutton" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>

      <div className="container">
        <div className="row">
        {traveller &&
            traveller.map((value) => {
              console.log(value);
              return (
                <div className="col-lg-3 my-2">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">Departure: {value.source}</h5>
                      <h3 class="card-subtitle mb-2 text-body-secondary">
                        Arrival: {value.destination}
                      </h3>
                      <h6>fare: {value.fare} </h6>
                      <h6>DepartureTime: {value.sourcetime}</h6>{" "}
                      <h6>{"-->"}</h6>
                      <h6>ArrivalTime: {value.destinationtime}</h6>
                      <h6>Train number: {value.number}</h6>
                      <h6>Company: {value.company}</h6>
                    </div>
                    <button
                      type="submit"
                      class="btn btn-primary flightbookingbutton"
                      onClick={() => {
                        {
                          localStorage.setItem("source", value.source);
                        }
                        localStorage.setItem("destination", value.destination);
                        localStorage.setItem("company", value.company)
                        if(localStorage.getItem("email").endsWith("tcs.com"))
                        {
                          localStorage.setItem("fare", value.fare*0.9);
                        }
                        else
                        {
                          localStorage.setItem("fare", value.fare);
                        }
                        localStorage.setItem("journeytype", value.journeytype);
                        localStorage.setItem(
                          "travellingdate",
                          credentials.date
                        );
                        localStorage.setItem("number", value.number);
                        localStorage.setItem(
                          "departuretime",
                          value.departuretime
                        );
                        localStorage.setItem(
                          "destinationtime",
                          value.arrivaltime
                        );
                        navigate("/passengerdetails");
                      }}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default BookTicket;
