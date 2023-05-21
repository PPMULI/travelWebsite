import React from "react";
import pritam from "../AdminPannel/images/pritam.jpg";
import Dashbordnewnav from "../../dashboardnew/Dashbordnewnav";
import twitter from "../AdminPannel/images/insta.jpg";
import insta from "../AdminPannel/images/twitter.png";
import linkdiene from "../AdminPannel/images/linkdienelogo.jpg";
import git from "../AdminPannel/images/git.jpg";

function Contact() {
  return (
    <>
      <Dashbordnewnav />

      <div className="container">
        <div className="row">
          <div className="jumbotron jumbotron-fluid contact">
            <h1 className="contactheading">Feel Free To Connect With US!</h1>
            <div className="row">
              <div className="col-lg-5"></div>
              <div className="col-lg-6">
                <img
                  src={pritam}
                  className="card-img-top contactpritam"
                  alt="..."
                />
              </div>
            </div>

            <div className="container">
              <h1 className="display-4 contactperson">
                <i>
                  <u>PRITAM MULI</u>
                </i>
              </h1>
              <p className="lead">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4">
                      <div className="row">
                        <div className="col-lg-3">
                          <a
                            href="https://www.linkedin.com/jobs/"
                            target="_blank"
                          >
                            <img src={linkdiene} className="logo" alt="" />
                          </a>
                        </div>

                        <div className="col-lg-3">
                          <a href="https://twitter.com/home" target="_blank">
                            <img src={insta} alt="" className="logo" />
                          </a>
                        </div>

                        <div className="col-lg-3">
                          <a href="https://twitter.com/home" target="_blank">
                            <img src={twitter} alt="" className="logo" />
                          </a>
                        </div>

                        <div className="col-lg-3">
                          <a href="https://twitter.com/home" target="_blank">
                            <img src={git} alt="" className="logo" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </p>
            </div>
          </div>
        </div>

        <div className="row" id="row">
          <div className="col-lg-4">
            <div className="card contactcard">
              <div className="card-body">
                <h5 className="card-title">Harish Patil</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  Head, Chhatrapati Sambhaji Nagar
                </h6>
                <p className="card-text">Contact No. 9637682304</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card contactcard">
              <div className="card-body">
                <h5 className="card-title">Pratiksha Rajurkar</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  Manager, Chhatrapati Sambhaji Nagar
                </h6>
                Contact Number: 8275831197
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card contactcard">
              <div className="card-body">
                <h5 className="card-title">Toll Free</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  24*7 Customer Support
                </h6>
                Tell. no: 0240-245697
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
