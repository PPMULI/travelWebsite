import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Usercard() {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (
      !localStorage.getItem("token")
    ) {
      alert("Please login as user", 
      (window.location.href = "/"));
      // navigate("/")
    }
  });

  const getuser = async () => {
    console.log("addnote");
    const response = await fetch(`http://localhost:5000/api/auth/getuser`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.

      headers: {
        "Content-Type": "application/json",
        authtoken: localStorage.getItem("token"),
        // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQzYTUzY2E3NjhjODAyNWM3NDY4YjU0In0sImlhdCI6MTY4MTU0NzQwN30.SqRSVkpA1EAhQtICyhmr3FLeUoufdR78JPkvRy7K1OU",
      },
    });

    const json = await response.json();
    console.log(json);
    setUser(json.user);
  };

  useEffect(() => {
    getuser();
  }, []);

  return (
    <>
      <div className="usercard">
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                {user.email}
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <div className="card">
                  <div className="card-body userdetails">
                    <h5 className="card-title">Email: {user.email}</h5>
                    <hr />
                    <h5 className="card-title">Name: {user.name}</h5>
                    <hr />
                    <h5 className="card-title">Gender: {user.gender}</h5>
                    <hr />
                    <h5 className="card-title">Address: {user.address}</h5>
                    <hr />
                    <h5 className="card-title">Contact Number: {user.phone}</h5>
                    <hr />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Usercard;
