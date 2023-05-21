import React from "react";
import Sidebar from "./Sidebar";
import { useEffect } from "react";
import DashboardCard from "./DashboardCard";
import Sidebar2 from "./Sidebar2";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate()
  useEffect(() => {
    if (
      !localStorage.getItem("authtokenadmin")
    ) {
      alert("Entry Deny!");
      navigate("/");
    }
  }, []);
  return (
    <>
      <Sidebar2 />
      <DashboardCard />
      <div className="adminnavdashboard">
        <div className="container">
          <div className="row"></div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
