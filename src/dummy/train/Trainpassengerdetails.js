import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { type } from "@testing-library/user-event/dist/type";
import { useContext } from "react";
import travelContext from "../../context/travelContext/travel.js/travelContext";
import passengerContext from "../../context/travelContext/travel.js/travelContext";

function Trainpassengerdetails() {
  const context = useContext(passengerContext);
  const { bookTicket } = context;
  const [credentials, setCredentials] = useState({
    email: localStorage.getItem("email"),
    passemail: "",
    passname: "",
    passgender: "",
    passcontact: "",
    passaadhar: "",
    destinationtime: localStorage.getItem("destinationtime"),
    departuretime: localStorage.getItem("departuretime"),
    source: localStorage.getItem("source"),
    journeytype: "train",
    destination: localStorage.getItem("destination"),
    travellingdate: localStorage.getItem("travellingdate"),
    number: localStorage.getItem("number"),
  });

  const handleClick = (e) => {
    e.preventDefault();
    const form1 = document.getElementById("passform");
    const name1 = document.getElementById("passname");
    const email1 = document.getElementById("passemail");
    const phone1 = document.getElementById("passcontact");
    const gender1 = document.getElementById("passgender");
    const passaadhar1 = document.getElementById("passaadhar");

    // success function
    function showSuccess(input, message) {
      const formControl = input.parentElement;
      formControl.className = "form-control success";
      const small = formControl.querySelector("small");
      // small.innerText = message;
      // small.classList.add("succText");
    }

    // error function
    function showError(input, message) {
      const formControl = input.parentElement;
      console.log(formControl);
      formControl.className = "form-control error";
      const small = formControl.querySelector("small");
      small.innerText = message;
      console.log(small.innerText);
      small.classList.add("errText");
    }

    // get input field name
    function getFieldName(input) {
      return input.id.charAt(0).toUpperCase() + input.id.slice(1);
    }

    let success = 0;
    let error = 0;
    function checkLength(input) {
      if (input.value.length == 0) {
        error = 1;
        showError(input, `${getFieldName(input)} shoud not be null`);
      } else {
        success = 1;
        showSuccess(input, "correct");
      }

      // if(passaadhar1.value.length !== 12)
      // {
      //   error = 1;
      //   showError(passaadhar1, "Enter valid aadhar number")
      // }
      // else
      // {
      //   success = 1;
      //   showSuccess(input, "success")
      // }
    }

    const checkGender = (input) => {
      if (input.value == "null") {
        error = 1;
        showError(input, "choose valid gender");
      } else {
        success = 1;
        showSuccess(input, "correct");
      }
    };
    // function call
    checkLength(email1);
    checkLength(gender1);
    checkLength(phone1);
    checkLength(name1);
    // checkLength(passaadhar1);
    checkGender(gender1);
    bookTicket(
      credentials.email,
      credentials.source,
      credentials.destination,
      credentials.passaadhar,
      credentials.passcontact,
      credentials.passemail,
      credentials.passname,
      credentials.passgender,
      credentials.journeytype,
      credentials.travellingdate,
      credentials.number,
      credentials.departuretime,
      credentials.destinationtime
    );
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <>
      <form id="passengerform">
        <div className="row">
          <div className="col-lg-6">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Source:
              </label>
              <input
                type="email"
                class="form-control"
                id="source"
                onChange={onChange}
                name="source"
                disabled
                value={localStorage.getItem("source")}
                aria-describedby="emailHelp"
              />
              <small></small>
            </div>
          </div>

          <div className="col-lg-6">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Destination:
              </label>
              <input
                type="email"
                class="form-control"
                id="destination"
                onChange={onChange}
                name="destination"
                disabled
                value={localStorage.getItem("destination")}
                aria-describedby="emailHelp"
              />
              <small></small>
            </div>
          </div>

          <div className="col-lg-6">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Travelling Date:
              </label>
              <input
                type="email"
                class="form-control"
                id="travellingdate"
                onChange={onChange}
                name="travellingdate"
                disabled
                value={localStorage.getItem("travellingdate")}
                aria-describedby="emailHelp"
              />
              <small></small>
            </div>
          </div>

          <div className="col-lg-6">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Company
              </label>
              <input
                type="email"
                class="form-control"
                id="company"
                onChange={onChange}
                name="company"
                disabled
                value={localStorage.getItem("company")}
                aria-describedby="emailHelp"
              />
              <small></small>
            </div>
          </div>
        </div>
        <hr /> <hr />
        <h4 className="passengerheading">Enter yout details</h4>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Passenger Email
          </label>
          <input
            type="email"
            class="form-control"
            id="passemail"
            onChange={onChange}
            name="passemail"
            aria-describedby="emailHelp"
          />
          <small></small>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Passenger Name
          </label>
          <input
            type="text"
            class="form-control"
            onChange={onChange}
            id="passname"
            name="passname"
          />
          <small></small>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Passenger gender
              </label>
              <div className="card">
                <div className="card-body">
                  <select
                    name="passgender"
                    onChange={onChange}
                    className="travellingclass"
                    id="passgender"
                    required
                  >
                    <option value="null">..Select gender..</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="transgender">Transgender</option>
                    <option value="NOTA">Don't want to display</option>
                  </select>
                  <small></small>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Passenger Contact number
              </label>
              <div className="card">
                <div className="card-body">
                  <input
                    type="text"
                    onChange={onChange}
                    class="form-control"
                    id="passcontact"
                    name="passcontact"
                  />
                  <small></small>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Aadhar number
              </label>
              <div className="card">
                <div className="card-body">
                  <input
                    type="text"
                    placeholder="Enter the aadharnumber"
                    onChange={onChange}
                    class="form-control"
                    id="passaadhar"
                    name="passaadhar"
                  />
                  <small></small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          type="submit"
          onClick={handleClick}
          id="flightbutton"
          class="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default Trainpassengerdetails;
