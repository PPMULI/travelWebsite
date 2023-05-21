import React, { useEffect, useState } from "react";
import Sidebar from "../component/Sidebar"
import { useNavigate } from "react-router-dom";

function Login() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  let navigate = useNavigate();
  useEffect(() =>{

    if(localStorage.getItem("token") || localStorage.getItem("authtokenadmin"))
    {
      alert("Enter deny", window.location.href="/")
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
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
      small.innerText = message;
      small.classList.add("errText");
    }

    // function for getting the input
    function getInput(input) {
      return input.id.charAt(0).toUpperCase() + input.id.slice(1);
    }

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

    // function call
    checkLength(email1);
    checkLength(password1);

    const { email, password } = credentials;
    if (succ == 1 && error == 0) {
      const responce = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      });

      const json = await responce.json();
      if (json.success) {
        localStorage.setItem("token", json.authtoken);
        localStorage.setItem("email", json.email);
        navigate("/");
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
    <Sidebar />
      <div className="container">
        <div className="loginbody">
          <h1 className="loginheading">Welcome to Go-airline</h1>
          <div className="container">
            <div className="row">
              <div className="col-lg-4"></div>
              <div className="col-lg-4">
                <form id="loginform" onSubmit={handleSubmit}>
                  {/* <img src={user} className="userimage" /> */}
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      onChange={onChange}
                      name="email"
                      aria-describedby="emailHelp"
                    />
                    <small>Error message</small>
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      class="form-control"
                      id="password"
                      onChange={onChange}
                      name="password"
                    />
                    <small>bgjkk</small>
                  </div>
                  <p>Dont have Account?<a href="/signup">Signup</a></p> 
                  <button type="submit" class="btn btn-primary loginbutton">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;

