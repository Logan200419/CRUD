import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./Pages/Loginpage";
import HomePage from "./Pages/Homepage";
import { Navigate } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/homepage" element={<HomePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
