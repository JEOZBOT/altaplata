import React, { useState, useEffect } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Modal, Container, Form, Button } from "react-bootstrap";
import Seo from "../components/seo";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fontsource/roboto";

const Wrapper = styled.div`
  font-family: "Roboto", sans-serif;
`;

const StyledModal = styled(Modal)`
  .modal-content {
    background: #e5e5e5;
  }
  label {
    letter-spacing: 0.2em;
    font-size: 0.8rem;
  }
`;

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
    <Wrapper>
      <Seo title="AG Air life" />
      <div className="text-center">
        <StaticImage
          src="../images/altaplata-3.jpg"
          alt="alta plata"
          className="d-block"
        />
      </div>
      <footer className="bg-dark py-5">
        <Container className="text-center">
          <p className="text-white mb-4">¿Deseas recibir más información?</p>
          <Button
            variant="outline-light"
            onClick={() => {
              setShow(true);
            }}
          >
            Déjanos tus datos
          </Button>
        </Container>
      </footer>
      <StyledModal
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
            <StaticImage
              src="../images/logo.png"
              alt="alta plata"
              width={100}
            />
            <h2 className="h4">
              Déjanos tus datos para recibir más información
            </h2>
            <Form name="contact" data-netlify="true">
              <Form.Group controlId="name">
                <Form.Label className="text-uppercase">Nombre</Form.Label>
                <Form.Control type="text" name="Nombre" />
              </Form.Group>
              <Form.Group controlId="phone">
                <Form.Label className="text-uppercase">Teléfono</Form.Label>
                <Form.Control type="tel" name="Teléfono" />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label className="text-uppercase">Correo</Form.Label>
                <Form.Control type="email" name="Correo" />
              </Form.Group>
              <Button type="submit" className="bg-dark border-0">
                Enviar
              </Button>
            </Form>
          </Container>
        </Modal.Body>
      </StyledModal>
    </Wrapper>
  );
};

export default Homepage;
