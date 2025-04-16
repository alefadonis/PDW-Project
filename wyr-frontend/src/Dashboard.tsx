import React from "react";
import DashboardLayout from "./components/DashboardLayout";
import LineWithGradientGraph from "./components/LineWithGradientGraph";
import LineGraph from "./components/LineGraph";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <h1>Dashboard</h1>
      <div className="dashboard-container">
        <div>
          <div className="graph-card">
            <LineWithGradientGraph />
          </div>
          <div className="graph-row">
            <div className="graph-card">
              <LineGraph />
            </div>
            <div className="graph-card">
              <LineGraph />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
