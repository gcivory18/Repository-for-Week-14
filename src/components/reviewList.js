import React from "react";
import Review from "./review";
import "../App.css";
//component which shows all the reviews for the movie
// this is what allows the user to see reviews for the movies
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