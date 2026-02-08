import React from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="homeWrapper">

      {/* NAV */}
      <div className="navBarModern">
        <h2>Zoom Video Call</h2>

        <div className="navRight">
          <p onClick={() => navigate("/aljk23")}>Join as Guest</p>
          <p onClick={() => navigate("/auth")}>Register</p>
          <p onClick={() => navigate("/auth")}>Login</p>
        </div>
      </div>

      {/* HERO */}
      <div className="heroSection">

        <div className="heroLeft">
          <h1>
            <span style={{ color: "#FF9839" }}>Connect</span> with your loved Ones
          </h1>

          <p>Cover a distance by Zoom Video Call</p>

          <div className="joinBox">
            <Link to="/auth" className="joinBtnHero">
              Get Started
            </Link>
          </div>
        </div>

        <div className="heroRight">
          <img src="/mobile.png" alt="mobile preview" />
        </div>

      </div>

    </div>
  );
}
