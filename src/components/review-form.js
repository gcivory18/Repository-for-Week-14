import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
// ReviewForm: a form at the bottom of a Movie component that allows users to leave reviews.
// When submitted, the review should be added to the movie.
// All this data can be stored in an array, no networking or database needed for this assignment.

function RateTheMovie() {
  return (
    <Form>
      <Row className="align-items-center" id="reviewForm">
        <Col sm={3} className="my-1">
          <Form.Label htmlFor="inlineFormInputGroupUsername" visuallyHidden>
            Username
          </Form.Label>
          <InputGroup>
            <InputGroup.Text>@</InputGroup.Text>
            <Form.Control
              id="inlineFormInputGroupUsername"
              placeholder="Username"
            />
          </InputGroup>
        </Col>
        <Col sm={3} className="my-1">
          <Form.Label htmlFor="inlineFormInputGroupUsername" visuallyHidden>
            Write your review here!
          </Form.Label>
        </Col>
        <Col xs="auto" className="my-1">
          <Button type="submit">Submit your rating!</Button>
        </Col>
      </Row>
    </Form>
  );
}

export default RateTheMovie;
