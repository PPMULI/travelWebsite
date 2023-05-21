import React from "react";

function Navbar2() {
  return (
    <>
    <div className="navbar2">

      <ul class="nav justify-content-center">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/mybookinghistory">
            Your bookings
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/dummy">
            Cancel Journey
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Completed journey
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
    </div>
      <hr /><hr />
    </>
  );
}

export default Navbar2;
