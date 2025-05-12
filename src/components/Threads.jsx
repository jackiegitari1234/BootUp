import React from "react";
import { Col, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";

function Threads() {
  return (
    <div>
      <Helmet>
        <title>Java Threads</title>
        <meta
          name="description"
          content="Java Threads Explained | Platform And Virtual Threads"
        />
      </Helmet>
      <Row className="justify-content-center">
        <Col xs="8" md="6" className="">
          <h2>Java Threads</h2>
        </Col>
      </Row>
      <Row className="justify-content-center  m-3">
        <Col xs="11" md="10" className="cardItem">
          <p>
            In programming, a thread is the smallest unit of execution within a
            process. Think of a thread as a lightweight worker that carries out
            tasks on behalf of your program. If a process is a factory, then
            threads are the workers on the assembly line, each one can perform
            tasks independently, sometimes even simultaneously. <br /> <br />
            Most applications today use multithreading to perform multiple
            operations at the same time. For example, a web server might use one
            thread to handle a request, another to read from the database, and
            another to send the response back to the user, all without waiting
            for one task to finish before starting the next. <br />
            <br />
            Java traditionally uses platform threads, which are tightly tied to
            operating system threads. While powerful, they come with limitations
            especially when it comes to scalability. Creating and managing
            thousands of platform threads can become inefficient, leading to
            problems like high memory usage or thread contention.
            <br />
            <br />
            Java provides two main types of threads for concurrent execution:
            <ol>
              <li>Platform Threads (the traditional model)</li>
              <li>Virtual Threads (introduced in Java 21)</li>
            </ol>
            <ol>
              <li>
                Platform Threads <br />
                Platform threads are the classic threads Java developers have
                been using for years. When you create a thread using new
                Thread(...), you’re creating a platform thread. These are mapped
                one-to-one with operating system threads, meaning each Java
                thread corresponds directly to an OS-managed thread.
              </li>
              <li>
                Virtual Threads <br />
                Virtual threads, introduced in Java 21 (previewed in Java 19 and
                20), are lightweight threads that the JVM schedules internally,
                not the OS. They allow developers to write concurrent code using
                the same thread-per-task style, but with drastically better
                scalability. <br />
                <br />
                <br />
              </li>
            </ol>
          </p>
          <Row>
            {/* Platform Thread */}
            <Col xs="12" md="6">
              <h5>Platform Thread</h5>
              <pre
                style={{
                  overflowX: "auto",
                }}
              >
                <code>
                  {`public class PlatformThreadExample {
    public static void main(String[] args) {
        Thread thread = new Thread(() -> {
            try {
                Thread.sleep(1000);
                System.out.println("Hello from a Platform Thread!");
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        });
        thread.start();
    }
}`}
                </code>
              </pre>
            </Col>

            {/* Virtual Thread */}
            <Col xs="12" md="6">
              <h5>Virtual Thread</h5>
              <pre
                style={{
                  overflowX: "auto",
                }}
              >
                <code>
                  {`public class VirtualThreadExample {
    public static void main(String[] args) {
        Thread.startVirtualThread(() -> {
            try {
                Thread.sleep(1000);
                System.out.println("Hello from a Virtual Thread!");
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        });
        
    }
}`}
                </code>{" "}
              </pre>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Threads;
