import React, { useState, useEffect } from "react";
import { InputGroup, FormControl, Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchJobs } from "../JS/actions/job";

const SearchingBar = () => {
  const history = useHistory();
  const [search, setSearch] = useState({});
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };
  const onSearchClick = (e) => {
    e.preventDefault();
    history.push("/jobs");
    dispatch(searchJobs(search));
  };

  return (
    <Form inline>
      <Form.Label htmlFor="inlineFormInputName2" srOnly>
        Keyword
      </Form.Label>
      <Form.Control
        style={{ width: "300px", height: "50px" }}
        className="mb-2 mr-sm-2"
        id="inlineFormInputName2"
        placeholder="Keyword"
        onChange={handleChange}
        name="keyword"
      />
      <Form.Label htmlFor="inlineFormInputGroupUsername2" srOnly>
        Location
      </Form.Label>
      <InputGroup className="mb-2 mr-sm-2">
        <FormControl
          style={{ width: "300px", height: "50px" }}
          id="inlineFormInputGroupUsername2"
          placeholder="Location"
          onChange={handleChange}
          name="location"
        />
      </InputGroup>
      <Button
        style={{ width: "100px", height: "50px" }}
        type="submit"
        className="mb-2"
        onClick={onSearchClick}
      >
        Search
      </Button>
    </Form>
  );
};

export default SearchingBar;
