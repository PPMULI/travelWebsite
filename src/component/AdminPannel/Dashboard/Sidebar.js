import React, { useState } from "react";
import { AboutData } from "./AboutData";
import * as FaIcons from "react-icons/fa";
import airlinelogo from "../images/airlinelogo.jpg";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";

function Sidebar() {
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
            <li className="adminnavbarlist"><a href="/dashboard">Home</a></li>
            <li className="adminnavbarlist"><a href="/contact">Contact</a></li>
            <li className="adminnavbarlist">
              <a href="/bookticketadmin">Book Ticket</a>
            </li>
            <li className="adminnavbarlist"><a href="">Contact</a> </li>
          </ul>
        </div>

        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items">
            <li className="navbar-toggle">
              <a href="#" className="menu-bars"></a>
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
    </>
  );
}

export default Sidebar;
