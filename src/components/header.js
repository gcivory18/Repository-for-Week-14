import React from "react";
//created a simple header to the mvoie app
export default class Header extends React.Component {
  render() {
    return (
      <div className="card bg-dark text-light container-fluid">
        <h1 className="title">My Favorite Movies of 2022</h1>
        <p className="text">If you've seen any of these movies leave a review!</p>
      </div>
    );
  }
}
