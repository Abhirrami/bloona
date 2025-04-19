import { useState } from "react";
import { signupHospital } from "../services/authHospitalService";
import { useNavigate } from "react-router-dom";

export default function HospitalSignup() {
  const [form, setForm] = useState({
    name: "",
    hospital_id: "",
    location: "",
    contact: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const res = await signupHospital(form);
      if (res.success) {
        alert("Signup complete");
        navigate("/hospital/login");
      } else {
        alert("Signup failed: " + res.error);
      }
    } catch (err) {
      console.error("Signup error:", err);
      alert("Server error: " + err.response?.data?.error || err.message);
    }
  };
  

  return (
    <div className="p-6">
      {" "}
      <h2>Hospital Signup</h2>{" "}
      <input
        placeholder="Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />{" "}
      <input
        placeholder="Hospital ID"
        onChange={(e) => setForm({ ...form, hospital_id: e.target.value })}
      />{" "}
      <input
        placeholder="Location"
        onChange={(e) => setForm({ ...form, location: e.target.value })}
      />{" "}
      <input
        placeholder="Contact"
        onChange={(e) => setForm({ ...form, contact: e.target.value })}
      />{" "}
      <input
        placeholder="Password"
        type="password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />{" "}
      <button onClick={handleSignup}>Sign Up</button>{" "}
    </div>
  );
}
