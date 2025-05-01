import React from "react";
import { Col, Row } from "react-bootstrap";

function Filters() {
  return (
    <div>
      <Row className="justify-content-center ml-5">
        <Col xs="8" md="8" className="">
          <h2>WebFilters in Spring WebFlux</h2>
        </Col>
      </Row>

      <Row className="justify-content-center ">
        <Col xs="8" md="8" className="cardItem p-5">
          What Is a WebFilter? <br />A WebFilter in Spring WebFlux is a reactive
          equivalent of the traditional servlet filter. It lets you intercept
          every HTTP request and response flowing through your application.{" "}
          <br /> <br />
          <ul>
            {" "}
            Use cases:
            <li>Logging requests</li>
            <li>Authenticating users</li>
            <li> Setting contextual data (e.g., user info) </li>
            <li>Modifying headers </li>
            <li>Rate limiting, CORS, etc.</li>
          </ul>{" "}
          <br />
          Basic Example
          <pre>
            <code>{`
@Component
public class LoggingWebFilter implements WebFilter {
    @Override
    public Mono<Void> filter(ServerWebExchange exchange, WebFilterChain chain) {
        System.out.println("Incoming request: " + exchange.getRequest().getURI());
        return chain.filter(exchange);
    }
}
  `}</code>
          </pre>
          <br /> <br />
          Use Case: Injecting Authenticated User into Reactor Context <br />
          Imagine an API where every POST or PATCH request must be
          authenticated, and you want the user data available in the service
          layer — without manually passing headers around. <br />
          Step 1: Fetch user data with WebClient <br />
          <pre>
            <code>
              {`
@Component
public class UserDataWebFilter implements WebFilter {
    private final WebClient webClient;

    public UserDataWebFilter(WebClient.Builder builder) {
        this.webClient = builder.baseUrl("https://auth-service").build();
    }

    @Override
    public Mono<Void> filter(ServerWebExchange exchange, WebFilterChain chain) {
        String path = exchange.getRequest().getPath().value();

        // Skip public endpoints
        if (isPublicPath(path)) {
            return chain.filter(exchange);
        }

        String token = exchange.getRequest().getHeaders().getFirst("Authorization");

        return getLoggedInUser(token)
            .flatMap(user -> chain.filter(exchange).contextWrite(ctx -> ctx.put("userData", user)));
    }

    private Mono<UserData> getLoggedInUser(String token) {
        return webClient.get()
                .uri("/users/me")
                .header("Authorization", token)
                .retrieve()
                .bodyToMono(UserData.class);
    }

    private boolean isPublicPath(String path) {
        return path.startsWith("/actuator") || path.startsWith("/swagger") || path.equals("/favicon.ico");
    }
}

                `}
            </code>
          </pre>{" "}
          <br />
          Accessing User Data in a Service <br />
          <pre>
            {" "}
            <code>
              {`
public Mono<WsResponse> saveEntity(Request request) {
    return Mono.deferContextual(ctx -> {
        UserData user = ctx.get("userData");
        return saveEntity(request, user);
    });
}
            `}
            </code>
          </pre>{" "}
          <br />
          This keeps your service methods clean — no need to pass
          ServerWebExchange or headers manually.
          <br />
          <br />
          <ul>
            {" "}
            Best Practices
            <li>Avoid heavy logic in WebFilters — keep it non-blocking. </li>
            <li>
              Use Reactor Context instead of exchange.getAttributes() when
              possible.{" "}
            </li>
            <li>
              Be mindful of short-circuiting the filter chain
              (chain.filter(exchange) must always be called unless you're
              intentionally blocking the request).{" "}
            </li>
            <li>
              Use @Order if you have multiple filters and need to control the
              order.{" "}
            </li>
          </ul>
        </Col>
      </Row>
    </div>
  );
}

export default Filters;
