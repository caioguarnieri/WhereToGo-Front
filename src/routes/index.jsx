import { Route, Routes } from "react-router-dom";
import DashboardPage from "../pages/Dashboard";
import TravelPage from "../pages/Dashboard/Travel";
import SigninPage from "../pages/Signin";
import SignupPage from "../pages/Signup";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SigninPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/dashboard/:id" element={<TravelPage />} />
    </Routes>
  );
};

export default AppRoutes;
