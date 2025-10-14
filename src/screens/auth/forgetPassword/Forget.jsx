import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { forgotPassword, resetForgotPasswordState } from "../../../redux/slices/forgetSlice";
import "./forget.css";

export default function Forget() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");

  const { loading, success, error } = useSelector((state) => state.forgotPassword);

  const isValidEmail = email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

  const handleNext = () => {
    if (isValidEmail) {
       navigate("/Verify",{ state: { email } })
      dispatch(forgotPassword(email));
    }
  };

  useEffect(() => {
    if (success) {
      navigate("/Verify", { state: { email } });
      dispatch(resetForgotPasswordState()); // Clear success state after navigation
    }
  }, [success, navigate, email, dispatch]);

  return (
    <div className="signup">
      <div className="signup-box">
        <h1>A</h1>
        <h2>Reset your password</h2>
        <p>Please enter the email address used for login.</p>

        <input
          type="text"
          placeholder="Email*"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          className={`log-btn ${!isValidEmail || loading ? "disabled" : ""}`}
          disabled={!isValidEmail || loading}
          onClick={handleNext}
        >
          {loading ? "Sending..." : "Send Verification Code"}
        </button>

        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
}
