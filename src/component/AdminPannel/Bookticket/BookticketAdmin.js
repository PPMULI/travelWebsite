import React from "react";
import Sidebar from "../Dashboard/Sidebar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function BookticketAdmin() {
  const [credentials, setCredentials] = useState({
    journeytype: "",
    source: "",
    destination: "",
    number: "",
    journeyclass: "",
    departuretime: "",
    arrivaltime: "",
    company: ""
  });
  
  let navigate = useNavigate();

  useEffect(() => {
    if (
      !localStorage.getItem("authtokenadmin")
    ) {
      alert("Entry Deny! Please login first");
      navigate("/");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const source1 = document.getElementById("source");
    const date1 = document.getElementById("date");
    const destination1 = document.getElementById("destination");
    const journeyclass1 = document.getElementById("journeyclass");
    const journeytype1 = document.getElementById("journeytype");
    const number1 = document.getElementById("number");
    const departuretime1 = document.getElementById("departuretime");
    const arrivaltime1 = document.getElementById("arrivaltime");
    const fare1 = document.getElementById("fare")
    const company1 = document.getElementById("company");

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
    checkLength(departuretime1)
    checkLength(arrivaltime1)
    checkLength(fare1)
    checkLength(journeytype1)
    checkLength(journeyclass1)
    checkLength(number1)
    checkLength(journeyclass1)
    checkLength(company1)
    
    const {
      source,
      destination,
      journeytype,
      journeyclass,
      number,
      departuretime,
      arrivaltime,
      company
    } = credentials;
    console.log(credentials);
    if (succ == 1 && error == 0) {
      const responce = await fetch(
        "http://localhost:5000/api/admintravel/admintraveller",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            source: credentials.source,
            destination: credentials.destination,
            number: credentials.number,
            journeyclass: credentials.journeyclass,
            departuretime: credentials.departuretime,
            arrivaltime: credentials.arrivaltime,
            journeytype: credentials.journeytype,
            fare: credentials.fare,
            company: credentials.company
          }),
        }
      );

      const json = await responce.json();
      console.log(json);
      if (json.success) {
        alert("Congratulations! You successfully add the service");
        navigate("/dashboard");
      } else {
        alert("Vehicle with this type and number is already register");
      }
    }
  };

  const onChange = (e) => {
    e.preventDefault();
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Sidebar />
      <div className="container">
        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-6">
            <form onSubmit={handleSubmit} id="form">
              <div class="mb-3">
                <label for="cars">Choose a Journey Type: </label>
                <select
                  name="journeytype"
                  className="travellingclass"
                  id="journeytype"
                  class="form-control"
                  required
                  onChange={onChange}
                >
                  <option value="null">....select...</option>
                  <option value="flight">Flight</option>
                  <option value="bus">Bus</option>
                  <option value="train">Train</option>
                </select>
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Source
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="source"
                  onChange={onChange}
                  name="source"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Destination
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="destination"
                  onChange={onChange}
                  name="destination"
                />
              </div>

              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Company
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="company"
                  onChange={onChange}
                  name="company"
                />
              </div>

              <div className="row">
                <div className="col-lg-4">
                  <div class="mb-3">
                    <label for="cars">Choose a Journey Type: </label>
                    <select
                      name="journeyclass"
                      className="travellingclass"
                      id="journeyclass"
                      class="form-control"
                      required
                      onChange={onChange}
                    >
                      <option value="null">...Select...</option>
                      <option value="economic">Economics</option>
                      <option value="sleeper">Sleeper</option>
                      <option value="genral">Genral</option>
                    </select>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                      Fare
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="fare"
                      onChange={onChange}
                      name="fare"
                    />
                  </div>
                </div>

                <div className="col-lg-4">
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                      Number
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="number"
                      onChange={onChange}
                      name="number"
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                      Departure Time
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="departuretime"
                      onChange={onChange}
                      name="departuretime"
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                      Arrival Time
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="arrivaltime"
                      onChange={onChange}
                      name="arrivaltime"
                    />
                  </div>
                </div>
              </div>

              <button type="submit" class="btn btn-primary" id="service">
                 Add Service
              </button>
            </form>
          </div>
          <div className="col-lg-3"></div>
        </div>
      </div>
    </>
  );
}

export default BookticketAdmin;
