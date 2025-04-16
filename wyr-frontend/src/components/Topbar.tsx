import React from "react";
import "./Topbar.css";

const Topbar = () => {
  return (
    <header className="topbar">
      <div className="search-box">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="user-info">
        <span className="user-name">Jone Aly</span>
        <span className="user-role">Admin</span>
        <img
          className="avatar"
          src="https://i.pravatar.cc/40?img=32"
          alt="avatar"
        />
      </div>
    </header>
  );
};

export default Topbar;
