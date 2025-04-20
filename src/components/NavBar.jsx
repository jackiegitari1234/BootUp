import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import logo from "../assets/logo.png";

function NavBar() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <header className="header">
        <button className="nav-btn open-btn" onClick={() => setVisible(true)}>
          <i className="fas fa-bars"></i>
        </button>
      </header>

      {visible && (
        <div className="overlay" onClick={() => setVisible(false)}></div>
      )}

      <div className={`nav nav-black ${visible ? "visible" : ""}`}>
        <div className={`nav nav-white  ${visible ? "visible" : ""}`}>
          <button
            className="nav-btn close-btn"
            onClick={() => setVisible(false)}
          >
            <i className="fas fa-times"></i>
          </button>
          <div>
            <img src={logo} alt="BootUp" width={45} height={50} />
          </div>
          <div>
            <ul className="list">
              Intro
              <li>
                <a href="#">What is Spring Boot?</a>
              </li>
              <li>
                <a href="#">Spring Boot Features</a>
              </li>
              <li>
                <a href="#">Setting Up the Environment - IntelliJ</a>
              </li>
            </ul>
            <br />
            <ul className="list">
              Creating an Application
              <li>
                <a href="#">Simple Spring Boot Application</a>
              </li>
              <li>
                <a href="#">Maven</a>
              </li>
              <li>
                <a href="#">Running and Debugging a Spring Boot Application</a>
              </li>
            </ul>
            <br />
            <ul className="list">
              <a href="#" className="list">
                Microservices Architecture
              </a>
            </ul>
            <ul className="list">
              <a href="#" className="list">
                Spring Boot and Databases
              </a>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
