import React from "react";

function NavBar() {
  return (
    <div class="nav nav-black">
      <div class="nav nav-red">
        <div class="nav nav-white">
          <button class="nav-btn close-btn">
            <i class="fas fa-times"></i>
          </button>
          <img src="assets/logo1.png" alt="Logo" class="logo" />
          <ul class="list">
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
          <ul class="list">
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
          <ul class="list">
            <a href="#" class="list">
              Microservices Architecture
            </a>
          </ul>
          <ul class="list">
            <a href="#" class="list">
              Spring Boot and Databases
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
