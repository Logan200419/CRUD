import LoginBox from "../Components/LoginBox";
const logo = require("../Assets/loginbg.jpg");

function LoginPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${logo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        position: "relative",
      }}
    >
      {/* Decorative elements */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "10%",
          width: "100px",
          height: "100px",
          background:
            "linear-gradient(45deg, rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.3))",
          borderRadius: "50%",
          filter: "blur(40px)",
          animation: "float 6s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          right: "15%",
          width: "150px",
          height: "150px",
          background:
            "linear-gradient(45deg, rgba(236, 72, 153, 0.3), rgba(59, 130, 246, 0.3))",
          borderRadius: "50%",
          filter: "blur(60px)",
          animation: "float 8s ease-in-out infinite reverse",
        }}
      />

      {/* Main content container */}
      <div
        style={{
          width: "100%",
          maxWidth: "450px",
          zIndex: 1,
        }}
      >
        {/* Brand/Logo section */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              display: "inline-block",
              padding: "12px",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderRadius: "16px",
              marginBottom: "16px",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                backgroundColor: "#3b82f6",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
                fontWeight: "bold",
                color: "white",
              }}
            >
              📚
            </div>
          </div>
          <h2
            style={{
              color: "white",
              fontSize: "24px",
              fontWeight: "700",
              margin: "0",
              textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
              letterSpacing: "0.025em",
            }}
          >
            Student Management System
          </h2>
          <p
            style={{
              color: "rgba(255, 255, 255, 0.8)",
              fontSize: "16px",
              margin: "8px 0 0 0",
              textShadow: "0 1px 2px rgba(0, 0, 0, 0.3)",
            }}
          >
            Secure access to your dashboard
          </p>
        </div>

        {/* Login component */}
        <LoginBox />

        {/* Footer */}
        <div
          style={{
            textAlign: "center",
            marginTop: "24px",
            color: "rgba(255, 255, 255, 0.7)",
            fontSize: "14px",
            textShadow: "0 1px 2px rgba(0, 0, 0, 0.3)",
          }}
        >
          <p style={{ margin: "0" }}>
            © 2025 Student Management System. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
