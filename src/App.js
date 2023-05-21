import React from "react";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import Home from "./component/Home";
import Notestate from "./context/notes.js/NoteState";
import Login from "./component/Login";
import Flight from "./component/flightComponents/Flight";
import About from "./component/Aboutcomponent/About";
import Train from "./component/Train/Train";
import Bus from "./component/Bus/Bus";
import Notes from "./component/Notes";
import AddNote from "./component/AddNote";
import Note from "./component/Note";
import Signup from "./component/Signup";
import TravelState from "./context/travelContext/travel.js/TravelState";
import Accnolodgement from "./component/passengers/Accnolodgement";
import MyBookings from "./component/bookingdata/MyBookings";
import Mybookinghistory from "./component/bookingdata/Mybookinghistory";
import Userdetails from "./component/userInfo.js/Userdetails";
import WebsiteSuggestion from "./WebsiteSuggestion";
import Passengersdetails from "./component/travellers/Passengersdetails";
import Passengers from "./component/travellers/Passengers";
import AdminLogin from "./component/AdminPannel/AdminAuth/AdminLogin";
import Adminsignup from "./component/AdminPannel/AdminAuth/Adminsignup";
import Dashboard from "./component/AdminPannel/Dashboard/Dashboard";
import BookticketAdmin from "./component/AdminPannel/Bookticket/BookticketAdmin";
import Offers from "./component/Offers";
import Dummy from "./component/Dummy";
import BookingHistory from "./component/AdminPannel/Bookticket/BookingHistory";
import CheckPassenger from "./component/AdminPannel/Bookticket/CheckPassenger";
import Dashboardnew from "./dashboardnew/Dashboardnew";
import Fare from "./component/travellers/Fare";
import Contact from "./component/Contactus/Contact";

function App() {
  return (
    <>
      <TravelState>
        <Notestate>
          <Router>
            <Routes>
              <Route exact path="/offer" element={<Offers />}></Route>
              <Route
                exact
                path="/bookticketadmin"
                element={<BookticketAdmin />}
              />
              <Route exact path="/fare" element={<Fare />} />
              <Route exact path="/checkpassenger" element={ <CheckPassenger />} /> 
              <Route exact path="/signup" element={<Signup />} />
              <Route exact path="/flight" element={<Flight />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/bus" element={<Bus />} />
              <Route exact path="/" element={<Home />} />
              <Route exact path="/train" element={<Train />} />
              <Route exact path="/note" element={<Note />} />
              <Route exact path="/dummy" element={<Dummy />} />
              <Route
                exact
                path="/mybookinghistory"
                element={<Mybookinghistory />}
              />
              <Route
                exact
                path="/accnolodgement"
                element={<Accnolodgement />}
              />
              <Route exact path="/mybookings" element={<MyBookings />} />
              <Route
                exact
                path="/websitesuggestion"
                element={<WebsiteSuggestion />}
              />

              <Route exact path="/bookinghistory" element={<BookingHistory />} />
              <Route exact path="/userdetails" element={<Userdetails />} />
              <Route exact path="adminsignup" element={<Adminsignup />} />
              <Route exact path="passengerdetails" element={<Passengers />} />
              <Route exact path="/adminlogin" element={<AdminLogin />} />
              <Route exact path="/dashboard" element={<Dashboard />} />
              <Route exact path="/dashboardnew" element={<Dashboardnew />} />
              <Route exact path="/contact" element={<Contact />} />
            </Routes>
          </Router>
        </Notestate>
      </TravelState>
    </>
  );
}

export default App;
