import React, { useState } from "react";
const modules = ["Dashboard", "Users", "Settings", "Reports", "Logout"];

function SideBarContent({ onClose }) {
  return (
    <div
      style={{
        width: 250,
        height: "100vh",
        background: "#222",
        color: "#fff",
        padding: 20,
        position: "fixed",
        top: 0,
        left: 0,
        boxShadow: "2px 0 5px rgba(0,0,0,0.2)",
      }}
    >
      <button
        onClick={onClose}
        style={{
          background: "transparent",
          border: "none",
          color: "#fff",
          fontSize: 24,
          position: "absolute",
          top: 10,
          right: 10,
          cursor: "pointer",
        }}
        aria-label="Close sidebar"
      >
        &times;
      </button>
      <h2 style={{ marginTop: 40 }}>Modules</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {modules.map((module) => (
          <li
            key={module}
            style={{ margin: "20px 0", fontSize: 18 }}
            onClick={() => console.log(module)}
          >
            {module}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SideBar() {
  const [open, setOpen] = useState(true);

  return (
    <>
      {open && <SideBarContent onClose={() => setOpen(false)} />}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          style={{
            top: 200,
            left: 0,
            zIndex: 1000,
            background: "#222",
            color: "#fff",
            border: "none",
            borderRadius: 4,
            padding: "8px 12px",
            cursor: "pointer",
          }}
          aria-label="Open sidebar"
        >
          &#9776;
        </button>
      )}
    </>
  );
}

export default SideBar;
