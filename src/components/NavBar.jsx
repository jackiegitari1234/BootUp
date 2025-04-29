import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import logo from "../assets/123.png";
import { Link } from "react-router-dom";

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

          <img src={logo} alt="BootUp" width={250} height={100} />

          <div>
            <ul className="list">
              Creating an Application
              <li>
                <Link to="/app" onClick={() => setVisible(false)}>
                  Prerequisites
                </Link>
              </li>
              <li>
                <Link to="/new-app" onClick={() => setVisible(false)}>
                  Creating a Spring Boot Application
                </Link>
              </li>
              <li>
                <Link to="/testing" onClick={() => setVisible(false)}>
                  Testing With Postman
                </Link>
              </li>
              <li>
                <Link to="/sequence" onClick={() => setVisible(false)}>
                  Startup Sequence of a Spring Boot App
                </Link>
              </li>
            </ul>

            <ol className="navHeader">
              {" "}
              Topics you Can Never Miss: <br />
              <li>
                <Link
                  className="navItem"
                  to="/filters"
                  onClick={() => setVisible(false)}
                >
                  WebFilters in Spring WebFlux
                </Link>
              </li>
              <li>
                <Link
                  className="navItem"
                  to="/filters"
                  onClick={() => setVisible(false)}
                >
                  WebFilters in Spring WebFlux
                </Link>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
