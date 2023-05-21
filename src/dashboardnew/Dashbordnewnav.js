import React from "react";
import { useNavigate } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import LogoutIcon from "@mui/icons-material/Logout";

function Dashbordnewnav() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    alert("You are log-out", (window.location.href = "/"));
  };
  return (
    <>
      <div className="newdashboardheader">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <div className="dashboardnewlogo">
                <span className="dashboardnewtext">
                  <b>
                    <i>T</i>
                  </b>
                </span>
                <span className="dashboardnewsubtext">ravel</span>
              </div>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul
                className="navbar-nav me-auto mb-2 mb-lg-0"
                id="newdashboarditems"
              >
                <li className="nav-item">
                  <a
                    className="nav-link newdashboardhome"
                    aria-current="page"
                    href="/"
                  >
                    <i>Home</i>
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link newdashboardhome"
                    aria-current="page"
                    href="/contact"
                  >
                    <i>Contact us</i>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link newdashboardhome" href="#">
                    <i
                      onClick={() => {
                        navigate("/flight");
                      }}
                    >
                      Book Tour
                    </i>
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link newdashboardhome" href="#">
                    <i
                      onClick={() => {
                        navigate("/dashboard");
                      }}
                    >
                      Admin
                    </i>
                  </a>
                </li>

                <li className="nav-item" id="loginitem">
                  {!localStorage.getItem("token") &&
                  !localStorage.getItem("authtokenadmin") ? (
                    <form className="d-flex">
                      <a
                        className="nav-link d-flex align-items-center login"
                        href="/login"
                      >
                        <LoginIcon />
                        Login
                      </a>

                      <a
                        className="nav-link d-flex align-items-center adminloginnav"
                        href="/adminlogin"
                      >
                        <LoginIcon />
                        Admin Login
                      </a>
                    </form>
                  ) : (
                    <>
                      <button className="logout" onClick={handleLogout}>
                        <LogoutIcon />
                        Log-out
                      </button>
                    </>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Dashbordnewnav;
