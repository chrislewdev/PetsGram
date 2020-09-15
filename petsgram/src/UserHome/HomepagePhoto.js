import React, { Component } from "react";
import "./HomepagePhoto.css";

function HomepagePhoto(props) {
  return <img src={props.photo} className="homepage-photo" />;
}

export default HomepagePhoto;
