import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Navbar";

function Adminsignup() {
  const [credentials, setCredentials] = useState({
    email: "",
    name: "",
    empid: "",
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
    const empid1 = document.getElementById("empid");
    const name1 = document.getElementById("name");
    const email1 = document.getElementById("email");
    const password1 = document.getElementById("password");
    const cpassword1 = document.getElementById("cpassword");
    const phone1 = document.getElementById("phone");
    const address1 = document.getElementById("address");
    const gender1 = document.getElementById("gender");

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
      console.log(formControl);
      formControl.className = "form-control error";
      const small = formControl.querySelector("small");
      small.innerText = message;
      console.log(small.innerText);
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
      console.log("2")
      if (input.value.length == 0) {
        error = 1;
        showError(input, `${getFieldName(input)} shoud not be null`);
      } else {
        success = 1;
        showSuccess(input, "correct");
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
    checkLength(empid1)
    checkLength(name1);
    checkLength(email1);
    checkLength(password1);
    checkLength(cpassword1);
    checkLength(address1);
    checkLength(phone1);
    const { name, email, empid, password, cpassword, phone, gender, address } =
      credentials;

    console.log(credentials);
    if (password == cpassword) {
      if (success == 1 && error == 0) {
        const responce = await fetch(
          "http://localhost:5000/api/adminauth/registeradmin",
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
              empid
            }),
          }
        );

        // success();

        const json = await responce.json();

        console.log(json);
        if (json.success) {
          alert("congractulation! your account is created");
          navigate("/adminlogin");
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
      <Navbar />
      <div>
        <div className="signupbody">
          <h1 className="signupheading">Welcome to Regestration</h1>
          <div className="container">
            <div className="row">
              <div className="col-lg-3"></div>
              <div className="col-lg-6">
                <form id="form" onSubmit={handleSubmit}>
                  {/* <img src={user} id="user" alt="" /> */}
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control signup-style"
                      id="email"
                      placeholder="Enter official Email Address"
                      name="email"
                      onChange={onChange}
                      aria-describedby="emailHelp"
                    />
                    <small>Error message</small>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                       name
                    </label>
                    <input
                      type="text"
                      className="form-control signup-style"
                      id="name"
                      placeholder="Enter official Email Address"
                      name="name"
                      onChange={onChange}
                      aria-describedby="emailHelp"
                    />
                    <small>Error message</small>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Emp Id
                    </label>
                    <input
                      type="text"
                      className="form-control signup-style"
                      id="empid"
                      name="empid"
                      onChange={onChange}
                      placeholder="Enter Emp ID"
                      aria-describedby="emailHelp"
                    />
                    <small>Error message</small>
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      onChange={onChange}
                      className="form-control signup-style"
                      id="password"
                      name="password"
                      placeholder="Enter password"
                    />
                    <small>Error message</small>
                  </div>

                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="form-control signup-style"
                      id="cpassword"
                      onChange={onChange}
                      name="cpassword"
                      placeholder="Re-enter password"
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
                            <select
                              name="gender"
                              onChange={onChange}
                              id="gender"
                            >
                              <option>Select Gender</option>
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
                      placeholder="Enter yuor permenant address"
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
      </div>
    </>
  );
}

export default Adminsignup;
