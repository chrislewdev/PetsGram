import React, { Component } from "react";
import "./DisplayName.css";

function DisplayName(props) {
  return <div className="displayname">{props.displayname}</div>;
}

export default DisplayName;
