import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Navbar";
import adminloginlogo from "../images/adminloginlogo.jpg";
import Dashbordnewnav from "../../../dashboardnew/Dashbordnewnav";

function AdminLogin() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  let navigate = useNavigate();
  if (localStorage.getItem("authtokenadmin")) {
    alert("Enter deny", (window.location.href = "/"));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(credentials.empid);
    console.log("Success");

    const email1 = document.getElementById("email");
    const password1 = document.getElementById("password");

    // success function
    function showSuccess(input, message) {
      const formControl = input.parentElement;
      formControl.className = "form-control success";
      const small = document.querySelector("small");
      small.innerText = message;
      small.classList.add("succText");
    }

    // Error function
    function showError(input, message) {
      const formControl = input.parentElement;
      formControl.className = "form-control error";
      const small = document.querySelector("small");
    }

    // function for getting the input
    function getInput(input) {
      return input.id.charAt(0).toUpperCase() + input.id.slice(1);
    }

    console.log(password1.value)
    let error = 0;
    let succ = 0;
    // function for checking the length of each field
    function checkLength(input) {
      console.log(input.value);
      if (input.value.length == 0) {
        error = 1;
        showError(input, `${getInput(input)} should not be null`);
      } else {
        succ = 1;
      }
    }
    function checkOfficialEmail(input) {
      let officialEmail = input.value
      if(!officialEmail.endsWith("tcs.com"))
      {
        error = 1;
        alert("Please enter official email or login as a user")
      }
    }
    // function call
    checkOfficialEmail(email1)
  
    // function call
    checkLength(email1);
    checkLength(password1);

    const { email, password } = credentials;
    console.log(credentials)

    if (succ == 1 && error == 0) {
      const responce = await fetch(
        "http://localhost:5000/api/adminauth/adminlogin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            email: credentials.email,
            password: credentials.password,
          }),
        }
      );

      const json = await responce.json();
      console.log(json)
      if (json.success) {
        alert("Your are logged in")
        localStorage.setItem("authtokenadmin", json.authtokenadmin);
        localStorage.setItem("email", json.email);
        navigate("/dashboard");
      } else {
        alert("Please check your credentials");
      }
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Dashbordnewnav />
      <div className="chooselogin">
        <div className="container">
          <h1 className="adminlogin">Admin Login</h1>
          <div className="row">
            <div className="col-lg-3"></div>
            <div className="col-lg-6">
              <form className="adminlofinform" onSubmit={handleSubmit}>
                <div class="mb-3">
                  <label
                    for="exampleInputEmail1"
                    class="form-label adminlofinformlabel"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter official email"
                    class="form-control"
                    id="email"
                    name="email"
                    onChange={onChange}
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="mb-3">
                  <label
                    for="exampleInputPassword1"
                    class="form-label adminlofinformlabel"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    onChange={onChange}
                    name="password"
                  />
                </div>
                <div id="adminlofinformbutton">
                  <button
                    type="submit"
                    class="btn btn-primary adminlofinformbutton"
                  >
                    Submit
                  </button>
                </div>
                Not accout? <a href="/adminsignup">Signup</a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminLogin;
