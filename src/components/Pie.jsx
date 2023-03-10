import React from "react";
import "../css/pie.css";
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
          className="mb-3 custom-tab"
          fill
        >
          <Tab
            eventKey="home"
            title="Horarios"
            className="text-center custom-tab"
          >
            <Table striped bordered hover className="text-center table-dark">
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
            <div class="sotial-network">
              <a href="https://www.instagram.com/beercvjsdev/" target="_blank">
                <i class="fa-brands fa-instagram text-white"></i>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100090785389104"
                target="_blank"
              >
                <i class="fa-brands fa-facebook text-white"></i>
              </a>
              <a href="https://twitter.com/CvjsDev" target="_blank">
                <i class="fa-brands fa-twitter text-white"></i>
              </a>
            </div>
          </Tab>
        </Tabs>
      </Container>
    </>
  );
};
