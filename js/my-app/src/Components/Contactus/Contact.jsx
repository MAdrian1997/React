import Navbar from "../Navbar/Navbar";
import "./Contact.css";
import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import FloatingLabel from "react-bootstrap/FloatingLabel";

function Contact() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div>
      <Navbar />

      <div>
        <section className="border-light text-center mb-4 border-bottom-0 sectioncontact">
          <div className="contact">
            <h1>Contact</h1>
          </div>
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Form.Group as={Col} md="12" controlId="validationCustom01">
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="First name"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} md="12" controlId="validationCustom02">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Last name"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} md="12" controlId="validationCustom03">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="City" required />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} md="12" controlId="validationCustom04">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control type="email" placeholder="Email" required />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} md="12" controlId="validationCustom05">
                    <Form.Label>Message</Form.Label>
                    <FloatingLabel
                      controlId="floatingTextarea1"
                      label="Comments"
                    >
                      <Form.Control
                        as="textarea"
                        style={{ height: "100px" }}
                        required
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </FloatingLabel>
                  </Form.Group>
                </Row>
                <Button
                  type="submit"
                  variant="secondary"
                  className="btnContactUS"
                >
                  Send a message!
                </Button>
              </Form>
            </div>
            <div className="col-md-3"></div>
          </div>
          <div className="row container-fluid">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <iframe
                className="mapsiframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86818.66307689047!2d27.50457027758095!3d47.15622449167601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40cafb7cf639ddbb%3A0x7ccb80da5426f53c!2zSWHImWk!5e0!3m2!1sen!2sro!4v1679248042053!5m2!1sen!2sro"
                title="maps"
                width="750"
                height="600"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-md-3"></div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;
