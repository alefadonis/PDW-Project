import React from "react";
import Sidebar from "./Sidebar";
import "./DashboardLayout.css";
import Topbar from "./Topbar";
import { getUserRole } from "../utils/auth";

type Props = {
  children: React.ReactNode;
};

const DashboardLayout: React.FC<Props> = ({ children }) => {

  const role = getUserRole();
  
  return (
    <div className="dashboard-layout">
      <Sidebar role={role}/>
      <div className="main-content">
        <Topbar />
        <div className="content-body">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
