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
            In Spring Boot 3+ (Spring Security 6+), all endpoints are unsecured.
            You need to configure an authentication mechanism. by adding this
            configuration file in your project
            <Col xs="11" md="7" className="ml-3">
              <pre>
                <code>
                  {`import org.springframework.context.annotation.Bean;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.authorizeHttpRequests(auth -> auth
                        .anyRequest()
                        .authenticated())
                .httpBasic(Customizer.withDefaults());
        return http.build();
    }
}
`}
                </code>
              </pre>
            </Col>
          </p>
          <p>Step 2: Configure Basic Auth</p>
          <p>
            Here, we set up user credentials that will authenticate requests
            received by our Application
          </p>
          <Col xs="11" md="7" className="ml-3">
            <pre>
              <code>
                {`import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class UserConfig {

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public UserDetailsService user() {
        return new InMemoryUserDetailsManager(
                User.withUsername("user")
                        .roles("USER")
                        .password(passwordEncoder().encode("password"))
                        .build()
        );
    }
}`}
              </code>
            </pre>
          </Col>
          <p>
            Noww, all your APIs are well protected. If you open postman and make
            a request to the application without a basic Auth, or with invalid
            credentials (find the valid crdentials in the code snippet above),
            You will get an error code 401:Unauthorized{" "}
          </p>
          <p>Feel free to modify the username & password above</p>
          <br />
          Step3: Exclude Public URLs
          <p>
            To exclude public URLs from basic authorization, add the code{" "}
            <code> .requestMatchers("/api/**").permitAll</code> to the
            SecurityConfig class. The SecurityConfig configuration class should
            then look like:
          </p>
          <Col xs="11" md="7" className="ml-3">
            <pre>
              <code>
                {`import org.springframework.context.annotation.Bean;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.authorizeHttpRequests(auth -> auth
                        .requestMatchers("/api/**").permitAll
                        .anyRequest()
                        .authenticated())
                .httpBasic(Customizer.withDefaults());
        return http.build();
    }
}
`}
              </code>
            </pre>
          </Col>
          <p>Endpoints prefixed by /api/ should work without basic Auth</p>
        </Col>
      </Row>
    </div>
  );
}

export default SpringSecurity;
