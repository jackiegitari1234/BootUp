import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import logo from "../assets/123.png";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

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
              <h4> Creating an Application</h4>
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
            <h4>Topics you Can Never Miss:</h4>{" "}
            <ul className="list lastClass ">
              <li className="">
                <Link
                  className=""
                  to="/filters"
                  onClick={() => setVisible(false)}
                >
                  WebFilters in Spring WebFlux
                </Link>
              </li>
              <li className="">
                <Link
                  className=""
                  to="/threads"
                  onClick={() => setVisible(false)}
                >
                  Virtual Threads
                </Link>
              </li>
              <li className="">
                <Link
                  className=""
                  to="/actuator"
                  onClick={() => setVisible(false)}
                >
                  Spring Boot Actuator - Dependency
                </Link>
              </li>

              <li className="">
                <Link
                  className=""
                  to="/maven-pom"
                  onClick={() => setVisible(false)}
                >
                  POM.XML & Dependency Management
                </Link>
              </li>
              <li className="">
                <Link
                  className=""
                  to="/spring-security"
                  onClick={() => setVisible(false)}
                >
                  Spring Security - Basic Authentication
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Row className="justify-content-center ml-5">
        <Col xs="8" md="8" className="">
          <h2>SpringBoot Application</h2>
        </Col>
      </Row>
    </>
  );
}

export default NavBar;
