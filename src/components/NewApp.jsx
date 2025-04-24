import React from "react";
import { Col, Row } from "react-bootstrap";
import intellij from "../assets/intellij.png";

function NewApp() {
  return (
    <div>
      <Row className="justify-content-center ml-5">
        <Col xs="8" md="8" className="">
          <h2>SpringBoot Application</h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs="8" md="6" className="">
          <h2>Creating A Spring Boot Applicaton Using Spring Initializr</h2>
        </Col>
      </Row>

      <Row className="justify-content-center ">
        <Col xs="8" md="8" className="cardItems3 p-5">
          <ul>
            {" "}
            <h3>To create a Spring Boot Application:</h3>
            <li>
              {" "}
              Go to &nbsp;
              <a
                href="https://start.spring.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                start.spring.io
              </a>
            </li>
            <li>
              Select the following: (You can modify this data to your
              preference)
              <pre>
                <code>
                  <ul>
                    <li>Project: Maven (or Gradle if you prefer)</li>
                    <li>Language: Java</li>
                    <li>Spring Boot version: (e.g., 3.4.x)</li>
                    <li>Group: com.example</li>
                    <li>Artifact: hello-spring</li>
                    <li>Dependencies: Spring Web & Spring Boot Actuator</li>
                  </ul>
                </code>
              </pre>
            </li>
            <li>
              Click Generate, A zip file will be created, downloaded and saved
              on your device. <br /> Extract this file
            </li>
            <li>Launch Itellij IDEA App</li>
            <li>
              {" "}
              Go to
              <pre>
                <code>
                  File &gt; Open <br />
                  Navigate to the root folder of your Spring Boot project and
                  select it.
                  <br />
                  Wait for IntelliJ to Index <br />
                  You may see prompts like "Import Maven Project" — click "Yes".{" "}
                  <br />
                  IntelliJ should automatically download and resolve
                  dependencies. <br />
                </code>
              </pre>
            </li>
            At this step you will have successfully created, downloaded and
            opened a Spring Boot Application
          </ul>
          <h3>To run your Spring Boot Application:</h3>
          <ul>
            <li>On Intellij, navigate to: </li>
            <pre>
              <code>
                src &gt; main &gt; java &gt; com.example.hello_spring &gt;
                HelloSpringApplication.java
              </code>
            </pre>
            <li>
              Right-click the class HelloSpringApplication, then click "Run
              HelloSpringApplication".
            </li>
          </ul>
          You have successfully run your your Spring Boot Application <br />
          At this step, You should have something close to this: <br />
          <Col xs="8" md="9">
            <img
              src={intellij}
              alt="BootUp"
              className="img-fluid rounded shadow-sm"
            />
          </Col>
          <br />
          <br />
          <br />
          Well done, you just created your first Spring Boot Application, end to
          end.
        </Col>
      </Row>
    </div>
  );
}

export default NewApp;
