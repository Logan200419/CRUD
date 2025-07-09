import "./Homepage.css";
import { useState } from "react";

function HomePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedModule, setSelectedModule] = useState("Homepage");

  // Sample data for dashboard
  const dashboardData = {
    totalStudents: 1247,
    outstandingPayments: 23,
    totalCourses: 15,
    activeStudents: 1205,
  };

  const sidebarItems = [
    { id: "dashboard", name: "Dashboard", icon: "📺" },
    { id: "student-management", name: "Student Management", icon: "👥" },
    { id: "course-management", name: "Course Management", icon: "📚" },
    { id: "accounts", name: "Accounts", icon: "💰" },
    { id: "about", name: "About", icon: "ℹ️" },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleModuleSelect = (moduleId) => {
    setSelectedModule(moduleId);
    if (window.innerWidth <= 768) {
      setIsSidebarOpen(false);
    }
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
              onClick={() => handleModuleSelect(item.id)}
              style={{
                padding: "12px 20px",
                margin: "4px 0",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                backgroundColor:
                  selectedModule === item.id ? "#3b82f6" : "transparent",
                borderRight:
                  selectedModule === item.id
                    ? "3px solid #60a5fa"
                    : "3px solid transparent",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                if (selectedModule !== item.id) {
                  e.target.style.backgroundColor = "#374151";
                }
              }}
              onMouseLeave={(e) => {
                if (selectedModule !== item.id) {
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
              Dashboard
            </h1>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
            {/* About Link */}
            <a
              href="#about"
              style={{
                color: "#6b7280",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: "500",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#3b82f6")}
              onMouseLeave={(e) => (e.target.style.color = "#6b7280")}
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

        {/* Dashboard Content */}
        <main style={{ padding: "32px" }}>
          {/* Dashboard Stats Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
              marginBottom: "32px",
            }}
          >
            {/* Total Students Card */}
            <div
              style={{
                backgroundColor: "white",
                padding: "24px",
                borderRadius: "12px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
                border: "1px solid #e5e7eb",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 8px 25px rgba(0, 0, 0, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.05)";
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <div>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "14px",
                      color: "#6b7280",
                      fontWeight: "500",
                    }}
                  >
                    Total Students
                  </p>
                  <p
                    style={{
                      margin: "8px 0 0 0",
                      fontSize: "32px",
                      fontWeight: "700",
                      color: "#1f2937",
                    }}
                  >
                    {dashboardData.totalStudents.toLocaleString()}
                  </p>
                  <p
                    style={{
                      margin: "4px 0 0 0",
                      fontSize: "12px",
                      color: "#10b981",
                    }}
                  >
                    +12% from last month
                  </p>
                </div>
                <div
                  style={{
                    padding: "12px",
                    backgroundColor: "#dbeafe",
                    borderRadius: "8px",
                  }}
                >
                  <span style={{ fontSize: "24px" }}>👥</span>
                </div>
              </div>
            </div>

            {/* Outstanding Payments Card */}
            <div
              style={{
                backgroundColor: "white",
                padding: "24px",
                borderRadius: "12px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
                border: "1px solid #e5e7eb",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 8px 25px rgba(0, 0, 0, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.05)";
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <div>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "14px",
                      color: "#6b7280",
                      fontWeight: "500",
                    }}
                  >
                    Outstanding Payments
                  </p>
                  <p
                    style={{
                      margin: "8px 0 0 0",
                      fontSize: "32px",
                      fontWeight: "700",
                      color: "#dc2626",
                    }}
                  >
                    {dashboardData.outstandingPayments}
                  </p>
                  <p
                    style={{
                      margin: "4px 0 0 0",
                      fontSize: "12px",
                      color: "#dc2626",
                    }}
                  >
                    Requires attention
                  </p>
                </div>
                <div
                  style={{
                    padding: "12px",
                    backgroundColor: "#fee2e2",
                    borderRadius: "8px",
                  }}
                >
                  <span style={{ fontSize: "24px" }}>⚠️</span>
                </div>
              </div>
            </div>

            {/* Total Courses Card */}
            <div
              style={{
                backgroundColor: "white",
                padding: "24px",
                borderRadius: "12px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
                border: "1px solid #e5e7eb",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 8px 25px rgba(0, 0, 0, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.05)";
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <div>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "14px",
                      color: "#6b7280",
                      fontWeight: "500",
                    }}
                  >
                    Total Courses
                  </p>
                  <p
                    style={{
                      margin: "8px 0 0 0",
                      fontSize: "32px",
                      fontWeight: "700",
                      color: "#1f2937",
                    }}
                  >
                    {dashboardData.totalCourses}
                  </p>
                  <p
                    style={{
                      margin: "4px 0 0 0",
                      fontSize: "12px",
                      color: "#6b7280",
                    }}
                  >
                    Active courses
                  </p>
                </div>
                <div
                  style={{
                    padding: "12px",
                    backgroundColor: "#f0fdf4",
                    borderRadius: "8px",
                  }}
                >
                  <span style={{ fontSize: "24px" }}>📚</span>
                </div>
              </div>
            </div>

            {/* Active Students Card */}
            <div
              style={{
                backgroundColor: "white",
                padding: "24px",
                borderRadius: "12px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
                border: "1px solid #e5e7eb",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 8px 25px rgba(0, 0, 0, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.05)";
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <div>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "14px",
                      color: "#6b7280",
                      fontWeight: "500",
                    }}
                  >
                    Active Students
                  </p>
                  <p
                    style={{
                      margin: "8px 0 0 0",
                      fontSize: "32px",
                      fontWeight: "700",
                      color: "#1f2937",
                    }}
                  >
                    {dashboardData.activeStudents.toLocaleString()}
                  </p>
                  <p
                    style={{
                      margin: "4px 0 0 0",
                      fontSize: "12px",
                      color: "#10b981",
                    }}
                  >
                    96.6% active rate
                  </p>
                </div>
                <div
                  style={{
                    padding: "12px",
                    backgroundColor: "#ecfdf5",
                    borderRadius: "8px",
                  }}
                >
                  <span style={{ fontSize: "24px" }}>✅</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions Section */}
          <div
            style={{
              backgroundColor: "white",
              padding: "24px",
              borderRadius: "12px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
              border: "1px solid #e5e7eb",
            }}
          >
            <h3
              style={{
                margin: "0 0 20px 0",
                fontSize: "18px",
                fontWeight: "600",
                color: "#1f2937",
              }}
            >
              Quick Actions
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "16px",
              }}
            >
              <button
                style={{
                  padding: "16px",
                  backgroundColor: "#3b82f6",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: "14px",
                  fontWeight: "500",
                  cursor: "pointer",
                  transition: "background-color 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "#2563eb")
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "#3b82f6")
                }
              >
                + Add New Student
              </button>
              <button
                style={{
                  padding: "16px",
                  backgroundColor: "#10b981",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: "14px",
                  fontWeight: "500",
                  cursor: "pointer",
                  transition: "background-color 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "#059669")
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "#10b981")
                }
              >
                Process Payments
              </button>
              <button
                style={{
                  padding: "16px",
                  backgroundColor: "#f59e0b",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: "14px",
                  fontWeight: "500",
                  cursor: "pointer",
                  transition: "background-color 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "#d97706")
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "#f59e0b")
                }
              >
                Generate Reports
              </button>
            </div>
          </div>
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
}

export default HomePage;
