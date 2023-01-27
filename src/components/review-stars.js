import ReactStars from "react-stars";
import React from "react";
import { render } from "react-dom";

const RatingChanged = (newRating) => {
  console.log(newRating);
};

render(
  <ReactStars
    count={5}
    onChange={RatingChanged}
    size={24}
    color2={"#ffd700"}
  />,

  document.getElementById("rating")
);

export default RatingChanged
// Stars: a one to five-star rating component that allows users to rate something
