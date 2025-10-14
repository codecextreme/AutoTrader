import React, { useState } from "react";
import './Verify.css';
import { useLocation, useNavigate } from "react-router-dom";

export default function Verify() {
  const [code, setCode] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email || "";

  const handleVerifyClick = () => {
    if (code.trim()) {
      // Navigate to reset password screen with OTP
      navigate("/Reset", {
        state: {
          otp: code, // OTP user entered
          email: email, // Optional, if needed later
        },
      });
    }
  };

  return (
    <div className="verify">
      <div className="verify-box">
        <h1>A</h1>
        <h2>Create your account</h2>
        <p>
          Access all of your saved information quickly from any device, any
          time.
        </p>

        <div className="noti">
          <p>Verification code has been sent to your inbox!</p>
        </div>

        <input type="text" placeholder="Your email" value={email} disabled />
        <input
          type="text"
          placeholder="Verification code*"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />

        <button
          className="log-btn"
          disabled={!code.trim()}
          onClick={handleVerifyClick}
          style={{
            backgroundColor: code.trim() ? "#0082FA" : "#ccc",
            cursor: code.trim() ? "pointer" : "not-allowed",
          }}
        >
          Verify email
        </button>

        <p style={{ color: '#41a1fa' }}>Resend code</p>
      </div>
    </div>
  );
}
