import React from "react";
import { Form, Button } from "react-bootstrap";

const CreatePost = () => {
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
      <title>Create Post</title>
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
                <h2>Create a job post here</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ***** Testimonials Item Start ***** */}
      <section className="section" id="features">
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Job Title </Form.Label>
            <Form.Control type="title" placeholder="Enter title" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Company name</Form.Label>
            <Form.Control type="name" placeholder="Enter name" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Salary</Form.Label>
            <Form.Control type="salary" placeholder="Enter salary" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Location</Form.Label>
            <Form.Control type="location" placeholder="Enter location" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group>
            <Form.Label>job description</Form.Label>
            <Form.Control
              size="lg"
              type="job description"
              placeholder="job description"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </section>
      {/* ***** Testimonials Item End ***** */}

      {/* jQuery */}
      {/* Bootstrap */}
      {/* Plugins */}
      {/* Global Init */}
    </div>
  );
};

export default CreatePost;
