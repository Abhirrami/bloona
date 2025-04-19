import { useState } from "react";
import { loginHospital } from "../services/authHospitalService";
import { useNavigate } from "react-router-dom";

export default function HospitalLogin() {
  const [form, setForm] = useState({ hospital_id: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = async () => {
    const res = await loginHospital(form);
    if (res.success) alert("Login successful");
    else alert("Login failed");
  };

  return (
    <div className="p-6">
      {" "}
      <h2>Hospital Login</h2>{" "}
      <input
        placeholder="Hospital ID"
        onChange={(e) => setForm({ ...form, hospital_id: e.target.value })}
      />{" "}
      <input
        placeholder="Password"
        type="password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />{" "}
      <button onClick={handleLogin}>Login</button>{" "}
      <p
        onClick={() => navigate("/hospital/signup")}
        className="cursor-pointer text-blue-500"
      >
        Create Account
      </p>{" "}
    </div>
  );
}
