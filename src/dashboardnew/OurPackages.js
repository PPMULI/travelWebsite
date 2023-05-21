import React from "react";
import goa from "../component/AdminPannel/images/goa.jpg";
import summerplan from "../component/AdminPannel/images/summerpackages.jpg";
import kashmir from "../component/AdminPannel/images/kashmir.jpg";

function OurPackages() {
  return (
    <>
      <div className="col-lg-3 tourcard">
        <div className="card tourcardbody">
          <img src={kashmir} className="card-img-top offerimage" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Kashmir Jumbo plan</h5>
            <p className="card-text">
              Flat 30% off on First booking
            </p>
            <a href="#" className="btn btn-primary">
              Know more...
            </a>
          </div>
        </div>
      </div>

      <div className="col-lg-3 tourcard">
        <div className="card tourcardbody">
          <img src={summerplan} className="card-img-top offerimage" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Golden plan for </h5>
            <p className="card-text">
              Flat 30% off on First booking
            </p>
            <a href="#" className="btn btn-primary">
              Know more...
            </a>
          </div>
        </div>
      </div>

      <div className="col-lg-3 tourcard">
        <div className="card tourcardbody">
          <img src={goa} className="card-img-top offerimage" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Goa beaches plan</h5>
            <p className="card-text">
              Flat 30% off on First booking
            </p>
            <a href="#" className="btn btn-primary">
              Know more...
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurPackages;
