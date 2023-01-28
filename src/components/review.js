import React from "react";
//components that lists a review
const Review = ({ review }) => {
  return (
    <div>
      <p id="reviews">"{review.review}"</p>
    </div>
  );
};

export default Review;



























// // import React, { useState } from "react";
// import ReviewForm from "./review-form";
// import Stars from "./review-stars";
// // import { useEffect } from "react";


// // MovieList: a container for all the Movie components and their data.
// // ReviewList: a container inside of a Movie that houses Review components.

// // const fetchMovies = () => {
// //     return [];
// // };

// function MovieContainer() {
//     // console.log(fetchMovies());
//     const Movies = [
//         {
//             id: 1,
//             title: "Glass Onion",
//             poster: "https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQad3ywgN7fuehEe-Rclfi35EvUuQ_SeRcHyDBHP3AXqKeiNEhYNpgEsnUNZUtMzkOvoO4uqqTLwqz7V5ApppgG-rWu3250xX7kqge1E10CA2Q4rGvfoH1F1MRXFp1qp41wXSCSwjhrrlvjJgYvRviCoR.jpg?r=ef1",
//             synopsis: "Tech billionaire Miles Bron invites his friends for a getaway on his private Greek island. When someone turns up dead, Detective Benoit Blanc is put on the case.",
//             reviews: "",
//         },
//         {
//             id: 2,
//             title: "Bullet Train",
//             poster: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.sonypictures.com%2Fmovies%2Fbullettrain&psig=AOvVaw31SYAlDZtU9VT8x1ebLi69&ust=1675029063654000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCND7hdef6_wCFQAAAAAdAAAAABAD",
//             synopsis: "Ladybug is an unlucky assassin who's determined to do his job peacefully after one too many gigs has gone off the rails. Fate, however, may have other plans as his latest mission puts him on a collision course with lethal adversaries from around the globe -- all with connected yet conflicting objectives -- on the world's fastest train.",
//         },
//         {
//             id: 3,
//             title: "Scream 5",
//             poster: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.deviantart.com%2Fchemicalmarcel%2Fart%2FScream-5-857257873&psig=AOvVaw0PiSZ8oncgoAsMe3BiKbns&ust=1675029185030000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCIjZiJSg6_wCFQAAAAAdAAAAABAD",
//             synopsis: "Twenty-five years after a streak of brutal murders shocked the quiet town of Woodsboro, Calif., a new killer dons the Ghostface mask and begins targeting a group of teenagers to resurrect secrets from the town's deadly past.",
//         },
//         {
//             id: 4,
//             title: "Smile",
//             poster: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fthefmbuzz.org%2F1952%2Fentertainment%2Fsmile-movie-review%2F&psig=AOvVaw0XAzQFvJbL_rSJyt5g8Sxb&ust=1675029300268000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCMj7mcmg6_wCFQAAAAAdAAAAABAD",
//             synopsis: "After witnessing a bizarre, traumatic incident involving a patient, Dr. Rose Cotter starts experiencing frightening occurrences that she can't explain. As an overwhelming terror begins taking over her life, Rose must confront her troubling past in order to survive and escape her horrifying new reality.",
//         },
//         {
//             id: 5,
//             title: "Amsterdam",
//             poster: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.20thcenturystudios.com%2Fmovies%2Famsterdam&psig=AOvVaw3Cb0xOwZu65zh3M-FrYDgW&ust=1674702120050000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCPCj1Nnd4fwCFQAAAAAdAAAAABAJ",
//             synopsis: "Set in the '30s, it follows three friends who witness a murder, become suspects themselves, and uncover one of the most outrageous plots in American history.",
//         },
//         {
//             id: 6,
//             title: "Puss in Boots",
//             poster: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amctheatres.com%2Fmovies%2Fpuss-in-boots-the-last-wish-66246&psig=AOvVaw10ZWrGKYBmxf8KfmDaOrlR&ust=1674702019574000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCJjXi67d4fwCFQAAAAAdAAAAABAR",
//             synopsis: "Puss in Boots discovers that his passion for adventure has taken its toll: he has burnt through eight of his nine lives. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
//         },
//     ];

//     // const [movies, setMovies] = useState([]);
//     // const fetchMovies = () => {
//     //     return Movies;
//     // };
//     // useEffect(() => {
//     //     const movies = fetchMovies();
//     //     console.log("MovieContainer: useEffect: movies", movies);
//     //     setMovies(movies);
//     // }, []);

//     return (
//         <div className="movie-container">
//             <h2>My Favorite Movies of 2022</h2>
//             <ul className="movie-list">
//                 {Movies.map((movie) => (
//                     <li key={movie.id} className="movie">
//                         <img src={movie.poster} alt={movie.title} />
//                         <p>{movie.synopsis}</p>
//                     </li>
//                 ))}
//             </ul>
//             <Stars />
//             <ReviewForm />
//         </div>
//     );
// }

// export default MovieContainer;
