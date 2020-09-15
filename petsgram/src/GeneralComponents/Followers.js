import React, { Component } from "react";
import "./Followers.css";

function Followers(props) {
  return (
    <div className="container">
      <div className="followers-wording">Followers</div>
      <div className="followers-number">{[props.followersNumber]}</div>
    </div>
  );
}

export default Followers;
