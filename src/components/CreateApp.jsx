import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function CreateApp() {
  return (
    <>
      <Row className="justify-content-center ml-5">
        <Col xs="8" md="8" className="">
          <h2>Creating A SpringBoot Application</h2>
        </Col>
      </Row>
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

      <Row className="justify-content-center mb-5 mt-3">
        <Col xs="11" md="11" xl="5">
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

        <Col xs="11" md="11" xl="5">
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
                  <br />
                </pre>
              </li>
            </ol>
          </div>
          <div className="cardItems">
            <div className="mb-4">
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
          </div>
        </Col>
      </Row>

      <Row className="justify-content-left mt-5 ">
        <hr />
        <Col xs="11" md="4" className="mt-5">
          <h3> 2. Maven </h3>
        </Col>
      </Row>
      <Row className="justify-content-center   ">
        <Col xs="11" md="11" xl="5">
          <div className=" ">
            <p className="text-center"> Windows </p>
            <br />
            <ol>
              <li>
                {" "}
                Go to the official Apache Maven download page <br />{" "}
              </li>
              <li>
                {" "}
                Download the binary zip archive (e.g.,
                apache-maven-3.9.x-bin.zip) <br />
              </li>
              <li>
                {" "}
                Unzip the file to a folder, e.g., C:\Program Files\Apache\Maven{" "}
                <br />
              </li>
              <li>
                {" "}
                Open System Properties → Advanced → Environment Variables <br />
              </li>
              <li>
                Name:
                <pre>
                  <code>MAVEN_HOME</code>
                </pre>
                Value:
                <pre>
                  <code>C:\Program Files\Apache\Maven\apache-maven-3.9.x</code>
                </pre>
              </li>
              <li>
                Find the Path variable → click Edit → Add:
                <pre>
                  <code>%MAVEN_HOME%\bin</code>
                </pre>
              </li>
              <li>
                Verify Open Command Prompt and run:
                <pre>
                  <code>mvn -v</code>
                </pre>
              </li>
            </ol>
          </div>
        </Col>
        <Col xs="11" md="11" xl="5">
          <div className=" p-5">
            <p className="text-center"> macOS </p>
            <ol>
              <li>
                Run
                <pre>
                  <code> brew install maven </code>
                </pre>
              </li>
              <li>
                Verify:
                <pre>
                  <code>mvn -v</code>{" "}
                </pre>
              </li>
            </ol>
          </div>

          <div className=" p-5">
            Linux
            <br />
            <ol>
              <li>
                Run:
                <pre>
                  <code>
                    sudo apt update <br />
                    sudo apt install maven
                  </code>
                </pre>
              </li>
              <li>
                Then:
                <pre>
                  <code>mvn -v</code>
                </pre>
              </li>
            </ol>
          </div>
        </Col>
      </Row>

      <div className="cardItems2">
        <Row className="justify-content-left ">
          <Col xs="11" md="4" className="">
            <h3> 3. IntelliJ </h3>
          </Col>
        </Row>
        <Row className="justify-content-left m-5 ">
          <Col xs="11" md="11" className=" mb-5 ">
            <Col xs="11" md="11" xl="11">
              <div className=" p-5">
                <ul>
                  <li>
                    {" "}
                    IntelliJ IDEA is a good IDE for Java Development, however,
                    you can use any other IDE of your choice <br />{" "}
                  </li>
                  <li>
                    Download and install IntelliJ IDEA from
                    <Link></Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default CreateApp;
