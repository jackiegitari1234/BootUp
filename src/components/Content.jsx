import React from "react";
import { Col, Row } from "react-bootstrap";
import springboot from "../assets/boot.png";
import { Container } from "react-bootstrap";

function Content() {
  return (
    <>
      <Container>
        <h2>SpringBoot Intro</h2>
        <Row>
          <Col>
            <div className="intro">
              In the world of Java development, Spring Boot is a game-changer.
              It takes the powerful features of the Spring Framework and wraps
              them into a more developer-friendly package that’s fast,
              opinionated, and production-ready. But what exactly is Spring
              Boot? Why is it so popular? And how does it simplify the process
              of building Java applications?
              <br />
              Let’s break it down:
            </div>
          </Col>
        </Row>
      </Container>

      <Row className="justify-content-center">
        <Col xs="auto">
          <div className="d-flex gap-3 m-4">
            <div xs="auto" className="cardItems">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="size-4"
                width="100"
                height="100"
              >
                <path d="M6.5 2.25a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0V4.5h6.75a.75.75 0 0 0 0-1.5H6.5v-.75ZM11 6.5a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0v-.75h2.25a.75.75 0 0 0 0-1.5H11V6.5ZM5.75 10a.75.75 0 0 1 .75.75v.75h6.75a.75.75 0 0 1 0 1.5H6.5v.75a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75ZM2.75 7.25H8.5v1.5H2.75a.75.75 0 0 1 0-1.5ZM4 3H2.75a.75.75 0 0 0 0 1.5H4V3ZM2.75 11.5H4V13H2.75a.75.75 0 0 1 0-1.5Z" />
              </svg>{" "}
              <br />
              <br />
              Spring Boot is an open-source Java-based framework developed by
              Pivotal (now part of VMware). It is built on top of the Spring
              Framework, but its main goal is to:
              <ul>
                <li>Simplify application development</li>
                <li>Eliminate boilerplate configuration</li>
                <li>
                  Enable rapid development of standalone, production-ready
                  applications
                </li>
              </ul>
              <br />
            </div>
            <div className="cardItems">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="size-4"
                width="100"
                height="100"
              >
                <path d="M6.5 2.25a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0V4.5h6.75a.75.75 0 0 0 0-1.5H6.5v-.75ZM11 6.5a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0v-.75h2.25a.75.75 0 0 0 0-1.5H11V6.5ZM5.75 10a.75.75 0 0 1 .75.75v.75h6.75a.75.75 0 0 1 0 1.5H6.5v.75a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75ZM2.75 7.25H8.5v1.5H2.75a.75.75 0 0 1 0-1.5ZM4 3H2.75a.75.75 0 0 0 0 1.5H4V3ZM2.75 11.5H4V13H2.75a.75.75 0 0 1 0-1.5Z" />
              </svg>{" "}
              <br />
              <br />
              Key Features of Spring Boot Here are some standout features that
              make Spring Boot the go-to choice for modern Java applications:
              <ul>
                <li>Auto-Configuration.</li>
                <li>
                  Predefined dependencies for common use cases e.g
                  spring-boot-starter-web, spring-boot-starter-data-jpa, etc.
                </li>
                <li>Embedded Web Server</li>
                <li>
                  Production-Ready Features: Comes with health checks, metrics,
                  and monitoring via Spring Boot Actuator.
                </li>
              </ul>
            </div>
            <div className="cardItems">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="size-4"
                width="100"
                height="100"
              >
                <path d="M6.5 2.25a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0V4.5h6.75a.75.75 0 0 0 0-1.5H6.5v-.75ZM11 6.5a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0v-.75h2.25a.75.75 0 0 0 0-1.5H11V6.5ZM5.75 10a.75.75 0 0 1 .75.75v.75h6.75a.75.75 0 0 1 0 1.5H6.5v.75a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75ZM2.75 7.25H8.5v1.5H2.75a.75.75 0 0 1 0-1.5ZM4 3H2.75a.75.75 0 0 0 0 1.5H4V3ZM2.75 11.5H4V13H2.75a.75.75 0 0 1 0-1.5Z" />
              </svg>{" "}
              <br />
              <br />
              Spring Boot is an open-source Java-based framework developed by
              Pivotal (now part of VMware). It is built on top of the Spring
              Framework, but its main goal is to:
              <ul>
                <li>Simplify application development</li>
                <li>Eliminate boilerplate configuration</li>
                <li>
                  Enable rapid development of standalone, production-ready
                  applications
                </li>
              </ul>
              <br />
              Key Features of Spring Boot Here are some standout features that
              make Spring Boot the go-to choice for modern Java applications:
              <ul>
                <li>Auto-Configuration.</li>
                <li>
                  Predefined dependencies for common use cases e.g
                  spring-boot-starter-web, spring-boot-starter-data-jpa, etc.
                </li>
                <li>Embedded Web Server</li>
                <li>
                  Production-Ready Features: Comes with health checks, metrics,
                  and monitoring via Spring Boot Actuator.
                </li>
              </ul>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Content;
