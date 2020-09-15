import React, { Component } from "react";
import "./Buttons.css";

function Buttons(props) {
  return <button onClick={props.buttonOnClick}>{props.buttonName}</button>;
}

export default Buttons;
