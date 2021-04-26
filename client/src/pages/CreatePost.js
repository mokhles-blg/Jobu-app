import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { addJob } from "../JS/actions/job";
import "../assets/css/bootstrap.min.css";
import "../assets/css/font-awesome.css";
import "../assets/css/style.css";
const CreatePost = ({ history }) => {
  const [newJob, setNewJob] = useState(null);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setNewJob({ ...newJob, [e.target.name]: e.target.value });
  };
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
        <Form
          onSubmit={(event) => {
            event.preventDefault();
            dispatch(addJob(newJob, history));
          }}
        >
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Job Title </Form.Label>
            <Form.Control
              type="title"
              placeholder="Enter title"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Salary</Form.Label>
            <Form.Control
              type="salary"
              placeholder="Enter salary"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="location"
              placeholder="Enter location"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Job Category</Form.Label>
            <Form.Control
              type="category"
              placeholder="Enter job category"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Job Type</Form.Label>
            <Form.Control
              type="type"
              placeholder="Enter job type"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Career Level</Form.Label>
            <Form.Control
              type="careerLevel"
              placeholder="Enter career level"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>job description</Form.Label>
            <Form.Control
              as="textarea"
              row="8"
              type="job description"
              placeholder="job description"
              onChange={handleChange}
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
