import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Container, Col } from "react-bootstrap";
import Errors from "../Components/Errors";
import { register, videErrors } from "../JS/actions/user";
import "../assets/css/bootstrap.min.css";
import "../assets/css/font-awesome.css";
import "../assets/css/style.css";
import v1 from "../assets/images/video.mp4";

const SignUp = ({ history }) => {
  const [newUser, setNewUser] = useState({ role: "job seeker" });
  const errors = useSelector((state) => state.userReducer.errors);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    return () => {
      dispatch(videErrors());
    };
  }, [dispatch]);
  return (
    <div className="main-banner" id="top">
      <video autoPlay muted loop id="bg-video">
        <source src={v1} type="video/mp4" />
      </video>
      <div className="video-overlay header-text">
        <div className="caption">
          <h2>
            Find the perfect <em>Job</em>
          </h2>
          <Container style={{ width: "400px" }}>
            <Form
              onSubmit={(event) => {
                event.preventDefault();
                dispatch(register(newUser, history));
              }}
            >
              {errors.length > 0
                ? errors.map((el) => <Errors error={el} />)
                : null}
              <Form.Row>
                <Form.Group as={Col} controlId="exampleForm.ControlSelect1">
                  <Form.Label className="formtitle">
                    What is your role?
                  </Form.Label>
                  <Form.Control as="select" name="role" onChange={handleChange}>
                    <option>Job Seeker</option>
                    <option>Employer</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group as={Col} controlId="formBasicName">
                  <Form.Label className="formtitle">Name</Form.Label>
                  <Form.Control
                    type="name"
                    name="name"
                    onChange={handleChange}
                    placeholder="Name"
                  />
                </Form.Group>
              </Form.Row>

              <Form.Group controlId="formBasicAddress">
                <Form.Label className="formtitle">Address</Form.Label>
                <Form.Control
                  type="address"
                  name="address"
                  onChange={handleChange}
                  placeholder="Adress"
                />
              </Form.Group>

              <Form.Row>
                <Form.Group as={Col} controlId="formBasicPhone">
                  <Form.Label className="formtitle">Phone Number</Form.Label>
                  <Form.Control
                    type="phone"
                    name="phone"
                    onChange={handleChange}
                    placeholder="Phone Number"
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formBasicPhone">
                  <Form.Label className="formtitle">Website</Form.Label>
                  <Form.Control
                    type="website"
                    name="website"
                    onChange={handleChange}
                    placeholder="Website"
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="formBasicEmail">
                  <Form.Label className="formtitle">Email address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    onChange={handleChange}
                    placeholder="Enter email"
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
                <Form.Group as={Col} controlId="formBasicPassword">
                  <Form.Label className="formtitle">Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    onChange={handleChange}
                    placeholder="Password"
                  />
                </Form.Group>
              </Form.Row>
              <Button variant="primary" type="submit">
                Sign up
              </Button>
            </Form>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
