import { useState } from "react";
import { signupDonor } from "../services/authDonorService";
import { useNavigate } from "react-router-dom";

export default function DonorSignup() {
  const [form, setForm] = useState({
    name: "",
    donor_id: "",
    age: "",
    blood_group: "",
    location: "",
    health_report: "",
    contact: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSignup = async () => {
    const res = await signupDonor(form);
    if (res.success) {
      alert("Signup complete");
      navigate("/donor/login");
    } else alert("Signup failed");
  };

  return (
    <div className="p-6">
      {" "}
      <h2>Donor Signup</h2>{" "}
      <input
        placeholder="Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />{" "}
      <input
        placeholder="Donor ID"
        onChange={(e) => setForm({ ...form, donor_id: e.target.value })}
      />{" "}
      <input
        placeholder="Age"
        onChange={(e) => setForm({ ...form, age: e.target.value })}
      />{" "}
      <input
        placeholder="Blood Group"
        onChange={(e) => setForm({ ...form, blood_group: e.target.value })}
      />{" "}
      <input
        placeholder="Location"
        onChange={(e) => setForm({ ...form, location: e.target.value })}
      />{" "}
      <input
        placeholder="Health Report"
        onChange={(e) => setForm({ ...form, health_report: e.target.value })}
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
