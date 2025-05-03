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
        <Col xs="8" md="8" className="cardItem p-5">
          When you run a Spring Boot Application, alot happens behind the scene.{" "}
          <br />
          This is because of spring boot's Auto-Configuration. You don’t need to
          worry about all the internal mechanics — that’s the beauty of
          high-levels of <strong>abstraction</strong>.<br />
          <br /> Still, it’s always a good idea to take a peek under the hood,
          even if you don’t master every technical detail.
          <br />
          <br />
          <div className="header">
            Spring Boot Runtime Bootstrapping - The Startup Process
          </div>
          <ol>
            <li>
              SpringApplication.run() is called.
              <ul>
                This single line of code kicks off the entire Spring Boot
                application lifecycle.
                <br /> Here's what SpringApplication.run() does behind the
                scenes:
                <li>
                  Creates a SpringApplication instance - It prepares the Spring
                  Boot application by setting up:
                  <ul>
                    <li>The type of application (e.g. web, reactive, CLI).</li>
                    <li>Default settings.</li>
                    <li>Listeners and initializers.</li>
                    <li>Banner printing.</li> <br />
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              ApplicationContext is created and initialized. <br />
              Spring Boot creates an ApplicationContext, which is like the
              container that holds all your beans (components, services, etc.){" "}
              <br /> <br />
            </li>

            <li>
              Environment is prepared (application.properties/yml loaded).{" "}
              <br />
              Spring Boot looks for application.properties (or .yml) in a
              specific order of locations. From highest to lowest precedence:
              <ol>
                {" "}
                <li>
                  application.properties in /config subdirectory of the current
                  directory.
                </li>
                <li>application.properties in the current directory.</li>
                <li>application.properties in a classpath /config package.</li>
                <li>application.properties in the classpath root.</li>
              </ol>
              Once found, Spring Boot:
              <ul>
                <li>Loads the file using PropertiesPropertySourceLoader.</li>
                <li>Parses it into key-value pairs.</li>
                <li>
                  Binds those pairs to:
                  <ul>
                    <li>
                      Spring beans annotated with @ConfigurationProperties.
                    </li>
                    <li>Fields annotated with @Value.</li>
                    <li>
                      Spring Boot's built-in configuration classes (e.g.
                      server.port). <br /> <br />
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              ClassPath scanning finds your @Component, @Service, @Controller,
              etc.
            </li>
            <li>
              Auto-configuration kicks in (magic via @EnableAutoConfiguration).{" "}
              <br />
              Thanks to @EnableAutoConfiguration, Spring Boot uses
              spring.factories to load many pre-built configurations based on
              what’s on the classpath (e.g. DataSource, WebMvc, Security).{" "}
              <br /> <br />
            </li>
            <li>
              Beans are registered and wired into the application context.
            </li>
            <li>
              An embedded server (like Tomcat/Jetty/Undertow) is started if it’s
              a web app.
            </li>
            <li>ApplicationRunner / CommandLineRunner beans are executed.</li>
          </ol>
        </Col>
      </Row>
    </div>
  );
}

export default Sequence;
