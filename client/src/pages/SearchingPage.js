import React from "react";
import { Card } from "react-bootstrap";
const SearchingPage = () => {
  return (
    <Card style={{ width: "55rem" }}>
      <Card.Body>
        <Card.Title>Job Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Company Name</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">Location</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">Salary</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SearchingPage;
