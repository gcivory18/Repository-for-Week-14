import React from "react";
import Review from "./review";
import "../App.css";
// this is what allows the user to see reviews for the movies
// a container inside of a Movie that houses Review components.
const ReviewList = ({ reviews }) => {
  return (
    <div>
      {reviews.map((review, index) => (
        <li key={index}>
          <Review review={review} />
        </li>
      ))}
    </div>
  );
};

export default ReviewList;