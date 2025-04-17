import React from "react";
import "./Sidebar.css";

type Role = {
  role: string | null
}

const Sidebar = (role: Role) => {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">Presente!</div>
      <nav className="sidebar-nav">
        <a href="/dashboard" className="sidebar-item">
          Dashboard
        </a>
        {role.role === "professor" ? (
          <a href="/generate-attendance" className="sidebar-item">
            Gerar Presença
          </a>
        ) : (
          <a href="#" className="sidebar-item">
            Marcar Presença
          </a>
        )}
        <a href="#" className="sidebar-item">
          Alunos
        </a>
        <a href="#" className="sidebar-item">
          Relatórios
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;
