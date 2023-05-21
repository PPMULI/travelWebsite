import React from "react";
import LoginIcon from "@mui/icons-material/Login";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import LogoutIcon from "@mui/icons-material/Logout";
 

function Navbar() {
  const handleLogout = () => {
    // let logout = prompt("Type your register email for logout");
    // console.log(logout)
    // if(logout == localStorage.getItem("email"))
    // {
      localStorage.clear()
      alert("You are log-out", window.location.href = "/"); 
    // }
    // else
    // {
      // alert("UnAuthorised user")
    // }
  };
  return (
    <>
      <div className="navb">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img
                id="MDB-logo"
                src="https://mdbcdn.b-cdn.net/wp-content/uploads/2018/06/logo-mdb-jquery-small.png"
                alt="MDB Logo"
                draggable="false"
                height="30"
              />
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars"></i>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-3">
                <li className="nav-item">
                  <a
                    className="nav-link active d-flex align-items-center"
                    aria-current="page"
                    href="/"
                  >
                    <i className="fas fa-bars pe-2"></i>Home
                  </a>
                </li>
              </ul>
              <form className="d-flex align-items-center w-100 form-search">
                <div className="input-group">
                  <button
                    className="btn btn-light dropdown-toggle shadow-0"
                    type="button"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                  >
                    All
                  </button>
                  <ul className="dropdown-menu dropdown-menu-dark fa-ul">
                    <li>
                      <a className="dropdown-item" href="#">
                        <span className="fa-li pe-2">
                          <i className="fas fa-search"></i>
                        </span>
                        All
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <span className="fa-li pe-2">
                          <i className="fas fa-film"></i>
                        </span>
                        Titles
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <span className="fa-li pe-2">
                          <i className="fas fa-tv"></i>
                        </span>
                        TV Episodes
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <span className="fa-li pe-2">
                          <i className="fas fa-user-friends"></i>
                        </span>
                        Celebs
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <span className="fa-li pe-2">
                          <i className="fas fa-building"></i>
                        </span>
                        Companies
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <span className="fa-li pe-2">
                          <i className="fas fa-key"></i>
                        </span>
                        Keywords
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <span className="fa-li pe-2">
                          <i className="fas fa-search-plus"></i>
                        </span>
                        Advanced search
                        <i className="fas fa-chevron-right ps-2"></i>
                      </a>
                    </li>
                  </ul>
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </div>
                <a href="#!" className="text-white">
                  <i className="fas fa-search ps-3"></i>
                </a>
              </form>

              <ul className="navbar-nav ms-3">
                <li className="nav-item me-3">
                  <a
                    className="nav-link d-flex align-items-center"
                    href="/flight"
                  >
                    Flight
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link d-flex align-items-center me-3"
                    href="/about"
                  >
                    <i className="fas fa-bookmark pe-2"></i> More...
                  </a>
                </li>
                {/* <form className="d-flex">
                      <a
                        className="nav-link d-flex align-items-center"
                        href="/adminlogin"
                      >
                        <LoginIcon />
                        Admin Login
                      </a>
                    </form> */}
                <li className="nav-item">
                  {!localStorage.getItem("token") && !localStorage.getItem("authtokenadmin") ? (
                    <form className="d-flex">
                      <a
                        className="nav-link d-flex align-items-center login"
                        href="/login"
                      >
                        <LoginIcon />
                        Login
                      </a>

                      <a
                        className="nav-link d-flex align-items-center"
                        href="/adminlogin"
                      >
                        <LoginIcon />
                        Admin Login
                      </a>
                    </form>
                  ) : (
                    <button
                    className="logout"
                    onClick={handleLogout}
                    >
                      <LogoutIcon />
                      Log-out
                    </button>
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

export default Navbar;
