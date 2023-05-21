import { body } from "express-validator";
import user from "./images/user.png";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../component/Sidebar";

function Signup() {
  const [credentials, setCredentials] = useState({
    email: "",
    name: "",
    password: "",
    cpassword: "",
    gender: "",
    phone: "",
    address: "",
  });

  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form1 = document.getElementById("form");
    const name1 = document.getElementById("name");
    const email1 = document.getElementById("email");
    const password1 = document.getElementById("password");
    const cpassword1 = document.getElementById("cpassword");
    const phone1 = document.getElementById("phone");
    const address1 = document.getElementById("address");
    const gender1 = document.getElementById("gender");
    // const form = document.getElementById("form");
    // showSuccess("email", "correct");

    // success function
    function showSuccess(input, message) {
      const formControl = input.parentElement;
      formControl.className = "form-control success";
      const small = formControl.querySelector("small");
      // small.innerText = message;
      // small.classList.add("succText");
    }
    
    // error function
    function showError(input, message) {
      const formControl = input.parentElement;
      console.log(formControl)
      formControl.className = "form-control error";
      const small = formControl.querySelector("small");
      small.innerText = message;
      console.log(small.innerText)
      small.classList.add("errText");
    }

    // Check password matching
    function checkPassword(input1, input2) {
      if (input1 != input2) {
        // showError("Password should be match");
        alert("password should be match");
      }
    }

    // get input field name
    function getFieldName(input) {
      return input.id.charAt(0).toUpperCase() + input.id.slice(1);
    }

    let success = 0;
    let error = 0;
    function checkLength(input) {
      if (input.value.length == 0) {
        error = 1;
        console.log(error);
        showError(input, `${getFieldName(input)} shoud not be null`);
      } else {
        success = 1;
        console.log(success);
        showSuccess(input, "correct");
      }
    }

    // function call
    checkLength(email1);
    checkLength(password1);
    checkLength(cpassword1);
    // checkLength(gender1)
    checkLength(phone1);
    checkLength(address1);
    // checkPassword(cpassword1, password1);
    checkLength(name1);
    const { name, email, password, cpassword, phone, gender, address } =
      credentials;

      console.log(credentials)
    if (password == cpassword) {
      console.log("success", success);
      console.log("error", error)
      if (success == 1 && error == 0) {
        const responce = await fetch(
          "http://localhost:5000/api/auth/createuser",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },

            body: JSON.stringify({
              name,
              email,
              password,
              phone,
              gender,
              address,
            }),
          }
        );

        // success();

        const json = await responce.json();

        console.log(json)
        if (json.success) {
          alert("congractulation! your account is created");
          navigate("/login")
        } else {
          alert("You already register with this Account");
        }
      } 
    } else {
      alert("Password is not matching");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Sidebar />
      <div className="signupbody">
        <h1 className="signupheading">Welcome to Regestration</h1>
        <div className="container">
          <div className="row">
            <div className="col-lg-3"></div>
            <div className="col-lg-6">
              <form id="form" onSubmit={handleSubmit}>
                <img src={user} id="user" alt="" />
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control signup-style"
                    id="email"
                    name="email"
                    onChange={onChange}
                    aria-describedby="emailHelp"
                  />
                  <small>Error message</small>
                </div>

                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control signup-style"
                    id="name"
                    name="name"
                    onChange={onChange}
                    aria-describedby="emailHelp"
                  />
                  <small>Error message</small>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    onChange={onChange}
                    className="form-control signup-style"
                    id="password"
                    name="password"
                  />
                  <small>Error message</small>
                </div>

                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control signup-style"
                    id="cpassword"
                    onChange={onChange}
                    name="cpassword"
                  />
                  <small>Error message</small>
                </div>

                <div className="row">
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Gender
                      </label>
                      <div class="card">
                        <div class="card-body">
                          <select name="gender" onChange={onChange} id="gender">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="transgender">Transgender</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <small>Error message</small>
                  </div>

                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Phone number:
                      </label>
                      <div class="card">
                        <div class="card-body">
                          <input
                            type="text"
                            className="form-control signup-style"
                            id="phone"
                            onChange={onChange}
                            name="phone"
                            placeholder="enter your phone number"
                            aria-describedby="emailHelp"
                          />
                        </div>
                      </div>
                      <small>Error message</small>
                    </div>
                  </div>
                </div>

                <label>Address: </label>
                <div className="form-floating">
                  <textarea
                    className="form-control signup-style"
                    placeholder="Leave a comment here"
                    id="address"
                    onChange={onChange}
                    name="address"
                  ></textarea>
                  <small>Error message</small>
                </div>

                <button type="submit" id="button" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
