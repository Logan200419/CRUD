import React, { useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import "../Assets/Homepage.css";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const sidebarItems = [
    { id: "dashboard", name: "Dashboard", icon: "📺", path: "/dashboard" },
    {
      id: "students",
      name: "Student Management",
      icon: "👥",
      path: "/dashboard/students",
    },
    {
      id: "courses",
      name: "Course Management",
      icon: "📚",
      path: "/dashboard/courses",
    },
    {
      id: "accounts",
      name: "Accounts",
      icon: "💰",
      path: "/dashboard/accounts",
    },
    { id: "about", name: "About", icon: "ℹ️", path: "/dashboard/about" },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    if (window.innerWidth <= 768) {
      setIsSidebarOpen(false);
    }
  };

  const getCurrentPageTitle = () => {
    const currentPath = location.pathname;
    if (currentPath === "/dashboard") return "Dashboard";
    if (currentPath.includes("/students")) return "Student Management";
    if (currentPath.includes("/courses")) return "Course Management";
    if (currentPath.includes("/accounts")) return "Accounts";
    if (currentPath.includes("/about")) return "About";
    return "Dashboard";
  };

  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: "#f8fafc",
      }}
    >
      {/* Sidebar */}
      <div
        style={{
          width: isSidebarOpen ? "280px" : "70px",
          backgroundColor: "#1f2937",
          color: "white",
          transition: "width 0.3s ease",
          position: "fixed",
          height: "100vh",
          zIndex: 1000,
          boxShadow: "2px 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Sidebar Header */}
        <div
          style={{
            padding: "20px",
            borderBottom: "1px solid #374151",
            display: "flex",
            alignItems: "center",
            justifyContent: isSidebarOpen ? "space-between" : "center",
          }}
        >
          {isSidebarOpen && (
            <div>
              <h2 style={{ margin: 0, fontSize: "20px", fontWeight: "700" }}>
                Student CMS
              </h2>
              <p
                style={{
                  margin: "4px 0 0 0",
                  fontSize: "12px",
                  color: "#9ca3af",
                }}
              >
                Management System
              </p>
            </div>
          )}
          <button
            onClick={toggleSidebar}
            style={{
              background: "transparent",
              border: "none",
              color: "white",
              fontSize: "18px",
              cursor: "pointer",
              padding: "8px",
              borderRadius: "6px",
              transition: "background-color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#374151")}
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor = "transparent")
            }
          >
            {isSidebarOpen ? "←" : "→"}
          </button>
        </div>

        {/* Sidebar Menu */}
        <nav style={{ padding: "20px 0" }}>
          {sidebarItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleNavigation(item.path)}
              style={{
                padding: "12px 20px",
                margin: "4px 0",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                backgroundColor: isActiveRoute(item.path)
                  ? "#3b82f6"
                  : "transparent",
                borderRight: isActiveRoute(item.path)
                  ? "3px solid #60a5fa"
                  : "3px solid transparent",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                if (!isActiveRoute(item.path)) {
                  e.target.style.backgroundColor = "#374151";
                }
              }}
              onMouseLeave={(e) => {
                if (!isActiveRoute(item.path)) {
                  e.target.style.backgroundColor = "transparent";
                }
              }}
            >
              <span
                style={{
                  fontSize: "18px",
                  marginRight: isSidebarOpen ? "12px" : "0",
                }}
              >
                {item.icon}
              </span>
              {isSidebarOpen && (
                <span style={{ fontSize: "14px", fontWeight: "500" }}>
                  {item.name}
                </span>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content Area */}
      <div
        style={{
          marginLeft: isSidebarOpen ? "280px" : "70px",
          flex: 1,
          transition: "margin-left 0.3s ease",
        }}
      >
        {/* Top Navigation Bar */}
        <header
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
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <h1
              style={{
                margin: 0,
                fontSize: "24px",
                fontWeight: "600",
                color: "#1f2937",
              }}
            >
              {getCurrentPageTitle()}
            </h1>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
            {/* Search Bar */}
            <div style={{ position: "relative" }}>
              <input
                type="text"
                placeholder="Search..."
                style={{
                  padding: "8px 16px 8px 40px",
                  borderRadius: "8px",
                  border: "1px solid #d1d5db",
                  fontSize: "14px",
                  width: "300px",
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
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#9ca3af",
                  fontSize: "16px",
                }}
              >
                🔍
              </span>
            </div>

            {/* Profile Card */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "8px 16px",
                backgroundColor: "#f9fafb",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "background-color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#f3f4f6")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#f9fafb")}
            >
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  backgroundColor: "#3b82f6",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                A
              </div>
              <div>
                <p
                  style={{
                    margin: 0,
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#1f2937",
                  }}
                >
                  Admin User
                </p>
                <p style={{ margin: 0, fontSize: "12px", color: "#6b7280" }}>
                  Administrator
                </p>
              </div>
              <span style={{ color: "#9ca3af", fontSize: "12px" }}>▼</span>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main style={{ padding: "32px" }}>
          <Outlet />
        </main>
      </div>

      {/* Mobile Overlay */}
      {isSidebarOpen && window.innerWidth <= 768 && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 999,
          }}
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default DashboardLayout;
