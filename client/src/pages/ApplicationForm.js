import React from "react";
import { Form, Button } from "react-bootstrap";
const ApplicationForm = () => {
  return (
    <div>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="description" content />
      <meta name="author" content />
      <link
        href="https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap"
        rel="stylesheet"
      />
      <title>Application Form</title>
      <link
        rel="stylesheet"
        type="text/css"
        href="assets/css/bootstrap.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="assets/css/font-awesome.css"
      />
      <link rel="stylesheet" href="assets/css/style.css" />

      <section
        className="section section-bg"
        id="call-to-action"
        style={{
          backgroundImage: "url(assets/images/banner-image-1-1920x500.jpg)",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="cta-content">
                <br />
                <br />
                <h2>Apply here</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ***** Our Classes Start ***** */}
      <section className="section" id="our-classes">
        <div className="container">
          <br />
          <br />
          <br />
          <section className="tabs-content">
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>First Name </Form.Label>
                <Form.Control type="firstName" placeholder="Enter first name" />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="lastName" placeholder="Enter last name" />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control
                  type="date of birth"
                  placeholder="Enter date of birth"
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Address</Form.Label>
                <Form.Control type="eaddress" placeholder="Enter address" />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Education</Form.Label>
                <Form.Control type="education" placeholder="Enter education" />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Education Level</Form.Label>
                <Form.Control
                  type="level of education"
                  placeholder="Enter level of education"
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Work Experience</Form.Label>
                <Form.Control
                  type="work experience"
                  placeholder="Enter work experience"
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="phone number"
                  placeholder="Enter phone number"
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </section>
        </div>
      </section>
      {/* ***** Our Classes End ***** */}
      {/* ***** Footer Start ***** */}

      {/* jQuery */}
      {/* Bootstrap */}
      {/* Plugins */}
      {/* Global Init */}
    </div>
  );
};

export default ApplicationForm;
