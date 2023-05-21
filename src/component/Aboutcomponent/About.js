import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import { AboutData } from "./AboutData";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import AboutCard from "./AboutCard"
import shakehand from "../images/shakehand.jpg"
import csr from "../images/csr.jpg";

function About(props) {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
    console.log(sidebar)
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
      <div className={sidebar ? "about-content-distance" : "about-content"}>
        <h1 className="ourexperience">Our motive</h1>
        <img src={shakehand} className="img-fluid shakehand" alt="..." />

        <div className="row visioncard">
          <div className="col-lg-4 visioncardbody">
            <AboutCard
              title="Co-operative hand"
              desc="We are there for you."
              image={csr}
            />
          </div>

          <div className="col-lg-4 visioncardbody">
            <AboutCard
              title="Co-operative hand"
              desc="We are there for you."
              image={csr}
            />
          </div>
          <div className="col-lg-4 visioncardbody">
            <AboutCard
              title="Co-operative hand"
              desc="We are there for you."
              image={csr}
            />
          </div>
          
        </div>
      </div>
    </>
  );
}

export default About;
