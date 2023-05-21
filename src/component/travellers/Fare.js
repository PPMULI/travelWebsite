import React from "react";
import lock from "../AdminPannel/images/lock.jpg";
import PaymentMethod from "./PaymentMethod";
import BillingInfo from "./BillingInfo";
import PaymentDetails from "./PaymentDetails";

function Fare() {
  return (
    <>
      {/* <div className="> */}

      <div className="row">
        <div className="col-lg-3">
          <div class="card farecard">
            <img src={lock} id="lock" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title fare-card-title">
                <u>Your Details</u>
              </h5>
              <h6 class="card-subtitle mb-2 text-body-secondary"></h6>
              <p class="card-text tourdetails">
                <ul>
                  <li>
                    Source: {localStorage.getItem("source")}
                  </li>
                  <hr />
                  <li>
                    Destination:{" "}
                    {localStorage.getItem("destination")}
                  </li>
                  <hr />

                  <li>
                    Vehicle Number:{" "}
                    {localStorage.getItem("number")}
                  </li>
                  <hr />

                  <li>
                    Journeytype:{" "}
                    {localStorage.getItem("journeytype")}
                  </li>
                  <hr />

                  <li>
                    BookingEmail:
                    {localStorage.getItem("email")}
                  </li>
                  <hr />

                  <li>
                    Date: {localStorage.getItem("travellingdate")}
                  </li>
                  <hr />
                </ul>
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-9">
          <h1 className="payment">Payment:</h1>
          <p>Choose a payment method</p>

          <div className="row">
            <PaymentMethod />
            <div className="col-lg-1"></div>
            <div className="col-lg-5 billingdetails">
              <BillingInfo />
            </div>

            <div className="col-lg-5  billingdetails">
              <PaymentDetails />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="row"></div> */}
    </>
  );
}

export default Fare;
