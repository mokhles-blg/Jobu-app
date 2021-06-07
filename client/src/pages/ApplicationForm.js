import React, { useRef } from "react";
// useState
import { useSelector } from "react-redux";
import { Button, Form } from "react-bootstrap";
// Col, Row,Container
// import { Document, Page } from "react-pdf";
import axios from "axios";

import bannerImage from "../assets/images/banner-image-1-1920x500.jpg";

const ApplicationForm = ({ match, history }) => {
  const user = useSelector((state) => state.userReducer.user);
  const coverLetter = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    var application = {
      userID: user._id.toString(),
      jobID: match.params.id,
      coverLetter: coverLetter.current.value,
    };
    const applicationResult = await axios.post(
      "/api/application/apply",
      application
    );
    history.push("/jobs");
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
          backgroundImage: `url(${bannerImage}`,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="cta-content">
                <br />
                <br />
                <h2>
                  <em>Apply</em> here
                </h2>
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
            <Form onSubmit={handleSubmit}>
              <div>
                <table>
                  <tr>
                    <td>
                      <Form.Group controlId="formBasicResume">
                        <iframe
                          title="userresume"
                          src={user?.resume}
                          height="600px"
                          width="400px"
                        ></iframe>
                      </Form.Group>
                    </td>
                    <td></td>{" "}
                    <td width="300px">
                      <Form.Group controlId="formBasicName">
                        <Form.Label>Name: </Form.Label>
                        <Form.Control disabled={true} value={user?.name} />
                      </Form.Group>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>E-mail Address:</Form.Label>
                        <Form.Control disabled={true} value={user?.email} />
                      </Form.Group>
                      <Form.Group controlId="formBasicPhone">
                        <Form.Label>Phone Number:</Form.Label>
                        <Form.Control disabled={true} value={user?.phone} />
                      </Form.Group>
                      <Form.Group controlId="formBasicAddress">
                        <Form.Label>Address:</Form.Label>
                        <Form.Control disabled={true} value={user?.address} />
                      </Form.Group>
                      <Form.Group controlId="formBasicCoverLetter">
                        <Form.Label>Cover Letter:</Form.Label>
                        <Form.Control
                          as="textarea"
                          row="8"
                          placeholder="Write your cover letter here..."
                          ref={coverLetter}
                        />
                      </Form.Group>
                      <Button variant="primary" type="submit">
                        Submit
                      </Button>
                    </td>
                  </tr>
                </table>{" "}
              </div>
            </Form>
          </section>
        </div>
      </section>
    </div>
  );
};

export default ApplicationForm;
