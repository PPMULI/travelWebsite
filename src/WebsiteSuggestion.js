import React, { useContext, useEffect, useState } from "react";
import Sidebar from "./component/Sidebar";
import passengerContext from "./context/travelContext/travel.js/travelContext";

function WebsiteSuggestion() {
  const [credentials, setCredentials] = useState({
    email: localStorage.getItem("email"),
    suggestion: "",
  });

  const [suggestions, setSuggestions] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email1 = document.getElementById("email");
    const suggestion1 = document.getElementById("suggestion");

    // success function
    function showSuccess(input, message) {
      const formControl = input.parentElement;
      formControl.className = "form-control success";
      const small = formControl.querySelector("small");
    }

    // error function
    function showError(input, message) {
      const formControl = input.parentElement;
      formControl.className = "form-control error";
      const small = formControl.querySelector("small");
      small.innerText = message;
      small.classList.add("errText");
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
    checkLength(suggestion1);

    const { email, suggestion } = credentials;

    if (success == 1 && error == 0) {
      const responce = await fetch(
        "http://localhost:5000/api/suggestion/givesuggestion",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            email,
            suggestion,
          }),
        }
      );

      // success();

      const json = await responce.json();
      setSuggestions(json.suggestion);

      console.log(json.suggestion);
      if (json.success) {
        alert("Thank You For Feedback");
        // navigate("/login")
      }
    }
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Sidebar />
      <h1 className="suggestion">Give Your Suggestion</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8">
            <form className="suggestionform" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Email add
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={localStorage.getItem("email")}
                  disabled
                  onChange={onChange}
                  className="form-control suggestioninput"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Example textarea
                </label>
                <textarea
                  className="form-control suggestioninput"
                  onChange={onChange}
                  name="suggestion"
                  id="suggestion"
                  rows="3"
                ></textarea>
              </div>

              <button
                className="btn btn-primary"
                type="submit"
                id="suggestionbutton"
                // onClick={handleClick}
              >
                Button
              </button>
            </form>
          </div>
          <div className="col-lg-3"></div>
        </div>

        <div className="container">
          <div className="row">
            {suggestions &&
              suggestions.map((value) => {
                console.log(value);
                return (
                  <>
                    <div className="col-lg-4 suggestioncard">
                      <div class="card suggestions">
                        <div class="card-body">
                          <h5 class="card-title">
                            <u>Customer Email</u>:{value.email}
                          </h5>
                          <h6 class="card-subtitle mb-2 text-body-secondary">
                            <u> Suggestion</u> : {value.suggestion}
                          </h6>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export default WebsiteSuggestion;
