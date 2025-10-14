import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../../../redux/slices/signupSlice";

export default function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.signup);

  // Form State
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");

  const isValidEmail = email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  const isFormValid = isValidEmail && password === confirmPassword && firstName && lastName;

  const handleSignup = async () => {
    if (!isFormValid) return;

    const signupData = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
      password2: confirmPassword, // Assuming your API expects `password2`
    };

    const resultAction = await dispatch(signupUser(signupData));

    if (signupUser.fulfilled.match(resultAction)) {
      navigate("/Verify", { state: { email } }); // Navigate after successful signup
    }
  };


  return (
    <div className="signup">
      <div className="signup-box">
        <h1>A</h1>
        <h2>Create your account</h2>
        <p>Access all your saved information quickly from any device, any time.</p>

        <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        <input type="email" placeholder="Email*" value={email} onChange={(e) => setEmail(e.target.value)} />

        <button
          className={`log-btn ${!isFormValid ? "disabled" : ""}`}
          disabled={!isFormValid || loading}
          onClick={handleSignup}
        >
          {loading ? "Signing up..." : "Send Verification Code"}
        </button>

      </div>
    </div>
  );
}
