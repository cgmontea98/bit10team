import React from "react";
import { Container } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { FaLinkedinIn } from "react-icons/fa";

export const Pie = () => {
  return (
    <>
      <Container fluid className="bg-dark p-5">
        <Tabs
          defaultActiveKey="profile"
          id="fill-tab-example"
          className="mb-3"
          fill
        >
          <Tab eventKey="home" title="Horarios" className="bg-warning">
            <Table striped bordered hover className="text-center">
              <thead>
                <tr>
                  <th>Días</th>
                  <th>Apertura</th>
                  <th>Cierre</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Lunes a Miércoles</td>
                  <td>9:00AM</td>
                  <td>2:00PM</td>
                </tr>
                <tr>
                  <td>Jueves</td>
                  <td>9:00AM</td>
                  <td>1:00AM</td>
                </tr>
                <tr>
                  <td>Viernes y Sábados:</td>
                  <td>9:00AM</td>
                  <td>4:00AM</td>
                </tr>
                <tr>
                  <td>Domingos y Festivos:</td>
                  <td>11:00AM</td>
                  <td>7:00PM</td>
                </tr>
              </tbody>
            </Table>
          </Tab>
          <Tab eventKey="contact" title="Redes" className="text-center p-5">
            <DropdownButton
              as={ButtonGroup}
              title={<FaLinkedinIn />}
              id="bg-vertical-dropdown-1"
              className="p-2"
            >
              <Dropdown.Item eventKey="1">
                <a
                  href="https://www.linkedin.com/in/cgmontea98/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cristian
                </a>
              </Dropdown.Item>
              <Dropdown.Item eventKey="2">
                <a
                  href="https://www.linkedin.com/in/vanessa-robles-silva/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vanessa
                </a>
              </Dropdown.Item>
              <Dropdown.Item eventKey="3">
                <a
                  href="https://www.linkedin.com/in/julianagilcortes/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Juliana
                </a>
              </Dropdown.Item>
              <Dropdown.Item eventKey="4">
                <a
                  href="https://www.linkedin.com/in/sergiohernandezbarrios19/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sergio
                </a>
              </Dropdown.Item>
            </DropdownButton>
          </Tab>
          <Tab
            eventKey="longer-tab"
            title="Comentarios"
            className="bg-warning p-2"
          >
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <h3>Datos básicos</h3>
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Juan Jaramillo" />
                <Form.Label>Correo electrónico</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
                <Form.Label>Número de contacto</Form.Label>
                <Form.Control type="text" placeholder="ej: +573116302978" />
              </Form.Group>
              <h3>Comentarios</h3>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Select aria-label="Default select example">
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>
          </Tab>
        </Tabs>
      </Container>
    </>
  );
};
