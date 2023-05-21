import React, { useState } from "react";
import visa from "../AdminPannel/images/visa.jpg";
import { useNavigate } from "react-router-dom";

function PaymentDetails() {
  const [credentials, setCredentials] = useState({
    cardnumber: "",
    cardholdername: "",
    clientemail: localStorage.getItem("email")
  });

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const cardnumber1 = document.getElementById("cardnumber");
    const cardholdername1 = document.getElementById("cardholdername");
    const expdate1 = document.getElementById("expdate");
    const cvv1 = document.getElementById("cvv");

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
      // console.log(input);
      return input.id.charAt(0).toUpperCase() + input.id.slice(1);
    }

    let error = 0;
    let succ = 0;
    // function for checking the length of each field
    function checkLength(input) {
      console.log(input.value);
      if (input.value.length == 0 || input.value == "null") {
        error = 1;
        showError(input, `${getInput(input)} should not be null`);
      } else {
        succ = 1;
        showSuccess(input);
      }
    }

    // function call
    checkLength(cardholdername1);
    checkLength(cardnumber1);
    checkLength(cvv1);
    checkLength(expdate1);

    const { cardholdername, cardnumber, clientemail } = credentials;
    console.log(credentials);
    if (succ == 1 && error == 0) {
      const responce = await fetch(
        "http://localhost:5000/api/paymentdetails/paymentdetails",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            cardholdername: credentials.cardholdername,
            cardnumber: credentials.cardnumber,
            clientemail: credentials.clientemail,
          }),
        }
      );
      const json = await responce.json();
      console.log(json);
      if (json.success) {
         alert("Congratulations! Your Ticket was booked")
         navigate("/accnolodgement")
      } else {
        alert("No flights available for given credentials");
      }
    }
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <>
      <h1>Credit Card Info</h1>
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Card Number
          </label>
          <div className="row">
            <div className="col-lg-9">
              <input
                type="text"
                name="cardnumber"
                class="form-control"
                onChange={onChange}
                id="cardnumber"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="col-lg-3">
              <img src={visa} id="visalogo" class="img-thumbnail" alt="..." />
            </div>
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Card Holder name
          </label>
          <input
            type="text"
            name="cardholdername"
            class="form-control"
            id="cardholdername"
            onChange={onChange}
          />
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Expiary Date
              </label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter expiary date"
                id="expdate"
                onChange={onChange}
                name="expdate"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                CVV
              </label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter the CVV"
                id="cvv"
                onChange={onChange}
                name="cvv"
              />
            </div>
          </div>
          
        </div>

        <button type="submit" id="paymentdetailsbutton" class="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default PaymentDetails;
