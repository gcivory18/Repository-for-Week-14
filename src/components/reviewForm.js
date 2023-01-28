import React from "react";
import { v4 as uuidv4 } from "uuid";
// a form at the bottom of a Movie component that allows users to leave reviews. When submitted,
// the review should be added to the movie. All this data can be stored in an array,
// no networking or database needed for this assignment.

export const Form = ({ form, reviews, setForm, setReviews }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setReviews([...reviews, form]);
    setForm({ review: "", id: uuidv4() });
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="movie" id="review-label">
          <h6 id="review-header">What's Your Hot Take?</h6>
        </label>
        <br></br>
        <textarea
          className="form-control"
          name="review"
          value={form.review}
          onChange={handleChange}
          rows="3"
          placeholder="Type your review here."
        ></textarea>
        <button className="btn btn-primary form-control" id="submit">
          Submit Your Review!
        </button>
      </form>
    </div>
  );
};

export default Form;

// Old form I decided to change

// import React from "react";
// import Button from "react-bootstrap/Button";
// import Col from "react-bootstrap/Col";
// import Form from "react-bootstrap/Form";
// import Row from "react-bootstrap/Row";
// // ReviewForm: a form at the bottom of a Movie component that allows users to leave reviews.
// // When submitted, the review should be added to the movie.
// // All this data can be stored in an array, no networking or database needed for this assignment.

// function RateTheMovie() {
//   return (
//     <Form>
//        <Row className="mb-3">
//         <Form.Group as={Col} controlId="formGridUsername">
//           <Form.Label>Username</Form.Label>
//           <Form.Control type="username" placeholder="Enter username" />
//         </Form.Group>
//         <Form.Group as={Col} controlId="formGridReview">
//           <Form.Control as="textarea" rows={3} placeholder="Write your thoughts about the movie here" />
//         </Form.Group>
//         </Row>
//       <Button variant="primary" type="submit">
//         Submit Your Review!
//       </Button>
//     </Form>
//   );
// }

// export default RateTheMovie;
