import React from "react";

const Dashboard = () => {
  // Sample data for dashboard
  const dashboardData = {
    totalStudents: 1247,
    outstandingPayments: 23,
    totalCourses: 15,
    activeStudents: 1205,
  };

  return (
    <div>
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
                {dashboardData.totalStudents}
              </p>
              <p
                style={{
                  margin: "4px 0 0 0",
                  fontSize: "12px",
                  color: "#10b981",
                  fontWeight: "500",
                }}
              >
                +12% from last month
              </p>
            </div>
            <div
              style={{
                width: "48px",
                height: "48px",
                backgroundColor: "#dbeafe",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "24px",
              }}
            >
              👥
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
                  color: "#1f2937",
                }}
              >
                {dashboardData.outstandingPayments}
              </p>
              <p
                style={{
                  margin: "4px 0 0 0",
                  fontSize: "12px",
                  color: "#ef4444",
                  fontWeight: "500",
                }}
              >
                Requires attention
              </p>
            </div>
            <div
              style={{
                width: "48px",
                height: "48px",
                backgroundColor: "#fee2e2",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "24px",
              }}
            >
              💰
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
                  color: "#10b981",
                  fontWeight: "500",
                }}
              >
                2 new courses added
              </p>
            </div>
            <div
              style={{
                width: "48px",
                height: "48px",
                backgroundColor: "#fef3c7",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "24px",
              }}
            >
              📚
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
                {dashboardData.activeStudents}
              </p>
              <p
                style={{
                  margin: "4px 0 0 0",
                  fontSize: "12px",
                  color: "#10b981",
                  fontWeight: "500",
                }}
              >
                96.6% enrollment rate
              </p>
            </div>
            <div
              style={{
                width: "48px",
                height: "48px",
                backgroundColor: "#d1fae5",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "24px",
              }}
            >
              ✅
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity and Quick Actions */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "24px",
          marginBottom: "32px",
        }}
      >
        {/* Recent Activity */}
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
            Recent Activity
          </h3>
          <div style={{ space: "16px" }}>
            {[
              {
                action: "New student enrollment",
                name: "Alice Johnson",
                time: "2 minutes ago",
                type: "success",
              },
              {
                action: "Payment received",
                name: "Robert Brown",
                time: "15 minutes ago",
                type: "info",
              },
              {
                action: "Course completion",
                name: "Emma Davis",
                time: "1 hour ago",
                type: "success",
              },
              {
                action: "Payment overdue",
                name: "Michael Wilson",
                time: "2 hours ago",
                type: "warning",
              },
            ].map((activity, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "12px 0",
                  borderBottom: index < 3 ? "1px solid #f3f4f6" : "none",
                }}
              >
                <div>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "14px",
                      fontWeight: "500",
                      color: "#1f2937",
                    }}
                  >
                    {activity.action}
                  </p>
                  <p
                    style={{
                      margin: "2px 0 0 0",
                      fontSize: "12px",
                      color: "#6b7280",
                    }}
                  >
                    {activity.name}
                  </p>
                </div>
                <span
                  style={{
                    fontSize: "12px",
                    color: "#9ca3af",
                  }}
                >
                  {activity.time}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
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
              display: "flex",
              flexDirection: "column",
              gap: "12px",
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
                textAlign: "left",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#2563eb")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#3b82f6")}
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
                textAlign: "left",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#059669")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#10b981")}
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
                textAlign: "left",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#d97706")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#f59e0b")}
            >
              Generate Reports
            </button>
            <button
              style={{
                padding: "16px",
                backgroundColor: "#8b5cf6",
                color: "white",
                border: "none",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: "500",
                cursor: "pointer",
                transition: "background-color 0.2s ease",
                textAlign: "left",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#7c3aed")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#8b5cf6")}
            >
              View Analytics
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
