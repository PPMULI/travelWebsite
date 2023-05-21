import React from "react";
import { useState } from "react";
import beach1 from "../images/beach1.jpg";
import beach2 from "../images/beach2.jpg";
import beach3 from "../images/beach3.jpg";

function Crousal() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <div className="crousalhead">
      <div className={sidebar ? "crousal_active" : "cousal"}>
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={beach1}
                className="d-block w-100 crousalimage"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={beach2}
                className="d-block w-100 crousalimage"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={beach3}
                className="d-block w-100 crousalimage"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Crousal;
