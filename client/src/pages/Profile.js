import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import {
  Tab,
  Col,
  Nav,
  Row,
  Card,
  Button,
  Form,
  Container,
} from "react-bootstrap";

import "../assets/css/bootstrap.min.css";
import "../assets/css/font-awesome.css";
import "../assets/css/style.css";
import axios from "axios";
import UserTable from "../Components/UserTable";
import ReceivedApplications from "../Components/ReceivedApplications";
import MyPosts from "../Components/MyPosts";

import { Document, Page, pdfjs } from "react-pdf";
// import { getApplication } from "../JS/actions/application";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const Profile = (history) => {
  const user = useSelector((state) => state.userReducer.user);
  // const application = useSelector(
  //   (state) => state.applicationReducer.application
  // );
  const [savedjobs, setSavedjobs] = useState([]);
  const uploadInput = useRef(null);
  const [resume, setResume] = useState({});
  // const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      if (user) {
        setResume(user.resume);
        const result = await axios.get("/api/getSavedJobs", {
          params: { savedJobsIds: JSON.stringify(user?.savedJobs) },
        });
        setSavedjobs(result.data.jobsToGet);
        // } else {
        //   dispatch(getApplication());
        // }
      }
    }
    fetchData();
  }, [user]);

  const handleChange = (event) => {
    //setResume(e.target.files[0]);
    var r = new FileReader();
    r.readAsDataURL(event.target.files[0]);
    r.onloadend = (e) => {
      setResume(e.target.result);
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (uploadInput) {
      const data = new FormData();
      var r = new FileReader();
      r.readAsDataURL(uploadInput.current.files[0]);
      r.onloadend = async (e) => {
        data.append("file", e.target.result);
        data.append("filename", "Resume_" + user?._id.toString());
        data.append("userId", user?._id);
        const uploadResult = await axios.post("/api/user/uploadResume", data);
        if (uploadResult && uploadResult.status === 200) {
          setResume(uploadResult.data.updatedUser.resume);
        }
      };
    } else {
      //no file to upload
    }
  };

  if (user?.role.toLowerCase() === "admin") {
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
        <title>Profile</title>
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
                  <h2>Welcome to your profile</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section" id="trainers">
          <div className="container">
            <br />
            <br />

            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row>
                <Col sm={3}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Manage Users</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    {" "}
                    <Tab.Pane eventKey="first">
                      <UserTable />
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </div>
        </section>
      </div>
    );
  } else if (user?.role.toLowerCase() === "employer") {
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
        <title>Profile</title>
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
                  <h2>Welcome to your profile</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section" id="trainers">
          <div className="container">
            <br />
            <br />

            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row>
                <Col sm={3}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Contact Information</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">
                        Received Applications
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">My Posts</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <h4>User Name: {user?.name}</h4>
                      <h4>E-mail Address: {user?.email}</h4>
                      <h4>Phone Number: {user?.phone}</h4>
                      <h4>Address: {user?.address}</h4>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <ReceivedApplications />
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <MyPosts />
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </div>
        </section>
      </div>
    );
  } else {
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
        <title>Profile</title>

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
                  <h2>
                    Hi <em>{user?.name}</em>, Welcome to your profile
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="trainers">
          <div className="container">
            <br />
            <br />

            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row>
                <Col sm={3}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Contact Information</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Import Resume</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Saved Jobs</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <h4>User Name: {user?.name}</h4>
                      <h4>Email: {user?.email}</h4>
                      <h4>Phone Number: {user?.phone}</h4>
                      <h4>Address: {user?.address}</h4>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Container>
                        <Form onSubmit={handleSubmit}>
                          <Row>
                            <Col>
                              <Form.Group>
                                <input
                                  type="file"
                                  onChange={handleChange}
                                  label="Resume"
                                  ref={uploadInput}
                                />
                              </Form.Group>
                            </Col>
                            <Col>
                              <Button type="submit">Upload</Button>
                            </Col>
                          </Row>
                        </Form>
                        <Document file={resume} onLoadError={console.error}>
                          <Page pageNumber={1} />
                        </Document>
                      </Container>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      {savedjobs &&
                        savedjobs.length > 0 &&
                        savedjobs.map((job, index) => (
                          <Card key={index}>
                            <Card.Body>
                              <Card.Title>{job.title}</Card.Title>
                              <Card.Text>
                                {job.description.length <= 60
                                  ? job.description
                                  : job.description.slice(0, 300) + "..."}
                              </Card.Text>
                              <Button variant="primary">Application</Button>
                            </Card.Body>
                          </Card>
                        ))}
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </div>
        </section>
      </div>
    );
  }
};

export default Profile;
