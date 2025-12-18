import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Sign Up</h2>
      <button onClick={() => navigate("/login")}>
        Create Account
      </button>
    </div>
  );
}
