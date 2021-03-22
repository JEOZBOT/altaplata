import React, { useState, useEffect } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Modal, Container, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Homepage = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true);
    }, 2000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      <div className="text-center">
        <StaticImage src="../images/altaplata-3.jpg" alt="altaplata" />
      </div>
      <Modal
        show={show}
        onHide={() => {
          setShow(false);
        }}
        size="lg"
        centered
      >
        <Modal.Header closeButton />
        <Modal.Body>
          <Container>
            <Form name="contact" data-netlify="true">
              <Form.Group controlId="name">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" name="Nombre" />
              </Form.Group>
              <Form.Group controlId="phone">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control type="tel" name="Teléfono" />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Correo</Form.Label>
                <Form.Control type="email" name="Correo" />
              </Form.Group>
              <Button type="submit">Enviar</Button>
            </Form>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Homepage;
