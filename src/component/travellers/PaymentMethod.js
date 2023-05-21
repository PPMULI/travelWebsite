import React from "react";
import netbanking from "../AdminPannel/images/netbanking.jpg";
import upi from "../AdminPannel/images/upi.jpg";
import card from "../AdminPannel/images/creditCard.jpg";

function PaymentMethod() {
  return (
    <>
      <div className="col-lg-4">
        <div class="card paymentoptions">
          <img src={card} class="card-img-top farecardimage" alt="..." />
          <h5 class="card-title farecardtitle">Credit card</h5>
        </div>
      </div>

      <div className="col-lg-4">
        <div class="card paymentoptions">
          <img src={upi} class="card-img-top farecardimage" alt="..." />
          <h5 class="card-title farecardtitle">UPI</h5>
        </div>
      </div>

      <div className="col-lg-4">
        <div class="card paymentoptions">
          <img src={netbanking} class="card-img-top farecardimage" alt="..." />
          <h5 class="card-title farecardtitle">Net bankinf</h5>
        </div>
      </div>
    </>
  );
}

export default PaymentMethod;
