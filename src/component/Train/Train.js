import React, { useEffect } from "react";
import { IconContext } from "react-icons";
import { AboutData } from "../Aboutcomponent/AboutData";
import { Link, useNavigate } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import Services from "../flightComponents/Services";
import { useState } from "react";
import trainlogo from "../images/trainlogo.jpg";
import Dummy from "../Dummy";
import BookTicket from "../passengers/BookTicket";

function Train() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (
      !localStorage.getItem("token") &&
      !localStorage.getItem("authtokenadmin")
    ) {
      alert("Entry Deny! Please login first");
      navigate("/");
    }
  }, []);
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
            <li className="navbar-toggle">
              <a href="#" className="menu-bars">
                {/* <AiIcons.AirOutlined /> */}
                {/* <AiIcons.AiOutlineClose /> */}
              </a>
            </li>

            {AboutData.map((item, index) => {
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

      <div className="flightbody">
        <div className={sidebar ? "flight flight_active" : "flight"}>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 flightlogo"></div>
              <div className="col-lg-6 flightheading">
                <img src={trainlogo} className="flightlogo" alt="sorry" />
                <h1 className="flightheading1">Book your Train</h1>
              </div>
            </div>
            <Services />
            <div className="flightdetails">
              <div className="container">
                <BookTicket />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Train;
