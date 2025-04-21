import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function CreateApp() {
  return (
    <>
      <Container>
        <h2>Creating A SpringBoot Application</h2>
        <Row className="justify-content-center mb-5">
          <Col xs="8" md="4" className="">
            Prerequisites
            <ul>
              <li>Java JDK 17 or later</li>
              <li>Maven or Gradle</li>
              <li>An IDE (IntelliJ IDEA, Eclipse, or VS Code)</li>
            </ul>
          </Col>
        </Row>
        <Row className="justify-content-center mb-5">
          <Col xs="8" md="5" className="cardItems">
            Option 1: Using Spring Initializr
            <br />
          </Col>

          <Col xs="8" md="6" className="cardItems">
            Option 2: IntelliJ’s Spring Boot Project Wizard
            <br />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CreateApp;
