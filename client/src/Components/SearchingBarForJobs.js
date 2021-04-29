import React, { useState } from "react";
import { InputGroup, FormControl, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { searchJobs } from "../JS/actions/job";

const SearchingBarForJobs = () => {
  const [search, setSearch] = useState({});
  const dispatch = useDispatch();
  const searchFromStore = useSelector((state) => state.jobReducer.search);

  const handleChange = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };
  const onSearchClick = (e) => {
    e.preventDefault();
    dispatch(searchJobs({ ...searchFromStore, ...search }));
  };

  return (
    <Form inline onSubmit={onSearchClick}>
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
        defaultValue={searchFromStore.keyword}
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
          defaultValue={searchFromStore.location}
        />
      </InputGroup>
      <Button
        style={{ width: "100px", height: "50px" }}
        type="submit"
        className="mb-2"
      >
        Search
      </Button>
    </Form>
  );
};

export default SearchingBarForJobs;
