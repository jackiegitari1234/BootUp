import React from "react";
import { Col, Row } from "react-bootstrap";
import actuator from "../assets/actuator.png";

function Actuator() {
  return (
    <div>
      <Row className="justify-content-center">
        <Col xs="8" md="6" className="">
          <h2>Monitoring Your Application</h2>
        </Col>
      </Row>
      <Row className="justify-content-center  m-1 ">
        <Col xs="12" md="10" className="justify-content-center">
          Spring Boot makes building applications fast and easy, but what
          happens after your app goes live? That’s where Actuator steps in. It
          opens a window into your app’s health, metrics, environment, and
          more—all with just a few lines of configuration. It helps you monitor,
          analyze, and even diagnose problems before users notice anything is
          wrong.
          <br />
          Spring Boot Actuator works seamlessly with your existing
          application—no need to modify your main logic. It's like having a
          dashboard built right into your backend.
          <br />
          <br />
          Adding Spring Boot Actuator to your project is as simple as adding a
          new dependency—no magic, no fuss. <br /> <br />
        </Col>
      </Row>
      <Row className="justify-content-left  m-5  cardItem">
        <Col xs="11" md="7" className=" ">
          Gradle <br />
          <pre>
            <code>
              {" "}
              implementation
              'org.springframework.boot:spring-boot-starter-actuator'
            </code>
          </pre>
          Maven:
          <pre>
            <code>
              {`<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-actuator</artifactId>
</dependency> `}
            </code>
          </pre>
        </Col>
        <Col xs="11" md="4" className="justify-content-center">
          <img
            src={actuator}
            alt="BootUp"
            className="img-fluid rounded shadow-sm"
          />
        </Col>
        <br /> <br />
        <Col xs="11" md="7" className="mt-5justify-content-left">
          By default, only a few endpoints like /actuator/health and
          /actuator/info are enabled for security reasons. You can customize
          what gets exposed in your application.properties:
          <pre>
            <code>
              management.endpoints.web.exposure.include=health,info,metrics,env,beans
            </code>
          </pre>
          <br />
          You can also expose all endpoints (not recommended for production):
          <pre>
            <code>management.endpoints.web.exposure.include=*</code>
          </pre>
          Fire up your Spring Boot application and navigate to:
          <ul>
            <li>
              http://localhost:8080/actuator/health – Check the health of your
              application.
            </li>
            <li>http://localhost:8080/actuator/info – View basic app info.</li>
            <li>
              http://localhost:8080/actuator/metrics – Runtime metrics like
              memory, CPU, and more.
            </li>
          </ul>
        </Col>
      </Row>
    </div>
  );
}

export default Actuator;
