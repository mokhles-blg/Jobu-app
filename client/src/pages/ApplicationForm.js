import React from "react";
import { useSelector } from "react-redux";
import { Form, Button } from "react-bootstrap";
const ApplicationForm = () => {
  const user = useSelector((state) => state.userReducer.user);
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
              <div>
                {" "}
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Name: {user?.name}</Form.Label>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>E-mail Address: {user?.email}</Form.Label>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Phone Number:{user?.phone}</Form.Label>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Address: {user?.address}</Form.Label>
                </Form.Group>
              </div>
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
