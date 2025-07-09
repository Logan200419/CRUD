import React, { useState } from "react";

function SideBar({
  isOpen = true,
  onToggle,
  selectedModule = "homepage",
  onModuleSelect,
  modules = [
    { id: "homepage", name: "Homepage", icon: "🏠" },
    { id: "student-management", name: "Student Management", icon: "👥" },
    { id: "course-management", name: "Course Management", icon: "📚" },
    { id: "accounts", name: "Accounts", icon: "💰" },
    { id: "about", name: "About", icon: "ℹ️" },
  ],
}) {
  const [hoveredModule, setHoveredModule] = useState(null);

  const handleModuleClick = (moduleId) => {
    if (onModuleSelect) {
      onModuleSelect(moduleId);
    }
  };

  return (
    <div
      style={{
        width: isOpen ? "280px" : "70px",
        backgroundColor: "#1f2937",
        color: "white",
        transition: "width 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        position: "fixed",
        height: "100vh",
        zIndex: 1000,
        boxShadow: "2px 0 10px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Sidebar Header */}
      <div
        style={{
          padding: "20px",
          borderBottom: "1px solid #374151",
          display: "flex",
          alignItems: "center",
          justifyContent: isOpen ? "space-between" : "center",
          minHeight: "80px",
        }}
      >
        {isOpen && (
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "4px",
              }}
            >
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  backgroundColor: "#3b82f6",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: "12px",
                }}
              >
                <span style={{ fontSize: "16px" }}>📚</span>
              </div>
              <h2 style={{ margin: 0, fontSize: "20px", fontWeight: "700" }}>
                Student CMS
              </h2>
            </div>
            <p
              style={{
                margin: "4px 0 0 44px",
                fontSize: "12px",
                color: "#9ca3af",
              }}
            >
              Management System
            </p>
          </div>
        )}

        <button
          onClick={onToggle}
          style={{
            background: "rgba(75, 85, 99, 0.5)",
            border: "none",
            color: "white",
            fontSize: "16px",
            cursor: "pointer",
            padding: "8px",
            borderRadius: "6px",
            transition: "all 0.2s ease",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "32px",
            height: "32px",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "rgba(75, 85, 99, 0.8)";
            e.target.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "rgba(75, 85, 99, 0.5)";
            e.target.style.transform = "scale(1)";
          }}
        >
          {isOpen ? "‹" : "›"}
        </button>
      </div>

      {/* Navigation Menu */}
      <nav style={{ flex: 1, padding: "20px 0", overflow: "hidden" }}>
        {modules.map((module) => (
          <div
            key={module.id}
            onClick={() => handleModuleClick(module.id)}
            onMouseEnter={() => setHoveredModule(module.id)}
            onMouseLeave={() => setHoveredModule(null)}
            style={{
              padding: "12px 20px",
              margin: "2px 8px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              backgroundColor:
                selectedModule === module.id
                  ? "#3b82f6"
                  : hoveredModule === module.id
                  ? "rgba(75, 85, 99, 0.5)"
                  : "transparent",
              borderRadius: "8px",
              transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Active indicator */}
            {selectedModule === module.id && (
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: "4px",
                  backgroundColor: "#60a5fa",
                  borderRadius: "0 4px 4px 0",
                }}
              />
            )}

            <div
              style={{
                fontSize: "20px",
                marginRight: isOpen ? "12px" : "0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "24px",
                height: "24px",
                transition: "transform 0.2s ease",
                transform:
                  hoveredModule === module.id ? "scale(1.1)" : "scale(1)",
              }}
            >
              {module.icon}
            </div>

            {isOpen && (
              <div style={{ flex: 1, minWidth: 0 }}>
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: selectedModule === module.id ? "600" : "500",
                    color: selectedModule === module.id ? "white" : "#e5e7eb",
                    display: "block",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {module.name}
                </span>
                {selectedModule === module.id && (
                  <div
                    style={{
                      width: "6px",
                      height: "6px",
                      backgroundColor: "#60a5fa",
                      borderRadius: "50%",
                      marginTop: "2px",
                    }}
                  />
                )}
              </div>
            )}

            {/* Hover tooltip for collapsed sidebar */}
            {!isOpen && hoveredModule === module.id && (
              <div
                style={{
                  position: "absolute",
                  left: "70px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  backgroundColor: "#374151",
                  color: "white",
                  padding: "8px 12px",
                  borderRadius: "6px",
                  fontSize: "12px",
                  fontWeight: "500",
                  whiteSpace: "nowrap",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                  zIndex: 1001,
                  border: "1px solid #4b5563",
                }}
              >
                {module.name}
                <div
                  style={{
                    position: "absolute",
                    left: "-5px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: 0,
                    height: 0,
                    borderTop: "5px solid transparent",
                    borderBottom: "5px solid transparent",
                    borderRight: "5px solid #374151",
                  }}
                />
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div
        style={{
          padding: "20px",
          borderTop: "1px solid #374151",
          display: "flex",
          alignItems: "center",
          justifyContent: isOpen ? "space-between" : "center",
        }}
      >
        {isOpen && (
          <div>
            <p style={{ margin: 0, fontSize: "12px", color: "#9ca3af" }}>
              Version 1.0.0
            </p>
            <p style={{ margin: 0, fontSize: "10px", color: "#6b7280" }}>
              © 2025 Student CMS
            </p>
          </div>
        )}

        <div
          style={{
            padding: "8px",
            borderRadius: "6px",
            cursor: "pointer",
            transition: "background-color 0.2s ease",
          }}
          onMouseEnter={(e) =>
            (e.target.style.backgroundColor = "rgba(75, 85, 99, 0.5)")
          }
          onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
        >
          <span style={{ fontSize: "16px" }}>⚙️</span>
        </div>
      </div>
    </div>
  );
}

// Legacy component for backward compatibility
function SideBarContent({ onClose }) {
  return <SideBar isOpen={true} onToggle={onClose} />;
}

export default SideBar;
export { SideBarContent };
