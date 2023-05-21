import React, { useState } from "react";
import Services from "../flightComponents/Services";
import Sidebar from "../Sidebar";
import { Link, useNavigate } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import { AboutData } from "../Aboutcomponent/AboutData";
import { IconContext } from "react-icons";
import buslogo from "../images/buslogo.gif"
import BookTicket from "../passengers/BookTicket";
import { useEffect  } from "react";


function Bus() {
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  const navigate = useNavigate()
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
                <img src={buslogo} className="flightlogo" alt="sorry" />
                <h1 className="flightheading1">Book your Bus</h1>
              </div>
            </div>
            <Services />
            <div className="flightdetails">
              <div className="container">
                <div className="row">
                  <BookTicket />
                  <div className="col-lg-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={sidebar ? "about-content-distance" : "about-content"}>
      </div>
    </>
  );
}

export default Bus;
