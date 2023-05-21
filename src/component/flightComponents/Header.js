import React from "react";
import FlightIcon from "@mui/icons-material/Flight";
import ApartmentIcon from "@mui/icons-material/Apartment";
import HomeIcon from "@mui/icons-material/Home";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import TrainIcon from "@mui/icons-material/Train";
import { useNavigate } from "react-router-dom";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";

function Header() {
    const navigate = useNavigate();
    const handleclick = (e) => {
      e.preventDefault();
    };
  return (
    <>
      <div className="container flightcard">
        <div className="card ">
          <div className="card-body ">
            <div className="row">
              <div className="col-md-2">
                <span className="localicon">
                  <FlightIcon onClick={handleclick} />
                </span>
                <div>Flight</div>
              </div>

              <div className="col-md-2">
                <span className="localicon">
                  <ApartmentIcon />
                </span>
                <div>Hotel</div>
              </div>

              <div className="col-md-2">
                <span className="localicon">
                  <HomeIcon />
                </span>

                <div>Homestay</div>
              </div>

              <div className="col-md-2">
                <span className="localicon">
                  <DirectionsBusIcon />
                </span>
                <div>Bus</div>
              </div>

              <div className="col-md-2">
                <span className="localicon">
                  <TrainIcon />
                </span>

                <div>Train</div>
              </div>

              <div className="col-md-2">
                <span className="localicon">
                  <LocalTaxiIcon />
                </span>
                <div>TAxi</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
