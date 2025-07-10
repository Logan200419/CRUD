import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./Pages/Loginpage";
import DashboardLayout from "./Components/DashboardLayout";
import DashboardHome from "./Pages/DashboardHome";
import StudentManagement from "./Pages/StudentManagement";
import CourseManagement from "./Pages/CourseManagement";
import Accounts from "./Pages/Accounts";
import About from "./Pages/About";
import { Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="students" element={<StudentManagement />} />
          <Route path="courses" element={<CourseManagement />} />
          <Route path="accounts" element={<Accounts />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
