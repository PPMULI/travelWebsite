import React from "react";
import { useState } from "react";
import { IconContext } from "react-icons";

import * as FaIcons from "react-icons/fa";
import airlinelogo from "../images/airlinelogo.jpg";

function Sidebar2() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar navbar1">
          <a className="navbar-brand" href="#">
            <img src={airlinelogo} alt="Bootstrap" width="40" height="40" />
          </a>
          <a href="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </a>
          <ul className="adminnavbar">
            <li className="adminnavbarlist">
              <a href="/">Home</a>
            </li>
            <li className="adminnavbarlist">
              <a href="/dashboard">Admin Dashboard</a>
            </li>
            <li className="adminnavbarlist">
              <a href="/contact">Contact</a>
            </li> 
            <li className="adminnavbarlist">
              <a href="/bookticketadmin">Book Ticket</a>
            </li>
            <li className="adminnavbarlist">
              <a href="">Contact</a>{" "}
            </li>
          </ul>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Sidebar2;
