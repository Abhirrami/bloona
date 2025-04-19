import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="text-center p-10">
      {" "}
      <h1 className="text-3xl font-bold mb-6">Welcome to Bloona</h1>{" "}
      <div className="flex flex-col items-center gap-4">
        {" "}
        <button
          onClick={() => navigate("/hospital/login")}
          className="bg-blue-600 text-white px-6 py-2 rounded"
        >
          {" "}
          Hospital Login{" "}
        </button>{" "}
        <button
          onClick={() => navigate("/donor/login")}
          className="bg-red-600 text-white px-6 py-2 rounded"
        >
          {" "}
          Donor Login{" "}
        </button>{" "}
      </div>{" "}
    </div>
  );
}
