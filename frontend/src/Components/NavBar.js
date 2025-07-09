import React from "react";

function NavBar({
  onAboutClick,
  userProfile = { name: "Admin User", role: "Administrator", avatar: "A" },
}) {
  return (
    <nav
      style={{
        backgroundColor: "white",
        padding: "16px 32px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 100,
        borderBottom: "1px solid #e5e7eb",
      }}
    >
      {/* Left Section - Title */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            padding: "8px 12px",
            backgroundColor: "#3b82f6",
            borderRadius: "8px",
            marginRight: "16px",
          }}
        >
          <span style={{ color: "white", fontSize: "18px", fontWeight: "700" }}>
            📚
          </span>
        </div>
        <div>
          <h1
            style={{
              margin: 0,
              fontSize: "24px",
              fontWeight: "600",
              color: "#1f2937",
            }}
          >
            Student Management System
          </h1>
          <p style={{ margin: 0, fontSize: "14px", color: "#6b7280" }}>
            Dashboard Overview
          </p>
        </div>
      </div>

      {/* Right Section - Navigation & Profile */}
      <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
        {/* Search Bar */}
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
          }}
        >
          <input
            type="text"
            placeholder="Search students, courses..."
            style={{
              padding: "8px 16px 8px 40px",
              border: "1px solid #d1d5db",
              borderRadius: "8px",
              fontSize: "14px",
              width: "280px",
              outline: "none",
              transition: "border-color 0.2s ease",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#3b82f6")}
            onBlur={(e) => (e.target.style.borderColor = "#d1d5db")}
          />
          <span
            style={{
              position: "absolute",
              left: "12px",
              color: "#9ca3af",
              fontSize: "16px",
            }}
          >
            🔍
          </span>
        </div>

        {/* Notifications */}
        <div
          style={{
            position: "relative",
            padding: "8px",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "background-color 0.2s ease",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#f3f4f6")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
        >
          <span style={{ fontSize: "20px" }}>🔔</span>
          <div
            style={{
              position: "absolute",
              top: "4px",
              right: "4px",
              width: "8px",
              height: "8px",
              backgroundColor: "#ef4444",
              borderRadius: "50%",
            }}
          />
        </div>

        {/* About Link */}
        <a
          href="#about"
          onClick={onAboutClick}
          style={{
            color: "#6b7280",
            textDecoration: "none",
            fontSize: "14px",
            fontWeight: "500",
            padding: "8px 12px",
            borderRadius: "6px",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.color = "#3b82f6";
            e.target.style.backgroundColor = "#f0f9ff";
          }}
          onMouseLeave={(e) => {
            e.target.style.color = "#6b7280";
            e.target.style.backgroundColor = "transparent";
          }}
        >
          About
        </a>

        {/* Profile Card */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "8px 16px",
            backgroundColor: "#f9fafb",
            borderRadius: "12px",
            cursor: "pointer",
            transition: "all 0.2s ease",
            border: "1px solid #e5e7eb",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#f3f4f6";
            e.target.style.transform = "translateY(-1px)";
            e.target.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#f9fafb";
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = "none";
          }}
        >
          <div
            style={{
              width: "36px",
              height: "36px",
              backgroundColor: "#3b82f6",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "16px",
              fontWeight: "600",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            {userProfile.avatar}
          </div>
          <div style={{ textAlign: "left" }}>
            <p
              style={{
                margin: 0,
                fontSize: "14px",
                fontWeight: "600",
                color: "#1f2937",
              }}
            >
              {userProfile.name}
            </p>
            <p style={{ margin: 0, fontSize: "12px", color: "#6b7280" }}>
              {userProfile.role}
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <span
              style={{
                color: "#9ca3af",
                fontSize: "12px",
                transform: "rotate(0deg)",
                transition: "transform 0.2s ease",
              }}
            >
              ▼
            </span>
          </div>
        </div>

        {/* Settings Icon */}
        <div
          style={{
            padding: "8px",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "background-color 0.2s ease",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#f3f4f6")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
        >
          <span style={{ fontSize: "18px", color: "#6b7280" }}>⚙️</span>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
