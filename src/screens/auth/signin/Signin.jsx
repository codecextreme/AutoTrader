import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signin.css";
import facebook from "../../../assets/media/icons/Facebook svg.png";
import google from "../../../assets/media/icons/Google svg.png";
import AppleIcon from "@mui/icons-material/Apple";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../../redux/slices/authSlice";

export default function Signin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const handlelogin = () => {
    const payload = {
      email: email,
      password: password,
    };

    dispatch(loginUser(payload));
  };

  console.log("abcsdgdfhsdfhdhffddfsfg", email, password);

  return (
    <div className="signin">
      <div className="signin-box">
        <h1 style={{ fontSize: 60, color: "red", textAlign: "center" }}>A</h1>
        <h2
          style={{
            textAlign: "center",
            fontSize: 20,
            fontWeight: 500,
            marginTop: 20,
          }}
        >
          Log in to AutoTrader
        </h2>
        <input
          type="text"
          placeholder="Email*"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <div style={{ position: "relative", width: "100%" }}>
          <input
            type="password"
            placeholder="Password*"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <VisibilityOffIcon
            style={{
              position: "absolute",
              right: "10px",
              top: "68%",
              transform: "translateY(-50%)",
              color: "dark grey",
              cursor: "pointer",
            }}
          />
        </div>
        <span
          style={{
            marginTop: 10,
            color: "#0082FA",
            display: "block",
            textAlign: "end",
          }}
          onClick={() => navigate("/forget")}
        >
          Forgot your password?
        </span>
        <button className="log-btn" onClick={() => handlelogin()}>
          Log in
        </button>
        <p style={{ marginTop: 30, textAlign: "center" }}>
          Don't have an account?
          <span
            style={{ color: "#0082FA" }}
            onClick={() => navigate("/Signup")}
          >
            {" "}
            Sign Up here
          </span>
        </p>
        <div className="lines">
          <div className="line"></div>
          <p>OR</p>
          <div className="line"></div>
        </div>
        <button className="social-btn">
          {" "}
          <span className="icon-container">
            <img src={facebook} alt="" />
          </span>
          Continue with Facebook{" "}
        </button>
        <button className="social-btn">
          <span className="icon-container">
            <img src={google} alt="" />
          </span>
          Continue with Google{" "}
        </button>
        <button
          className="social-btn"
          style={{ paddingLeft: 8, textAlign: "center" }}
        >
          {" "}
          <span className="icon-container">
            <AppleIcon style={{ width: 30, height: 30 }} />
          </span>
          Continue with Apple
        </button>
        <div className="para">
          <p>
            By signing up or logging in to My Account, you agree to the{" "}
            <span className="span">Terms of Use</span>, <br />
            the <span className="span"> Privacy Policy</span> and to receiving
            electronic communications on <br /> AutoTrader products and
            services.
          </p>
        </div>
      </div>
    </div>
  );
}
