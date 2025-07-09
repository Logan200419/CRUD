import React, { useState } from "react";

export default function TextField({
  label,
  value,
  onChange,
  placeholder = "",
  type = "text",
  required = false,
}) {
  const [isFocused, setIsFocused] = useState(false);

  const inputStyle = {
    padding: "12px 16px",
    fontSize: "16px",
    border: `2px solid ${isFocused ? "#3b82f6" : "#e5e7eb"}`,
    borderRadius: "8px",
    width: "100%",
    outline: "none",
    transition: "all 0.2s ease",
    backgroundColor: "#fafafa",
    fontFamily: "inherit",
    boxSizing: "border-box",
    ...(isFocused && {
      backgroundColor: "#ffffff",
      boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)",
    }),
  };

  const labelStyle = {
    display: "block",
    marginBottom: "8px",
    fontSize: "14px",
    fontWeight: "600",
    color: "#374151",
    letterSpacing: "0.025em",
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      {label && (
        <label style={labelStyle}>
          {label}
          {required && (
            <span style={{ color: "#ef4444", marginLeft: "4px" }}>*</span>
          )}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        style={inputStyle}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onMouseEnter={(e) => {
          if (!isFocused) {
            e.target.style.borderColor = "#9ca3af";
          }
        }}
        onMouseLeave={(e) => {
          if (!isFocused) {
            e.target.style.borderColor = "#e5e7eb";
          }
        }}
      />
    </div>
  );
}
