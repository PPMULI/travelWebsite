import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import * as FaIcons from "react-icons/fa";
import { AboutData } from "../Aboutcomponent/AboutData";
import Crousal from "./Crousal";
import { mybookingdate } from "./mybookingdata";

function MyBookings() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar navbar1">
          <a href="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </a>
        </div>

        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items">
            <li className="navbar-toggle"></li>

            {AboutData.map((item, index) => {
              console.log(item);
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
              console.log(item.index);
            })}
          </ul>
        </nav>
      </IconContext.Provider>
      <div className="mybookingbody">
        <div className="container">
          <Crousal />

          <div className="mybookingcard">
            <div class="card">
              <div className="row">
                {mybookingdate.map((item, index) => {
                  console.log(item.icon);
                  return (
                    <div key={index} className="col-lg-4 bookingdata">
                      <img
                        src={item.icon}
                        class="card-img-top mybookingimage"
                        alt="..."
                      />
                      <div class="card-body mybookingcardbody">
                        <h5 class="card-title">
                          <a href={item.path}>{item.title}</a>
                        </h5>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <h1 className="inspiration">Our inspiration</h1>
          <div className="container">
            <div className="row">
         
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyBookings;
