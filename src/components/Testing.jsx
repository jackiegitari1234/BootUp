import React from "react";
import { Col, Row } from "react-bootstrap";
import postman from "../assets/postman.png";

function Testing() {
  return (
    <>
      <Row className="justify-content-center ml-5">
        <Col xs="8" md="8" className="">
          <h2>SpringBoot Application</h2>
        </Col>
      </Row>
      <Row className="justify-content-center ml-5 ">
        <Col xs="8" md="8" className="cardItem">
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
                <code>http://localhost:8080/actuator</code>
              </pre>
            </li>
            (If you have other endpoints, e.g. /api/users, use those URLs.)
            <li>Click Send.</li>
            <li>
              If all is well, you should see a response body and a 200 OK In the
              Status bar . Something like:
            </li>
          </ul>

          <Col xs="8" md="8" className="m-5">
            <img
              src={postman}
              alt="BootUp"
              className="img-fluid rounded shadow-sm"
            />
          </Col>
        </Col>
      </Row>
    </>
  );
}

export default Testing;
