import React from "react";

function Content() {
  return (
    <div>
      <div className="main-content">
        <header>
          <button className="nav-btn open-btn"></button>
        </header>

        <div className="container">
          <p>
            ~ Inn the world of Java development, Spring Boot is a game-changer.
          </p>
          <p>
            ~ It takes the powerful features of the Spring Framework and wraps
            them into a more developer-friendly package that’s fast,
            opinionated, and production-ready.
          </p>
          <p>
            ~ But what exactly is Spring Boot? Why is it so popular? And how
            does it simplify the process of building Java applications? Let’s
            break it down:
          </p>
          <p>
            Spring Boot is an open-source Java-based framework developed by
            Pivotal (now part of VMware). It is built on top of the Spring
            Framework, but its main goal is to:
          </p>
          <ul>
            <li>Simplify application development</li>
            <li>Eliminate boilerplate configuration</li>
            <li>
              Enable rapid development of standalone, production-ready
              applications
            </li>
          </ul>
          <p>
            In short, Spring Boot lets you focus on writing business logic while
            handling the behind-the-scenes configuration for you.
          </p>

          <p>
            Key Features of Spring Boot Here are some standout features that
            make Spring Boot the go-to choice for modern Java applications:
          </p>
          <ul>
            <li>
              Auto-Configuration: Automatically configures your application
              based on the dependencies in your classpath.
            </li>
            <li>
              Starter Dependencies: Predefined dependencies for common use cases
              (like spring-boot-starter-web, spring-boot-starter-data-jpa, etc.)
            </li>
            <li>
              Embedded Web Server: No need to deploy WAR files to external
              servers—Spring Boot includes Tomcat, Jetty, or Undertow out of the
              box.
            </li>
            <li>
              Production-Ready Features: Comes with health checks, metrics, and
              monitoring via Spring Boot Actuator.
            </li>
            <li>
              Minimal Configuration: Most apps need little to no XML or
              annotation-heavy setup
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Content;
