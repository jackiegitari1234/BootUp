import React from "react";
import { Col, Row } from "react-bootstrap";

function Sequence() {
  return (
    <div>
      <Row className="justify-content-center ml-5">
        <Col xs="8" md="8" className="">
          <h2>SpringBoot Application</h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs="8" md="6" className="">
          <h2>Startup Sequence of a Spring Boot App</h2>
        </Col>
      </Row>

      <Row className="justify-content-center ">
        <Col xs="8" md="8" className="cardItems3 p-5">
          When you run a Spring Boot Application, alot happens behind the scene.{" "}
          <br />
          This is because of spring boot's Auto-Configuration. <br /> <br />
          You don’t need to worry about all the internal mechanics — that’s the
          beauty of high-level abstraction. Still, it’s always a good idea to
          take a peek under the hood, even if you don’t master every technical
          detail You really don't have to worry about this, that's why there is
          this high level of abstraction, but it's always wise to have a peek
          without necessarirlly mastering the technicallity of it.
          <br />
          <br />
          <div className="header">
            Spring Boot Runtime Bootstrapping - The Startup Process
          </div>
          <ol>
            <li></li>
          </ol>
        </Col>
      </Row>
    </div>
  );
}

export default Sequence;
