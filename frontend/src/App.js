import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./Pages/Loginpage";
import HomePage from "./Pages/Homepage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/homepage" element={<HomePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
