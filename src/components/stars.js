import React, { useState } from "react";
// // Stars: a one to five-star rating component that allows users to rate something
const Stars = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            id="stars"
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};

export default Stars;

// imported this from ReactStars but it did not really work so I changed it 

// import ReactStars from "react-stars";
// import React from "react";
// import { render } from "react-dom";


// const RatingChanged = (newRating) => {
//   console.log(newRating);
// return
//   <ReactStars
//     count={5}
//     onChange={RatingChanged}
//     size={24}
//     color2={"#ffd700"}
//   />;
// };
// // render(
// //   <ReactStars
// //     count={5}
// //     onChange={RatingChanged}
// //     size={24}
// //     color2={"#ffd700"}
// //   />,

// //   document.getElementById("rating")
// // );

// export default RatingChanged

