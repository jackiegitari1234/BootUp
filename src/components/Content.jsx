import React from "react";

function Content() {
  return (
    <div className="container card-grid">
      <div className="card">
        ~ In the world of Java development, Spring Boot is a game-changer.
        <br />~ It takes the powerful features of the Spring Framework and wraps
        them into a more developer-friendly package that’s fast, opinionated,
        and production-ready.
        <br />~ But what exactly is Spring Boot? Why is it so popular? And how
        does it simplify the process of building Java applications? Let’s break
        it down:
      </div>
      <div className="card">
        Spring Boot is an open-source Java-based framework developed by Pivotal
        (now part of VMware). It is built on top of the Spring Framework, but
        its main goal is to:
        <ul>
          <li>Simplify application development</li>
          <li>Eliminate boilerplate configuration</li>
          <li>
            Enable rapid development of standalone, production-ready
            applications
          </li>
        </ul>
      </div>
      <div className="card">
        Key Features of Spring Boot Here are some standout features that make
        Spring Boot the go-to choice for modern Java applications:
        <ul>
          <li>
            Auto-Configuration: Automatically configures your application based
            on the dependencies in your classpath.
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
        </ul>
      </div>
    </div>
  );
}

export default Content;
