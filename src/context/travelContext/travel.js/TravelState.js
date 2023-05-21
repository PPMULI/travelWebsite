import React, { useState } from "react";
import passengerContext from "./travelContext";
// import { useNavigate } from "react-router-dom";

function TravelState(props) {
  const passengrsInitial = [];
  const [passengers, setpassengrs] = useState([]);
  const [credentials, setCredentials] = useState({
    email: localStorage.getItem("email"),
  });

  const [cancelreason, setCancelReason] = useState([]);

  const [traveller, setTraveller] = useState([]);

  // const navigate = useNavigate();

  // Book ticket
  const bookTicket = async (
    email,
    source,
    destination,
    passaadhar,
    passcontact,
    passemail,
    passname,
    passgender,
    journeytype,
    travellingdate,
    number,
    departuretime,
    destinationtime,
    company
  ) => {
    console.log("booked");

    const passenger = {
      _id: "644a65e66cf2ed64eeda219f",
      user: "643a53dc768c8025c7468b57",
      source: source,
      destination: destination,
      travellingdate: "25/fgf12/1999",
      passemail: "passenger@gmail.com",
      passname: "akshafa",
      journeytype: "train",
      passgender: "female",
      number: "123456",
      passcontact: "9765129019",
      passaadhar: "355773632886",
      __v: 0,
    };
    // console.log("Added")
    const response = await fetch(
      `http://localhost:5000/api/passenger/addpassenger`,
      {
        method: "POST", // *GET, POST, PUT, DELETE, etc.

        headers: {
          "Content-Type": "application/json",
          authtoken:
            // `${localStorage.getItem("token")}`
            // localStorage.getItem("token")
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQzYTUzZGM3NjhjODAyNWM3NDY4YjU3In0sImlhdCI6MTY4MjU5NDY2NH0.VdL18xeujgNH70QbFs5dOcdQ5fbLAjKT_GWj0WCFNWo",
        },

        body: JSON.stringify({
          email,
          source,
          destination,
          passaadhar,
          passcontact,
          passemail,
          passname,
          passgender,
          journeytype,
          travellingdate,
          number,
          departuretime,
          destinationtime,
          company,
        }), // body data type must match "Content-Type" header
      }
    );

    console.log(credentials);
    const json = await response.json();
    console.log(json);
    setpassengrs(passengers.concat(passenger));

    if (json.success) {
      alert((window.location.href = "/fare"));
    }
  };

  // get all notes
  const getalltickets = async (email1) => {
    console.log(email1);
    const { email } = credentials;
    console.log("dcfvghbjn");

    const responce = await fetch(
      "http://localhost:5000/api/passenger/fetchpassenger",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authtoken:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQzYTUzZGM3NjhjODAyNWM3NDY4YjU3In0sImlhdCI6MTY4MjU5NDY2NH0.VdL18xeujgNH70QbFs5dOcdQ5fbLAjKT_GWj0WCFNWo",
        },

        body: JSON.stringify({
          email: credentials.email,
        }),
      }
    );
    const json = await responce.json();
    setTraveller(json);
    console.log(json);
  };

  const [websuggestions, setwebsuggestions] = useState({
    email: "",
    suggestion: "",
  });

  // Edit note
  const editTicket = async (id, date) => {
    console.log(id, date);
    // API calls
    const response = await fetch(
      `http://localhost:5000/api/passenger/updatepassenger/${id}`,
      {
        method: "PUT", // *GET, POST, PUT, DELETE, etc.

        headers: {
          "Content-Type": "application/json",
          authtoken:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQzYTMxNWMyMjQ4NzcyNTg5NmU5ZGE0In0sImlhdCI6MTY4MTUzNTMyNH0.TIjFHc47U0JeEUxZtOLuu47-HdVz7Zb8e_WB-o1JLG4",
        },

        body: JSON.stringify({ date }), // body data type must match "Content-Type" header
      }
    );
    const json = await response.json();
    console.log(json);
    for (let i = 0; i < passengers.length; i++) {
      const element = passengers[i];
      if (element._id == id) {
        element.travellingdate = date;
      }
    }
  };

  // Delete/cancel ticket
  const deleteTicket = async (id) => {
    console.log("deletenote ");

    const response = await fetch(
      `http://localhost:5000/api/passenger/deletepassenger/${id}`,
      {
        method: "DELETE", // *GET, POST, PUT, DELETE, etc.

        headers: {
          "Content-Type": "application/json",
          authtoken:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQzYTMxNWMyMjQ4NzcyNTg5NmU5ZGE0In0sImlhdCI6MTY4MTUzNTMyNH0.TIjFHc47U0JeEUxZtOLuu47-HdVz7Zb8e_WB-o1JLG4",
        },
      }
    );
    const newTicket = passengers.filter((ticket) => {
      return ticket._id !== id;
    });
    console.log(newTicket);
    setpassengrs(newTicket);
  };

  // let navigate = useNavigate();
  const reasonofcancellation = async (e) => {
    e.preventDefault();
    const email1 = document.getElementById("email");
    const reason1 = document.getElementById("reason");
    const detailedreason1 = document.getElementById("detailedreason");

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
    checkLength(detailedreason1);

    const { email, detailedreason, reason } = cancelreason;
    const responce = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email,
        reason,
        detailedreason,
      }),
    });

    // success();

    const json = await responce.json();

    console.log(json);
    if (json.success) {
      alert("congractulation! your account is created");
    } else {
      alert("You already register with this Account");
    }
  };

  return (
    <passengerContext.Provider
      value={{
        passengers,
        bookTicket,
        editTicket,
        getalltickets,
        deleteTicket,
        setpassengrs,
        reasonofcancellation,
      }}
    >
      {props.children}
    </passengerContext.Provider>
  );
}

export default TravelState;
