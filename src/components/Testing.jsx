import React from "react";
import { Col, Row } from "react-bootstrap";

function Testing() {
  return (
    <>
      <Row className="justify-content-center ml-5">
        <Col xs="8" md="8" className="">
          <h2>SpringBoot Application</h2>
        </Col>
      </Row>
      <Row className="justify-content-center ml-5">
        <Col xs="8" md="8">
          <ul>
            <h2>To test your Spring Boot Application:</h2>
            <li>
              Dowload and install postman from their{" "}
              <a
                href="https://www.postman.com/downloads/"
                target="_blank"
                rel="noopener noreferrer"
              >
                official website.
              </a>
            </li>
            <li>Launch the Postman desktop app.</li>
            <li>
              To configure the Request, Select the Method <b>GET</b> and enter
              your url, For example:
              <pre>
                <code>http://localhost:8080/</code>
              </pre>
            </li>
            <li>
              (If you have other endpoints, e.g. /api/users, use those URLs.)
            </li>

            <li>Click Send.</li>
            <li>In the Body panel you should see:</li>
            <pre>
              <code>Hello, Spring Boot!</code>
            </pre>
            <li>In the Status bar you should see 200 OK. As shown below</li>
          </ul>
        </Col>
      </Row>
    </>
  );
}

export default Testing;
