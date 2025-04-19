import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import HospitalLogin from "../pages/HospitalLogin";
import HospitalSignup from "../pages/HospitalSignup";
import DonorLogin from "../pages/DonorLogin";
import DonorSignup from "../pages/DonorSignup";

export default function AppRoutes() {
  return (
      <Routes>
        {" "}
        <Route path="/" element={<LandingPage />} />{" "}
        <Route path="/hospital/login" element={<HospitalLogin />} />{" "}
        <Route path="/hospital/signup" element={<HospitalSignup />} />{" "}
        <Route path="/donor/login" element={<DonorLogin />} />{" "}
        <Route path="/donor/signup" element={<DonorSignup />} />{" "}
      </Routes>
  );
}
