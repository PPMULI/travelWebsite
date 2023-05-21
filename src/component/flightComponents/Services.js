import React, { useEffect, useState } from "react";
import FeedbackIcon from "@mui/icons-material/Feedback";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import TrainIcon from "@mui/icons-material/Train";
import DirectionsBusFilledIcon from "@mui/icons-material/DirectionsBusFilled";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Services() {
  const [title, setTitle] = useState([])
  const navigate = useNavigate();
  const location = useLocation();

  // useEffect(() => {
  //   console.log(location);
  // }, [location]);
  const flight = () => {
    navigate("/flight");
  };
  return (
    <>
      <div className="services">
        {/* {title} */}
        <div className="row">
          <div className="col-lg-3">
            <div class="card servicecard">
              <div class="card-body">
                <h5 class="card-title">
                  <AirplanemodeActiveIcon onClick={flight} />
                </h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">
                  Flight Ticket
                </h6>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div class="card servicecard">
              <div class="card-body">
                <h5 class="card-title">
                  <TrainIcon
                    onClick={() => {
                      navigate("/train");
                      <a
                      href="/train"
                      className={`${location.pathname === "/train"? "active": ""}`}
                    ></a>
                    }}
                  />
                </h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">Train</h6>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div class="card servicecard">
              <div class="card-body">
                <h5 class="card-title">
                  <DirectionsBusFilledIcon
                    onClick={() => {
                      navigate("/bus");
                      <a
                        href="/bus"
                        className={`${location.pathname === "/bus"? "active": ""}`}
                      ></a>
                    }}
                  />
                </h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">Bus</h6>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div class="card servicecard">
              <div class="card-body">
                <h5 class="card-title">
                  <FeedbackIcon
                    onClick={() => {
                      navigate("/websitesuggestion");
                    }}
                  />
                </h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">Feedback</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
