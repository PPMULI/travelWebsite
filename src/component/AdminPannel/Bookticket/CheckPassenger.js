import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function CheckPassenger() {
  const [credentials, setCredentials] = useState({
    email: "",
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

    const email1 = document.getElementById("email");
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
      if (input.value.length == 0 || input.value == "null") {
        error = 1;
        showError(input, `${getInput(input)} should not be null`);
      } else {
        succ = 1;
        showSuccess(input);
      }
    }

    // function call
    checkLength(email1);

    // let s1 = source.toLowerCase()
    const { email } = credentials;
    console.log(credentials);

    if (succ == 1 && error == 0) {
      const responce = await fetch(
        "http://localhost:5000/api/passenger/fetchpassenger",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            email: credentials.email,
          }),
        }
      );

      const json = await responce.json();
      console.log(json.error);
      if (json.success) {
        setBookedticket(json.passengeremail);
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
      <div className="container">
    <h1 className="checkpassengerheading"><b><i><u> Enter the email for details</u></i></b></h1>
        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-6">
            <form onSubmit={handleSubmit}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  onChange={onChange}
                  class="form-control"
                  id="email"
                  name="email"
                  placeholder="name@example.com"
                />
              </div>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>

          <div className="container">
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
                                  <p className="card-text">
                                    number: {value.number}
                                  </p>
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
      
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckPassenger;
