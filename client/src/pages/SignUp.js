import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button } from "react-bootstrap";
import Errors from "../Components/Errors";
import { register, videErrors } from "../JS/actions/user";

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
    <Form
      onSubmit={(event) => {
        event.preventDefault();
        dispatch(register(newUser, history));
      }}
    >
      {errors.length > 0 ? errors.map((el) => <Errors error={el} />) : null}
      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>Which one is you?</Form.Label>
        <Form.Control as="select" name="role" onChange={handleChange}>
          <option>Job Seeker</option>
          <option>Employer</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="name"
          name="name"
          onChange={handleChange}
          placeholder="Name"
        />
      </Form.Group>
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
        Sign up
      </Button>
    </Form>
  );
};

export default SignUp;
