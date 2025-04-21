import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function CreateApp() {
  return (
    <>
      <h2>Creating A SpringBoot Application</h2>
      <Row className="justify-content-center">
        <Col xs="8" md="4" className="">
          <h2>Prerequisites</h2>
          <ul>
            <li>Java JDK 17 or later</li>
            <li>Maven or Gradle</li>
            <li>An IDE (IntelliJ IDEA, Eclipse, or VS Code)</li>
          </ul>
        </Col>
      </Row>
      <Row className="justify-content-left">
        <Col xs="8" md="4" className="">
          <h3> 1. JDK 17 </h3>
        </Col>
      </Row>

      <Row className="justify-content-center mb-5">
        <Col xs="8" md="5">
          <div className="cardItems">
            <p className="text-center"> Windows </p>
            <br />
            <ol>
              <li>
                {" "}
                Visit Oracle JDK 17 Downloads <br />{" "}
              </li>
              <li>
                {" "}
                Download and Install the .exe file <br />
              </li>
              <li>
                {" "}
                Run the installer and follow the wizard to install it. <br />
              </li>
              <li>
                {" "}
                After installation, open Command Prompt and type: <br />
                <pre>
                  <code>{`java -version`}</code>
                </pre>
                You should see something like: (this might differ abit) <br />
                <pre>
                  <code>java version "17.0.x"</code>
                </pre>
              </li>
              <br />
              Add JAVA_HOME (optional but recommended) <br />
              <li>
                {" "}
                Go to System Properties → Environment Variables <br />
              </li>
              <li>
                {" "}
                Under System variables, click New: <br />
              </li>
              <li>
                {" "}
                Name:{" "}
                <pre>
                  <code>JAVA_HOME </code>
                </pre>{" "}
                <br />
              </li>
              <li>
                Value: (confirm the version)
                <pre>
                  <code>C:\Program Files\Java\jdk-17</code>
                </pre>
              </li>
              <li>
                {" "}
                Edit the Path variable and add:
                <pre>
                  <code> %JAVA_HOME%\bin </code>
                </pre>
              </li>
            </ol>
          </div>
        </Col>

        <Col xs="8" md="6">
          <div className="cardItems">
            <p className="text-center"> macOS </p>
            <ol>
              <li>
                Run
                <pre>
                  <code> brew install openjdk@17 </code>
                </pre>
              </li>
              <li>
                To make it available system-wide, add this to your .zshrc or
                .bash_profile:
                <pre>
                  <code>
                    export PATH="/opt/homebrew/opt/openjdk@17/bin:$PATH" <br />
                    export JAVA_HOME="/opt/homebrew/opt/openjdk@17"
                  </code>
                </pre>
              </li>
              <li>
                Then run:
                <pre>
                  <code>
                    source ~/.zshrc <br /> java -version
                  </code>{" "}
                </pre>
              </li>
            </ol>
          </div>

          <div className="cardItems">
            Linux
            <br />
            <ol>
              <li>
                Run:
                <pre>
                  <code>
                    sudo apt update <br />
                    sudo apt install openjdk-17-jdk
                  </code>
                </pre>
              </li>
              <li>
                Then:
                <pre>
                  <code>java -version</code>
                </pre>
              </li>
            </ol>
          </div>
        </Col>
      </Row>

      <Row className="justify-content-left">
        <Col xs="8" md="4" className="">
          <h3> 2. Maven </h3>
        </Col>
      </Row>
    </>
  );
}

export default CreateApp;
