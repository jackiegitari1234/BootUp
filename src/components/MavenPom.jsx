import React from "react";
import { Col, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";

function MavenPom() {
  return (
    <div>
      <Helmet>
        <title>Maven</title>
        <meta
          name="description"
          content="Mave Explained | Dependency Management"
        />
      </Helmet>
      <Row className="justify-content-center">
        <Col xs="8" md="6" className="">
          <h2>Dependency Management</h2>
        </Col>
      </Row>
      <Row className="justify-content-center  m-3">
        <Col xs="11" md="10" className="cardItem">
          <p>
            If you often work with Spring Boot, you're likely to have come
            across the pom.xml file. This is an XML found at the root of a an
            application. It's mainly found in maven projects with it's main role
            being dependency management. This pom.xml file (Project Object
            Model) directs Maven on what libraries to download, how to build,
            package and deploy a spring boot application
          </p>
          <p>POM.XML Strucrue</p>
          <Col xs="11" md="9" className="">
            <pre>
              <code>
                {`<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">

    <modelVersion>4.0.0</modelVersion>

    <groupId>com.mycompany</groupId>               <!-- company/organization -->
    <artifactId>my-first -app</artifactId>         <!-- project id -->
    <version>1.0.0</version>                       <!-- your project version -->
    <packaging>jar</packaging>                     <!-- packaging, war/jar -->
    
    <name>My First App</name>

    <dependencies>
        <!-- Dependencies go here -->
    </dependencies>

</project> `}
              </code>
            </pre>
          </Col>
          <p>
            <strong>A dependency</strong> is a JAR file that maven downoads from
            remove repositories to your classpath for your project to compile.
            Maven also handles <strong>transitive dependencies </strong>, these
            are the libraries that your dependency relies on. For example,
            Spring Boot Starter Web includes Tomcat, Jackson and other essential
            libraries. <br />
            Example:{" "}
          </p>
          <Col xs="11" md="6" className="">
            <pre>
              <code>
                {`<!-- https://mvnrepository.com/artifact/org.projectlombok/lombok -->
<dependency>
    <groupId>org.projectlombok</groupId>
    <artifactId>lombok</artifactId>
    <version>1.18.38</version>
    <scope>provided</scope>
</dependency>`}
              </code>
            </pre>
          </Col>
          <p>
            This tells Maven: “Download the lombok library version 1.18.38 from
            maven central repository.”
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default MavenPom;
