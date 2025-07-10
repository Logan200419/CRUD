import { useState } from "react";
import TextField from "./TextField";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginBox = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const nav = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    try {
      const res = await axios.post("http://localhost:8081/apilogin", {
        Username: username,
        Password: password,
      });
      // Assuming the API returns the correct password in res.data.Password
      console.log(res.data);
      if (password == res.data["password"]) {
        nav("/about");
      } else {
        setError("Invalid username or password.");
      }
    } catch (e) {
      setError("Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      style={{
        padding: "40px",
        borderRadius: "16px",
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(10px)",
        boxShadow:
          "0 20px 40px rgba(0, 0, 0, 0.1), 0 8px 24px rgba(0, 0, 0, 0.08)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        maxWidth: "400px",
        width: "100%",
        margin: "0 auto",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "32px" }}>
        <h1
          style={{
            fontSize: "28px",
            fontWeight: "700",
            color: "#1f2937",
            margin: "0 0 8px 0",
            letterSpacing: "-0.025em",
          }}
        >
          Welcome Back
        </h1>
        <p
          style={{
            fontSize: "16px",
            color: "#6b7280",
            margin: "0",
            fontWeight: "400",
          }}
        >
          Sign in to your account to continue
        </p>
      </div>

      <form onSubmit={handleLogin}>
        <TextField
          label="Username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
          required
        />

        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
        />

        {error && (
          <div
            style={{ color: "red", marginBottom: "8px", textAlign: "center" }}
          >
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading}
          style={{
            width: "100%",
            height: "48px",
            backgroundColor: isLoading ? "#9ca3af" : "#3b82f6",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            fontWeight: "600",
            cursor: isLoading ? "not-allowed" : "pointer",
            transition: "all 0.2s ease",
            marginTop: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
          }}
          onMouseEnter={(e) => {
            if (!isLoading) {
              e.target.style.backgroundColor = "#2563eb";
              e.target.style.transform = "translateY(-1px)";
              e.target.style.boxShadow = "0 4px 12px rgba(59, 130, 246, 0.4)";
            }
          }}
          onMouseLeave={(e) => {
            if (!isLoading) {
              e.target.style.backgroundColor = "#3b82f6";
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "none";
            }
          }}
        >
          {isLoading ? (
            <>
              <div
                style={{
                  width: "16px",
                  height: "16px",
                  border: "2px solid rgba(255, 255, 255, 0.3)",
                  borderTop: "2px solid white",
                  borderRadius: "50%",
                  animation: "spin 1s linear infinite",
                }}
              />
              Signing in...
            </>
          ) : (
            "Sign In"
          )}
        </button>
      </form>

      <div
        style={{
          textAlign: "center",
          marginTop: "24px",
          paddingTop: "24px",
          borderTop: "1px solid #e5e7eb",
        }}
      >
        <a
          href="/"
          style={{
            color: "#3b82f6",
            textDecoration: "none",
            fontSize: "14px",
            fontWeight: "500",
            transition: "color 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.color = "#2563eb";
          }}
          onMouseLeave={(e) => {
            e.target.style.color = "#3b82f6";
          }}
        >
          Forgot your password?
        </a>
      </div>
    </div>
  );
};

export default LoginBox;
