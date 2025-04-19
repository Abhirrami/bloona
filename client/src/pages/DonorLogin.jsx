import { useState } from "react";
import { loginDonor } from "../services/authDonorService";
import { useNavigate } from "react-router-dom";

export default function DonorLogin() {
  const [form, setForm] = useState({ donor_id: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = async () => {
    const res = await loginDonor(form);
    if (res.success) alert("Login successful");
    else alert("Login failed");
  };

  return (
    <div className="p-6">
      {" "}
      <h2>Donor Login</h2>{" "}
      <input
        placeholder="Donor ID"
        onChange={(e) => setForm({ ...form, donor_id: e.target.value })}
      />{" "}
      <input
        placeholder="Password"
        type="password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />{" "}
      <button onClick={handleLogin}>Login</button>{" "}
      <p
        onClick={() => navigate("/donor/signup")}
        className="cursor-pointer text-blue-500"
      >
        Create Account
      </p>{" "}
    </div>
  );
}
