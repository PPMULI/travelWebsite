import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function BookinghistoryDetails() {
  const [credentials, setCredentials] = useState({
    source: "",
    destination: "",
  });

  const [bookedticket, setBookedticket] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("authtokenadmin")) {
      alert("Entry Deny! Please login first");
      navigate("/");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const source1 = document.getElementById("source");
    // const date1 = document.getElementById("travellingdate");
    const destination1 = document.getElementById("destination");

    // success function
    function showSuccess(input) {
      const formControl = input.parentElement;
      formControl.className = "form-control success";
      // const small = document.querySelector("small");
      // small.innerText = message;
      // small.classList.add("succText");
    }

    // Error function
    function showError(input, message) {
      const formControl = input.parentElement;
      formControl.className = "form-control error";
      // const small = document.querySelector("small");
      // small.innerText = message;
      // small.classList.add("errText");
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
    // checkLength(date1);

    // let s1 = source.toLowerCase()
    const { source, destination } = credentials;
    console.log(credentials);

    if (succ == 1 && error == 0) {
      const responce = await fetch(
        "http://localhost:5000/api/passenger/fetchbooking",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            source: credentials.source,
            destination: credentials.destination,
          }),
        }
      );
      console.log(source, destination);

      const json = await responce.json();
      console.log(json.passengercredentials);
      if (json.success) {
        setBookedticket(json.passengercredentials);
        // navigate("/dashboard");
      } else {
        alert("No booking is available for given credentials");
      }
    }
  };
  const onChange = (e) => {
    e.preventDefault();
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <>
      <form className="bookinghistoryform" onSubmit={handleSubmit}>
        <div className="row">
          {/* <small></small> */}
          <div className="col-lg-6">
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Source
              </label>
              <div className="card">
                <div className="card-body">
                  <input
                    type="text"
                    name="source"
                    placeholder="Enter the source"
                    className="form-control source"
                    onChange={onChange}
                    id="source"
                    aria-describedby="emailHelp"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
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
                    placeholder="Enter the destination"
                    className="form-control destination"
                    id="destination"
                    aria-describedby="emailHelp"
                  />
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            id="flightbutton"
            className="btn btn-primary bookinghistorybutton"
          >
            <b>
              <i>
                <u>Check Bookings</u>
              </i>
            </b>
          </button>
        </div>
      </form>

      <div className="row">
        {bookedticket &&
          bookedticket.map((value) => {
            return (
              <>
                <div className="col-lg-4 booked_card">
                  <div class="card  booked_card_data">
                    <div class="card-body">
                      <ul>
                        <li>
                          <h5 class="card-title">{value.passname}</h5>
                        </li>
                        <li>
                          <h6 class="card-subtitle mb-2 text-body-secondary">
                            {value.passemail}
                          </h6>
                        </li>
                        <li>
                          <p class="card-text">
                            Passenger aadhar: {value.passaadhar}
                          </p>
                        </li>
                        <li>
                          <p className="card-text">number: {value.number}</p>
                        </li>

                        <li>
                          <p className="card-text">
                            date: {value.travellingdate}
                          </p>
                        </li>
                        <li>
                          <p className="card-text">
                            Contact number: {value.passcontact}
                          </p>
                        </li>

                        <li>
                          <p className="card-text">
                            Departuretime: {value.departuretime}
                          </p>
                        </li>
                        {/* </li> */}
                      </ul>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
}

export default BookinghistoryDetails;
