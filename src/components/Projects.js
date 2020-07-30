import React from "react";
import {
  Tabs,
  Tab,
  CardGroup,
  Card,
  ButtonGroup,
  Button,
} from "react-bootstrap";
import "./Projects.css";

function Projects() {
  return (
    <div>
      <Tabs
        defaultActiveKey="React JS"
        transition={false}
        id="noAnimationTab"
        style={{ display: "flex", justifyContent: "center", padding: "1rem" }}
      >
        <Tab eventKey="React JS" title="React JS">
          <CardGroup>
            <Card className="CardStyling">
              <Card.Img
                variant="top"
                src="https://i.ibb.co/rHV7MLn/seasony.jpg"
              />
              <Card.Body>
                <Card.Title>Hack Your Future Final Project</Card.Title>
                <Card.Text>
                  React JS, Node JS, Express JS, Knex JS, Firebase, Javascript,
                  Html5, Css3, MySQL, Github
                </Card.Text>
              </Card.Body>
              <ButtonGroup aria-label="Basic example">
                <Button variant="secondary" disabled>
                  Code Pen
                </Button>
                <Button
                  variant="info"
                  href="https://github.com/Nazaqat/FP-class11-1"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Github
                </Button>
                <Button variant="secondary" disabled>
                  Live Preview
                </Button>
              </ButtonGroup>
            </Card>

            {/* React second card  */}
            <Card className="CardStyling">
              <Card.Img
                variant="top"
                src="https://i.ibb.co/rHV7MLn/seasony.jpg"
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
              <ButtonGroup aria-label="Basic example">
                <Button variant="secondary">Code Pen</Button>
                <Button
                  variant="info"
                  href="https://github.com/Nazaqat/FP-class11-1"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Github
                </Button>
                <Button variant="secondary">Live Preview</Button>
              </ButtonGroup>
            </Card>
            {/* React third card  */}
            <Card className="CardStyling">
              <Card.Img
                variant="top"
                src="https://i.ibb.co/rHV7MLn/seasony.jpg"
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
              <ButtonGroup aria-label="Basic example">
                <Button variant="secondary">Code Pen</Button>
                <Button
                  variant="info"
                  href="https://github.com/Nazaqat/FP-class11-1"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Github
                </Button>
                <Button variant="secondary">Live Preview</Button>
              </ButtonGroup>
            </Card>
          </CardGroup>
        </Tab>

        {/* Javascript first card  */}
        <Tab eventKey="JavaScript" title="JavaScript">
          <CardGroup>
            <Card className="CardStyling">
              <Card.Img
                variant="top"
                src="https://i.ibb.co/rHV7MLn/seasony.jpg"
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
              <ButtonGroup aria-label="Basic example">
                <Button variant="secondary">Code Pen</Button>
                <Button
                  variant="info"
                  href="https://github.com/Nazaqat/FP-class11-1"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Github
                </Button>
                <Button variant="secondary">Live Preview</Button>
              </ButtonGroup>
            </Card>

            {/* Javascript second card  */}
            <Card className="CardStyling">
              <Card.Img
                variant="top"
                src="https://i.ibb.co/rHV7MLn/seasony.jpg"
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
              <ButtonGroup aria-label="Basic example">
                <Button variant="secondary">Code Pen</Button>
                <Button
                  variant="info"
                  href="https://github.com/Nazaqat/FP-class11-1"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Github
                </Button>
                <Button variant="secondary">Live Preview</Button>
              </ButtonGroup>
            </Card>

            {/* Javascript third card */}
            <Card className="CardStyling">
              <Card.Img
                variant="top"
                src="https://i.ibb.co/rHV7MLn/seasony.jpg"
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
              <ButtonGroup aria-label="Basic example">
                <Button variant="secondary">Code Pen</Button>
                <Button
                  variant="info"
                  href="https://github.com/Nazaqat/FP-class11-1"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Github
                </Button>
                <Button variant="secondary">Live Preview</Button>
              </ButtonGroup>
            </Card>
          </CardGroup>
        </Tab>

        {/* Wordpress first card  */}
        <Tab eventKey="Wordpress" title="Wordpress">
          <CardGroup>
            <Card className="CardStyling">
              <Card.Img
                variant="top"
                src="https://i.ibb.co/rHV7MLn/seasony.jpg"
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
              <ButtonGroup aria-label="Basic example">
                <Button variant="secondary">Code Pen</Button>
                <Button
                  variant="info"
                  href="https://github.com/Nazaqat/FP-class11-1"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Github
                </Button>
                <Button variant="secondary">Live Preview</Button>
              </ButtonGroup>
            </Card>

            {/* Wordpress second card  */}
            <Card className="CardStyling">
              <Card.Img
                variant="top"
                src="https://i.ibb.co/rHV7MLn/seasony.jpg"
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
              <ButtonGroup aria-label="Basic example">
                <Button variant="secondary">Code Pen</Button>
                <Button
                  variant="info"
                  href="https://github.com/Nazaqat/FP-class11-1"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Github
                </Button>
                <Button variant="secondary">Live Preview</Button>
              </ButtonGroup>
            </Card>

            {/* Wordpress third card  */}
            <Card className="CardStyling">
              <Card.Img
                variant="top"
                src="https://i.ibb.co/rHV7MLn/seasony.jpg"
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
              <ButtonGroup aria-label="Basic example">
                <Button variant="secondary">Code Pen</Button>
                <Button
                  variant="info"
                  href="https://github.com/Nazaqat/FP-class11-1"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Github
                </Button>
                <Button variant="secondary">Live Preview</Button>
              </ButtonGroup>
            </Card>
          </CardGroup>
        </Tab>

        {/* All cards - first card  */}
        <Tab eventKey="All" title="All">
          <CardGroup>
            <Card className="CardStyling">
              <Card.Img
                variant="top"
                src="https://i.ibb.co/rHV7MLn/seasony.jpg"
                style={{}}
              />
              <Card.Body>
                <Card.Title>Hack Your Future Final Project</Card.Title>
                <Card.Text>
                  React JS, Node JS, Express JS, Knex JS, Firebase, Javascript,
                  Html5, Css3, MySQL, Github
                </Card.Text>
              </Card.Body>
              <ButtonGroup aria-label="Basic example">
                <Button variant="secondary" disabled>
                  Code Pen
                </Button>
                <Button
                  variant="info"
                  href="https://github.com/Nazaqat/FP-class11-1"
                  rel="noopener noreferrer"
                  target="_blank"
                  raised
                >
                  Github
                </Button>
                <Button variant="secondary" disabled>
                  Live Preview
                </Button>
              </ButtonGroup>
            </Card>

            {/* all cards - second card  */}
            <Card className="CardStyling">
              <Card.Img
                variant="top"
                src="https://i.ibb.co/rHV7MLn/seasony.jpg"
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
              <ButtonGroup aria-label="Basic example">
                <Button variant="secondary">Code Pen</Button>
                <Button
                  variant="info"
                  href="https://github.com/Nazaqat/FP-class11-1"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Github
                </Button>
                <Button variant="secondary">Live Preview</Button>
              </ButtonGroup>
            </Card>
            {/* all cards - third card  */}
            <Card className="CardStyling">
              <Card.Img
                variant="top"
                src="https://i.ibb.co/rHV7MLn/seasony.jpg"
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
              <ButtonGroup aria-label="Basic example">
                <Button variant="secondary">Code Pen</Button>
                <Button
                  variant="info"
                  href="https://github.com/Nazaqat/FP-class11-1"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Github
                </Button>
                <Button variant="secondary">Live Preview</Button>
              </ButtonGroup>
            </Card>
          </CardGroup>
          <CardGroup>
            {/* all cards - fourth card  */}
            <Card className="CardStyling">
              <Card.Img
                variant="top"
                src="https://i.ibb.co/rHV7MLn/seasony.jpg"
                style={{}}
              />
              <Card.Body>
                <Card.Title>Hack Your Future Final Project</Card.Title>
                <Card.Text>
                  React JS, Node JS, Express JS, Knex JS, Firebase, Javascript,
                  Html5, Css3, MySQL, Github
                </Card.Text>
              </Card.Body>
              <ButtonGroup aria-label="Basic example">
                <Button variant="secondary" disabled>
                  Code Pen
                </Button>
                <Button
                  variant="info"
                  href="https://github.com/Nazaqat/FP-class11-1"
                  rel="noopener noreferrer"
                  target="_blank"
                  raised
                >
                  Github
                </Button>
                <Button variant="secondary" disabled>
                  Live Preview
                </Button>
              </ButtonGroup>
            </Card>
            {/* all cards - fifth card  */}
            <Card className="CardStyling">
              <Card.Img
                variant="top"
                src="https://i.ibb.co/rHV7MLn/seasony.jpg"
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
              <ButtonGroup aria-label="Basic example">
                <Button variant="secondary">Code Pen</Button>
                <Button
                  variant="info"
                  href="https://github.com/Nazaqat/FP-class11-1"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Github
                </Button>
                <Button variant="secondary">Live Preview</Button>
              </ButtonGroup>
            </Card>

            {/* all cards - sixth card  */}
            <Card className="CardStyling">
              <Card.Img
                variant="top"
                src="https://i.ibb.co/rHV7MLn/seasony.jpg"
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
              <ButtonGroup aria-label="Basic example">
                <Button variant="secondary">Code Pen</Button>
                <Button
                  variant="info"
                  href="https://github.com/Nazaqat/FP-class11-1"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Github
                </Button>
                <Button variant="secondary">Live Preview</Button>
              </ButtonGroup>
            </Card>

            {/* all cards - seventh card  */}
          </CardGroup>
          <CardGroup>
            <Card className="CardStyling">
              <Card.Img
                variant="top"
                src="https://i.ibb.co/rHV7MLn/seasony.jpg"
                style={{}}
              />
              <Card.Body>
                <Card.Title>Hack Your Future Final Project</Card.Title>
                <Card.Text>
                  React JS, Node JS, Express JS, Knex JS, Firebase, Javascript,
                  Html5, Css3, MySQL, Github
                </Card.Text>
              </Card.Body>
              <ButtonGroup aria-label="Basic example">
                <Button variant="secondary" disabled>
                  Code Pen
                </Button>
                <Button
                  variant="info"
                  href="https://github.com/Nazaqat/FP-class11-1"
                  rel="noopener noreferrer"
                  target="_blank"
                  raised
                >
                  Github
                </Button>
                <Button variant="secondary" disabled>
                  Live Preview
                </Button>
              </ButtonGroup>
            </Card>
            {/* all cards - eight card  */}
            <Card className="CardStyling">
              <Card.Img
                variant="top"
                src="https://i.ibb.co/rHV7MLn/seasony.jpg"
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
              <ButtonGroup aria-label="Basic example">
                <Button variant="secondary">Code Pen</Button>
                <Button
                  variant="info"
                  href="https://github.com/Nazaqat/FP-class11-1"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Github
                </Button>
                <Button variant="secondary">Live Preview</Button>
              </ButtonGroup>
            </Card>
            {/* all cards - nineth card  */}
            <Card className="CardStyling">
              <Card.Img
                variant="top"
                src="https://i.ibb.co/rHV7MLn/seasony.jpg"
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
              <ButtonGroup aria-label="Basic example">
                <Button variant="secondary">Code Pen</Button>
                <Button
                  variant="info"
                  href="https://github.com/Nazaqat/FP-class11-1"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Github
                </Button>
                <Button variant="secondary">Live Preview</Button>
              </ButtonGroup>
            </Card>
          </CardGroup>
        </Tab>
      </Tabs>
    </div>
  );
}

export default Projects;
