import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Form, Button, Container } from "react-bootstrap";
import { login, videErrors } from "../JS/actions/user";
import "../assets/css/bootstrap.min.css";
import "../assets/css/font-awesome.css";
import "../assets/css/style.css";
import v1 from "../assets/images/video.mp4";

const SignIn = ({ history }) => {
  const [user, setuser] = useState({});
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
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
          <Container style={{ width: "300px" }}>
            <Form
              onSubmit={(event) => {
                event.preventDefault();
                dispatch(login(user, history));
              }}
            >
              {/* errors && errors.length > 0
                ? errors.map((el, index) => <Errors key={index} error={el} />)
              : null */}
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
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

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  onChange={handleChange}
                  placeholder="Password"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Login
              </Button>
            </Form>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
