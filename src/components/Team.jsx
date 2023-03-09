import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
export const Team = () => {
  return (
    <Container className="p-5">
      <Row>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              className="p-2"
              variant="top"
              src="https://media.licdn.com/dms/image/D4E03AQGjbh19k9H3-A/profile-displayphoto-shrink_200_200/0/1674489184601?e=1683763200&v=beta&t=XaQavMIai5sTYycA866Doc5g0fxVuXJx0UfNF9iD0yo"
            />
            <Card.Body>
              <Card.Title>Cristian Montealegre</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                Encargado de repositorio y despliegue.
              </ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Button
                variant="primary"
                href="https://www.linkedin.com/in/cgmontea98/"
              >
                LINKEDIN
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              className="p-2"
              variant="top"
              src="https://media.licdn.com/dms/image/C4E03AQHIX5YDIL2Pvw/profile-displayphoto-shrink_400_400/0/1531924463539?e=1683763200&v=beta&t=3u2jRsyLAiryyvshxCSvuzhlYWvaBmzFhapjIF9bi3o"
            />
            <Card.Body>
              <Card.Title>Vannesa Robles</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Suplente.</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Button
                variant="primary"
                href="https://www.linkedin.com/in/vanessa-robles-silva/"
              >
                {" "}
                LINKEDIN
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              className="p-2"
              variant="top"
              src="https://media.licdn.com/dms/image/D5603AQGRJ8VtrIQU_A/profile-displayphoto-shrink_800_800/0/1673058233618?e=1683763200&v=beta&t=Dhksh334Q50ehIhzs6E-mWxChlpPTcfb199yWMZqp2E"
            />
            <Card.Body>
              <Card.Title>Juliana Gil</Card.Title>
            </Card.Body>
            {""}
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Encargada de documentación.</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Button
                variant="primary"
                href="https://www.linkedin.com/in/julianagilcortes/"
              >
                LINKEDIN
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              className="p-2"
              variant="top"
              src="https://sergiohernan19.github.io/bit07me/img/me.png"
              width={300} height={289}/>
            <Card.Body>
              <Card.Title>Sergio Hernandez</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Encargado wireframe de baja.</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Button
                variant="primary"
                href="https://sergiohernan19.github.io/bit07me/"
              >
                LINKEDIN
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
