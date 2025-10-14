import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import axios from "../../../api/axios";
import "./Reset.css";

export default function Reset() {
  const location = useLocation();
  const navigate = useNavigate();
  const otp = location.state?.otp;
  const email = location.state?.email;

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const isFormValid =
    password.length >= 8 &&
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /\d/.test(password) &&
    /[@#$%&?![\]{}()|\\;:,._+=\-~'`"^*]/.test(password) &&
    password === confirmPassword;

  const handleUpdatePassword = async () => {
    if (!isFormValid) {
      setError("Please fix password issues before submitting.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await axios.post("/users/resetPassword/", {
        otp,
        password,
        confirmPassword,
      });

      console.log("Success:", response.data);
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup">
      <div className="signup-box5">
        <h1>A</h1>
        <h2>Create your new password</h2>

        {/* Password input */}
        <div style={{ position: "relative", width: "100%" }}>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password*"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            onClick={() => setShowPassword((prev) => !prev)}
            style={{
              position: "absolute",
              right: "10px",
              top: "68%",
              transform: "translateY(-50%)",
              color: "darkgrey",
              cursor: "pointer",
            }}
          >
            {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </span>
        </div>

        <p>Your password must:</p>
        <ol>
          <li>Be at least 8 characters long</li>
          <li>Have at least one uppercase and one lowercase character</li>
          <li>Have at least one number</li>
          <li>Have at least one symbol (@#$%&?!/|\;:,._+=-~&apos;`&quot;^*)</li>
        </ol>

        {/* Confirm Password input */}
        <div style={{ position: "relative", width: "100%" }}>
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password*"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <span
            onClick={() => setShowConfirmPassword((prev) => !prev)}
            style={{
              position: "absolute",
              right: "10px",
              top: "68%",
              transform: "translateY(-50%)",
              color: "darkgrey",
              cursor: "pointer",
            }}
          >
            {showConfirmPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </span>
        </div>

        {typeof password === "string" &&
          typeof confirmPassword === "string" && (
            <p style={{ marginTop: 10 }}>
              {password === confirmPassword && password !== ""
                ? "✅ Matches your password"
                : "❌ Must match your password"}
            </p>
          )}

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button
          className="log-btn"
          onClick={handleUpdatePassword}
          disabled={!isFormValid || loading}
          style={{
            backgroundColor: isFormValid ? "#0082FA" : "#ccc",
            cursor: isFormValid ? "pointer" : "not-allowed",
          }}
        >
          {loading ? "Updating..." : "Update your password"}
        </button>
      </div>
    </div>
  );
}
