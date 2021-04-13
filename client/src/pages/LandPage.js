import React from "react";
import { InputGroup, FormControl, Button, Form } from "react-bootstrap";
const Landpage = () => {
  return (
    <Form inline>
      <Form.Label htmlFor="inlineFormInputName2" srOnly>
        Key words
      </Form.Label>
      <Form.Control
        className="mb-2 mr-sm-2"
        id="inlineFormInputName2"
        placeholder="Key words"
      />
      <Form.Label htmlFor="inlineFormInputGroupUsername2" srOnly>
        location
      </Form.Label>
      <InputGroup className="mb-2 mr-sm-2">
        <FormControl
          id="inlineFormInputGroupUsername2"
          placeholder="Location"
        />
      </InputGroup>
      <Button type="submit" className="mb-2">
        Search
      </Button>
    </Form>
  );
};

export default Landpage;
