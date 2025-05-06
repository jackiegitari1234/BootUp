import React from "react";
import { Col, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet";

function Content() {
  return (
    <>
      <Helmet>
        <title>SpringBoot Introduction</title>
        <meta
          name="description"
          content="An Intro to spring boot Applications"
        />
      </Helmet>
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

      <Row className="justify-content-center mb-5">
        <Col xs="8" md="4" className="cardItems">
          <div>
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
            Pivotal (now part of VMware). <br /> It is built on top of the
            Spring Framework, but its main goal is to:
            <ul>
              <li>Simplify application development</li>
              <li>Eliminate boilerplate configuration</li>
              <li>
                Enable rapid development of standalone, production-ready
                applications
              </li>
            </ul>
            In short, Spring Boot lets you focus on writing business logic while
            handling the behind-the-scenes configuration for you.
            <br />
          </div>
        </Col>
        <Col xs="8" md="4" className="cardItems">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="size-4"
              width="100"
              height="100"
            >
              <path d="M7.25 13.25V7.5h1.5v5.75a.75.75 0 0 1-1.5 0ZM8.75 2.75V5h.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h.75V2.75a.75.75 0 0 1 1.5 0ZM2.25 9.5a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5H4.5V2.75a.75.75 0 0 0-1.5 0V9.5h-.75ZM10 10.25a.75.75 0 0 1 .75-.75h.75V2.75a.75.75 0 0 1 1.5 0V9.5h.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75ZM3 12v1.25a.75.75 0 0 0 1.5 0V12H3ZM11.5 13.25V12H13v1.25a.75.75 0 0 1-1.5 0Z" />
            </svg>{" "}
            <br />
            <br />
            Key Features of Spring Boot.
            <br /> Here are some standout features that make Spring Boot the
            go-to choice for modern Java applications:
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
        </Col>
        <Col xs="8" md="3" className="cardItems">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="size-4"
              width="100"
              height="100"
            >
              <path d="M11.25 2A2.75 2.75 0 0 1 14 4.75v6.5A2.75 2.75 0 0 1 11.25 14h-3a2.75 2.75 0 0 1-2.75-2.75v-.5a.75.75 0 0 1 1.5 0v.5c0 .69.56 1.25 1.25 1.25h3c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25h-3C7.56 3.5 7 4.06 7 4.75v.5a.75.75 0 0 1-1.5 0v-.5A2.75 2.75 0 0 1 8.25 2h3Z" />
              <path d="M7.97 6.28a.75.75 0 0 1 1.06-1.06l2.25 2.25a.75.75 0 0 1 0 1.06l-2.25 2.25a.75.75 0 1 1-1.06-1.06l.97-.97H1.75a.75.75 0 0 1 0-1.5h7.19l-.97-.97Z" />
            </svg>
            <br />
            <br />
            Why Use Spring Boot?
            <br />
            Before Spring Boot, setting up a Spring application could be
            tedious:
            <br /> XML files everywhere, manual dependency management, servlet
            container deployment—you name it.
            <ul>
              <li>Speeds up development</li>
              <li>Improving productivity</li>
              <li>Reducing complexit</li>
            </ul>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Content;
