import React from "react";
import { Col, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";

function SpringSecurity() {
  return (
    <div>
      <Helmet>
        <title>Spring Security</title>
        <meta name="description" content="Spring Security Explained | Java" />
      </Helmet>
      <Row className="justify-content-center">
        <Col xs="8" md="6" className="">
          <h2>Spring Security</h2>
        </Col>
      </Row>
      <Row className="justify-content-center  m-3">
        <Col xs="11" md="10" className="cardItem">
          <p>
            {" "}
            Security is a vital aspect of any application. Spring Security is a
            powerful and customizable authentication and access-control
            framework for Java applications. It offers comprehensive security
            services, including authentication, authorization, password
            management, protection against attacks like CSRF and more.
          </p>
          <p> Key Concepts of Spring Security</p>
          <ul>
            <li>
              <strong>Authentication:</strong> Verifying the identity of a user.
            </li>
            <li>
              <strong>Authorization:</strong> Determining what resources a user
              can access.
            </li>
            <li>
              <strong> Security Filter Chain:</strong> A chain of servlet
              filters that process incoming requests and apply security logic.
            </li>
            <li>
              {" "}
              <strong> UserDetails and UserDetailsService:</strong> Interfaces
              used to retrieve user-specific data.
            </li>
            <li>
              <strong>SecurityContext and SecurityContextHolder: </strong>Used
              to store security-related information about the current execution
              thread.
            </li>
            <li>
              <strong>Password Encoding:</strong> Always encode passwords using
              BCryptPasswordEncoder or other strong encoders.
            </li>
            <li>
              <strong> CSRF Protection: </strong>
              Default protection for state-changing operations via forms.
            </li>
            <li>
              <strong>Authentication Methods:</strong> Form login, HTTP Basic,
              JWT, OAuth2.
            </li>
          </ul>
          <Col xs="11" md="5" className="mt-3">
            <p>Step 1: Add the dependency</p>
            <pre>
              <code md="6">
                {`<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency> `}
              </code>
            </pre>
          </Col>
          <p>
            After you add the dependecy Spring Security will provide the
            following by default in Spring Security 5 (Spring Boot 2.x):
          </p>
          <ul>
            <li>Secure all endpoints</li>
            <li>Provide a login page</li>
            <li>
              Set a default user with the password in the application logs
            </li>
          </ul>
          <p>
            {" "}
            in Spring Boot 3+ (Spring Security 6+), all endpoints are unsecured.
            You need to configure an authentication mechanism
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default SpringSecurity;
