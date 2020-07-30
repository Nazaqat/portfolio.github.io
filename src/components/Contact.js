import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";

function Contact() {
  return (
    <div>
      <Accordion style={{ padding: "3rem", justifyContent: "center" }}>
        {/* First card  */}
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              <i class="fa fa-phone-square" aria-hidden="true"></i> Mobile
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              You are welcome to contact me between 08:00 - 18:00 at +45 53 63
              70 61
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        {/* Second card  */}
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              <i class="fa fa-envelope" aria-hidden="true"></i> E-mail
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <a href="mailto:naa.dk@yahoo.com">naa.dk@yahoo.com</a>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        {/* Third card  */}
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="2">
              <a
                href=" https://www.linkedin.com/in/nazaqat-ali/"
                rel="noopener noreferrer"
                target="_blank"
                style={{ color: "#0e76a8" }}
              >
                <i
                  className="fa fa-linkedin-square"
                  style={{ color: "#0e76a8" }}
                  aria-hidden="true"
                ></i>{" "}
                LinkedIn
              </a>{" "}
            </Accordion.Toggle>
          </Card.Header>
        </Card>
        {/* Fourth card  */}
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="3">
              <i class="fa fa-skype" aria-hidden="true"></i> Skype
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="3">
            <Card.Body>+45 53 63 70 61</Card.Body>
          </Accordion.Collapse>
        </Card>
        {/* Fifth card  */}
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="4">
              <i class="fa fa-whatsapp" aria-hidden="true"></i> Whatsapp
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="4">
            <Card.Body>+45 52 69 32 74</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
}

export default Contact;
