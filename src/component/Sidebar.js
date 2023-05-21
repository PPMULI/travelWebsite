import React, {useState} from 'react'
import * as FaIcons from "react-icons/fa";
import { AboutData } from './Aboutcomponent/AboutData';
 import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { Servicedata } from './Servicesdsta';

function Sidebar() {
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
            <li className="navbar-toggle">
              <a href="#" className="menu-bars">
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
    </>
  )
}

export default Sidebar